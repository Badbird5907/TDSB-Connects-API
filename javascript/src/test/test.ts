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
    tdsbConnects.call(new UserRequest()).then((response) => {
      console.log("School code: ", response.getSchoolCode());
    }).catch(error => {
      console.error(error);
    })
    /*
    console.log('School ID: ', )
    // ddmmyyyy
    const response = tdsbConnects.call(new TimeTableRequest(process.env.SCHOOL_ID, "15122022"));
    response.then((user) => {
      console.log(user);
      user.courseTable.forEach((course: Course) => {
        console.log(course.studentCourse);
      });
    }).catch(err => {
      console.error(err);
    });
     */
  }, 1000);
});
