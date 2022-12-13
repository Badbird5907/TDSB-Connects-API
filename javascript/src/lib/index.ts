import {TokenRequest, TokenResponse} from "./schema/token";
import {APIRequest} from "./schema";

export class TDSBConnectsAPI {
  public username: string;
  public password: string;
  public authenticationInfo: TokenResponse;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
    this.connect();
  }

  async call(request: APIRequest<any>) {
    return request.send(this);
  }

  async connect() {
    this.call(TokenRequest.userPass(this.username, this.password, this)).then((response: TokenResponse) => {
      this.authenticationInfo = response;
    }).catch((error) => {
      console.log(error);
    });
  }
}

export default TDSBConnectsAPI;
