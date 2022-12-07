package dev.badbird.tdsbconnectsapi.util.object;

import dev.badbird.tdsbconnectsapi.schema.response.impl.StudentInfo;
import dev.badbird.tdsbconnectsapi.schema.response.impl.UserResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SimpleUserInfo {
    private String userId, userName, email;
    private StudentInfo studentInfo;
    private int schoolCode = -1, d2lUserId;
    private UserResponse userResponse;
    private UserResponse.SchoolList schoolInfo;
    public SimpleUserInfo(UserResponse response) {
        this.userResponse = response;
        this.userId = response.getUserId();
        this.userName = response.getUserName();
        this.email = response.getEmail();
        this.d2lUserId = response.getD2LUserId();
        if (response.getSchoolList().length > 0) {
            UserResponse.SchoolList schoolList = response.getSchoolList()[0];
            this.schoolCode = schoolList.getSchoolCode();
            this.schoolInfo = schoolList;
        }
        if (response.getSchoolCodeList().length > 0) {
            UserResponse.SchoolCodeList schoolCodeList = response.getSchoolCodeList()[0];
            this.studentInfo = schoolCodeList.getStudentInfo();
            if (schoolCode == -1) {
                this.schoolCode = Integer.parseInt(schoolCodeList.getSchoolCode());
            }
        }
    }

    public String getFirstName() {
        return studentInfo.getFirstName();
    }
    public String getLastName() {
        return studentInfo.getLastName();
    }
}
