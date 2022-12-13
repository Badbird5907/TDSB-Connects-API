import {JsonProperty} from 'json-typescript-mapper';

import {API_BASE, CLIENT_ID} from '../../index';
import TDSBConnectsAPI from "../index";

import {APIRequest, APIResponse} from './index';
import axios from "axios";
import FormData from "form-data";

export class TokenResponse extends APIResponse {
  @JsonProperty('access_token')
  readonly accessToken: string;
  @JsonProperty('token_type')
  readonly tokenType: string; // Looks like it's always 'bearer'
  @JsonProperty('expires_in')
  readonly expiresIn: number; // Unix epoch seconds
  @JsonProperty('refresh_token')
  readonly refreshToken: string;
  @JsonProperty('refresh_token_expires_in')
  readonly refreshTokenExpiresIn: string; // Unix epoch seconds WHY IS IT A STRING WHOEVER DESIGNED THIS NEEDS TO BE FIRED
  @JsonProperty('.issued')
  readonly formattedIssued: string; // Like this: Tue, 13 Sep 2022 20:27:50 GMT
  @JsonProperty('.expires')
  readonly formattedExpires: string; // Same as above

  isExpired(): boolean {
    return Date.now() / 1000 >= this.expiresIn;
  }

  isRefreshTokenExpired(): boolean {
    return Date.now() / 1000 >= parseInt(this.refreshTokenExpiresIn);
  }

  refreshIfNeeded(tdsbConnects: TDSBConnectsAPI): Promise<TokenResponse> {
    return new Promise((resolve, reject) => {
      if (this.isRefreshTokenExpired()) {
        tdsbConnects.call(TokenRequest.userPass(tdsbConnects.username, tdsbConnects.password, tdsbConnects))
          .then((response: TokenResponse) => {
            tdsbConnects.authenticationInfo = response;
            resolve(response);
          })
          .catch(reject);
        return;
      }
      if (this.isExpired()) {
        tdsbConnects.call(TokenRequest.refreshToken(this.refreshToken, tdsbConnects))
          .then((response: TokenResponse) => {
            tdsbConnects.authenticationInfo = response;
            resolve(response);
          })
          .catch(reject);
        return;
      }
      resolve(this);
    });
  }
}

export class TokenRequest extends APIRequest<TokenResponse> {
  public username: string;
  public password: string;
  public refreshToken: string | null = null;
  public tdsbConnects: TDSBConnectsAPI;


  /**
   * @deprecated Use {@link refreshToken} or {@link userPass} instead because of js limitations
   * @param tdsbConnects
   */
  constructor(tdsbConnects: TDSBConnectsAPI) {
    super();
    this.tdsbConnects = tdsbConnects;
  }

  public static refreshToken(refresh: string, tdsbConnects: TDSBConnectsAPI): TokenRequest {
    const request: TokenRequest = new TokenRequest(tdsbConnects);
    request.refreshToken = refresh;
    return request;
  }

  public static userPass(username: string, password: string, tdsbConnects: TDSBConnectsAPI): TokenRequest {
    const request: TokenRequest = new TokenRequest(tdsbConnects);
    request.username = username;
    request.password = password;
    return request;
  }

  getEndpoint(): string {
    return 'token';
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - we are overriding the method but not using the parameter
  buildHeaders(tdsbConnects: TDSBConnectsAPI): any {
    return {
      "X-Client-App-Info": CLIENT_ID
    };
  }

  getResponseClass(): any {
    return TokenResponse;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - we are overriding the method but not using the parameter
  async send(tdsbConnects: TDSBConnectsAPI): Promise<TokenResponse> {
    const endpoint: string = this.getEndpoint();
    if (endpoint.startsWith("/")) endpoint.substring(1);
    console.log('Sending token request to endpoint: ', endpoint);
    return new Promise((resolve) => {
        if (this.refreshToken !== null && this.refreshToken !== undefined) {
          const form = new FormData();
          form.append('grant_type', 'refresh_token');
          form.append('refresh_token', this.refreshToken);
          axios.post(API_BASE + endpoint, form,
            {
              headers: {
                "X-Client-App-Info": CLIENT_ID,
                ...form.getHeaders()
              },
              transformRequest: (data) => data // Axios bug
            })
            .then((response) => {
              resolve(response.data);
            })
        } else {
          const form = new FormData();
          form.append('grant_type', 'password');
          form.append('username', this.username);
          form.append('password', this.password);

          axios.post(API_BASE + endpoint, form,
            {
              headers: {
                "X-Client-App-Info": CLIENT_ID,
                "Content-Type": "application/x-www-form-urlencoded",
                ...form.getHeaders()
              },
              transformRequest: (data) => data // Axios bug
            })
            .then((response) => {
              resolve(response.data);
            })
        }
      }
    );
  }
}
