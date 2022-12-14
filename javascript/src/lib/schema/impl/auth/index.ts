import {API_BASE, CLIENT_ID} from '../../../../index';
import TDSBConnectsAPI from "../../../index";

import {APIRequest, APIResponse} from '../../index';
import axios from "axios";
import {Expose} from "class-transformer";
import FormData from 'form-data';

export class TokenResponse extends APIResponse {
  @Expose({name: "access_token"})
  public accessToken: string;
  @Expose({name: "token_type"})
  public tokenType: string; // Looks like it's always 'bearer'
  @Expose({name: "expires_in"})
  public expiresIn: number; // Unix epoch seconds
  @Expose({name: "refresh_token"})
  public refreshToken: string;
  @Expose({name: "refresh_token_expires_in"})
  public refreshTokenExpiresIn: string; // Unix epoch seconds WHY IS IT A STRING WHOEVER DESIGNED THIS NEEDS TO BE FIRED
  @Expose({name: ".issued"})
  public formattedIssued: string; // Like this: Tue, 13 Sep 2022 20:27:50 GMT
  @Expose({name: ".expires"})
  public formattedExpires: string; // Same as above

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
    return new Promise((resolve) => {
        if (this.refreshToken !== null && this.refreshToken !== undefined) {
          const form = new FormData();
          form.append('grant_type', 'refresh_token');
          form.append('refresh_token', this.refreshToken);

          axios.post(API_BASE + endpoint, form,
            {
              headers: {
                "X-Client-App-Info": CLIENT_ID,
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              transformRequest: (data) => data // Axios bug
            })
            .then((response) => {
              const data: any = this.handleResponse(response);
              resolve(data);
            })
        } else {
          const form = new FormData();
          form.append('grant_type', 'password');
          form.append('username', this.username);
          form.append('password', this.password);

          axios.post(API_BASE + endpoint,form,
            {
              headers: {
                "X-Client-App-Info": CLIENT_ID,
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              transformRequest: (data) => data // Axios bug
            })
            .then((response) => {
              const data: any = this.handleResponse(response);
              resolve(data);
            })
        }
      }
    );
  }
}
