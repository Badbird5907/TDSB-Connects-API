import {TokenRequest, TokenResponse} from "./schema/impl/auth";
import {APIRequest} from "./schema";

export class TDSBConnectsAPI {
  public username: string;
  public password: string;
  public authenticationInfo: TokenResponse;

  public ready: boolean = false as boolean;
  public readyCallback: (() => void) | null = null;
  public useCache: boolean = true as boolean;
  constructor(username: string, password: string, readyCallback: () => void) {
    this.username = username;
    this.password = password;
    this.readyCallback = readyCallback;
    this.connect();
  }

  async call(request: APIRequest<any>) {
    return request.send(this);
  }

  connect() {
    this.call(TokenRequest.userPass(this.username, this.password, this)).then((response: TokenResponse) => {
      this.authenticationInfo = response;
      this.ready = true;
      if (this.readyCallback) this.readyCallback();
    }).catch((error) => {
      console.error('Error logging in: ' + error);
    });
  }
}

export default TDSBConnectsAPI;
