import TDSBConnectsAPI from "../lib";
import {UserRequest} from "../lib/schema/impl/account";

const username = process.env.TDSB_USERNAME;
const password = process.env.TDSB_PASSWORD;

if (username == null || password == null) {
  console.error("Please set TDSB_USERNAME and TDSB_PASSWORD environment variables");
  process.exit(1);
}

const tdsbConnects = new TDSBConnectsAPI(username, password, () => {
  console.log("Successfully logged in!");
  /*
  const oldAuth = tdsbConnects.authenticationInfo;
  const resp: TokenResponse = new TokenResponse();
  tdsbConnects.authenticationInfo.accessToken = oldAuth.accessToken;
  tdsbConnects.authenticationInfo.expiresIn = oldAuth.expiresIn;
  tdsbConnects.authenticationInfo.refreshToken = oldAuth.refreshToken;
  tdsbConnects.authenticationInfo.refreshTokenExpiresIn = oldAuth.refreshTokenExpiresIn;
  tdsbConnects.authenticationInfo.tokenType = oldAuth.tokenType;
  tdsbConnects.authenticationInfo = resp;
   */

  setTimeout(() => {
    console.log("Requesting user info...");
    const response = tdsbConnects.call(new UserRequest());
    response.then((user) => {
      console.log(user);
    }).catch(err => {
      console.error(err);
    });
  }, 1000);
});
