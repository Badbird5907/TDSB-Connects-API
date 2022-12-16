var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { APIRequest, APIResponse } from "../../index";
import { Expose, Type } from "class-transformer";
export class UserRequest extends APIRequest {
    getEndpoint() {
        return "/api/Account/GetUserInfo";
    }
    getResponseClass() {
        return UserResponse;
    }
}
export class StudentInfo extends APIResponse {
    personId;
    lastName;
    firstName;
    gender;
    birthDate;
    age;
    schoolYearTrack;
    currentGradeLevel;
}
__decorate([
    Expose({ name: "PersonId" })
], StudentInfo.prototype, "personId", void 0);
__decorate([
    Expose({ name: "LastName" })
], StudentInfo.prototype, "lastName", void 0);
__decorate([
    Expose({ name: "FirstName" })
], StudentInfo.prototype, "firstName", void 0);
__decorate([
    Expose({ name: "Gender" })
], StudentInfo.prototype, "gender", void 0);
__decorate([
    Expose({ name: "BirthDate" })
], StudentInfo.prototype, "birthDate", void 0);
__decorate([
    Expose({ name: "Age" })
], StudentInfo.prototype, "age", void 0);
__decorate([
    Expose({ name: "SchoolYearTrack" })
], StudentInfo.prototype, "schoolYearTrack", void 0);
__decorate([
    Expose({ name: "CurrentGradeLevel" })
], StudentInfo.prototype, "currentGradeLevel", void 0);
export class UserResponse extends APIResponse {
    userId;
    userName;
    role;
    schoolCodeList;
    schoolList;
    email;
    principalEmailsList;
    vicePrincipalEmailsList;
    superintendentEmailsList;
    gender;
    age;
    d2LUserId;
    trilliumPersonId;
    firstName;
    lastName;
    birthDate;
    picture;
    thumbnail;
    userNavMenus;
    userFeaturePermissions;
    studentInfo;
    isStaff;
    isStudent;
    timetableCache;
    getSchoolCode() {
        return parseInt(this.schoolCodeList[0].schoolCode); // thanks TDSB!
    }
}
__decorate([
    Expose({ name: "UserId" })
], UserResponse.prototype, "userId", void 0);
__decorate([
    Expose({ name: "UserName" })
], UserResponse.prototype, "userName", void 0);
__decorate([
    Expose({ name: "Role" })
], UserResponse.prototype, "role", void 0);
__decorate([
    Expose({ name: "SchoolCodeList" })
], UserResponse.prototype, "schoolCodeList", void 0);
__decorate([
    Expose({ name: "SchoolList" })
], UserResponse.prototype, "schoolList", void 0);
__decorate([
    Expose({ name: "Email" })
], UserResponse.prototype, "email", void 0);
__decorate([
    Expose({ name: "PrincipalEmailsList" })
], UserResponse.prototype, "principalEmailsList", void 0);
__decorate([
    Expose({ name: "VicePrincipalEmailsList" })
], UserResponse.prototype, "vicePrincipalEmailsList", void 0);
__decorate([
    Expose({ name: "SuperintendentEmailsList" })
], UserResponse.prototype, "superintendentEmailsList", void 0);
__decorate([
    Expose({ name: "Gender" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "gender", void 0);
__decorate([
    Expose({ name: "Age" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "age", void 0);
__decorate([
    Expose({ name: "D2LUserId" })
], UserResponse.prototype, "d2LUserId", void 0);
__decorate([
    Expose({ name: "TrilliumPersonId" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "trilliumPersonId", void 0);
__decorate([
    Expose({ name: "FirstName" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "firstName", void 0);
__decorate([
    Expose({ name: "LastName" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "lastName", void 0);
__decorate([
    Expose({ name: "BirthDate" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "birthDate", void 0);
__decorate([
    Expose({ name: "Picture" })
], UserResponse.prototype, "picture", void 0);
__decorate([
    Expose({ name: "Thumbnail" })
], UserResponse.prototype, "thumbnail", void 0);
__decorate([
    Expose({ name: "UserNavMenus" })
], UserResponse.prototype, "userNavMenus", void 0);
__decorate([
    Expose({ name: "UserFeaturePermissions" })
], UserResponse.prototype, "userFeaturePermissions", void 0);
__decorate([
    Expose({ name: "StudentInfo" }),
    Type(() => StudentInfo)
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "studentInfo", void 0);
__decorate([
    Expose({ name: "IsStaff" })
], UserResponse.prototype, "isStaff", void 0);
__decorate([
    Expose({ name: "IsStudent" })
], UserResponse.prototype, "isStudent", void 0);
__decorate([
    Expose({ name: "TimetableCache" })
], UserResponse.prototype, "timetableCache", void 0);
export class SchoolCodeList {
    assignedRoleId;
    schoolCode;
    studentInfo;
}
__decorate([
    Expose({ name: "AssignedRoleId" })
], SchoolCodeList.prototype, "assignedRoleId", void 0);
__decorate([
    Expose({ name: "SchoolCode" })
], SchoolCodeList.prototype, "schoolCode", void 0);
__decorate([
    Expose({ name: "StudentInfo" }),
    Type(() => StudentInfo)
], SchoolCodeList.prototype, "studentInfo", void 0);
export class UserMenu {
    id;
    title;
    iconSource;
    launchBackgroundColor;
    targetType;
    targetTypeParameter;
    requiredPermissionName;
    displayOrder;
    showInBottomToolBar;
    showInLaunchPad;
    openInBrowser;
    browserUrl;
}
__decorate([
    Expose({ name: "Id" })
], UserMenu.prototype, "id", void 0);
__decorate([
    Expose({ name: "Title" })
], UserMenu.prototype, "title", void 0);
__decorate([
    Expose({ name: "IconSource" })
], UserMenu.prototype, "iconSource", void 0);
__decorate([
    Expose({ name: "LaunchBackgroundColor" })
], UserMenu.prototype, "launchBackgroundColor", void 0);
__decorate([
    Expose({ name: "TargetType" })
], UserMenu.prototype, "targetType", void 0);
__decorate([
    Expose({ name: "TargetTypeParameter" })
], UserMenu.prototype, "targetTypeParameter", void 0);
__decorate([
    Expose({ name: "RequiredPermissionName" })
], UserMenu.prototype, "requiredPermissionName", void 0);
__decorate([
    Expose({ name: "DisplayOrder" })
], UserMenu.prototype, "displayOrder", void 0);
__decorate([
    Expose({ name: "ShowInBottomToolBar" })
], UserMenu.prototype, "showInBottomToolBar", void 0);
__decorate([
    Expose({ name: "ShowInLaunchPad" })
], UserMenu.prototype, "showInLaunchPad", void 0);
__decorate([
    Expose({ name: "OpenInBrowser" })
], UserMenu.prototype, "openInBrowser", void 0);
__decorate([
    Expose({ name: "BrowserUrl" })
], UserMenu.prototype, "browserUrl", void 0);
export class UserNavMenu {
    schoolCode;
    userRoleId;
    userMenus;
}
__decorate([
    Expose({ name: "SchoolCode" })
], UserNavMenu.prototype, "schoolCode", void 0);
__decorate([
    Expose({ name: "UserRoleId" })
], UserNavMenu.prototype, "userRoleId", void 0);
__decorate([
    Expose({ name: "UserMenus" })
], UserNavMenu.prototype, "userMenus", void 0);
export class UserFeaturePermission {
    featureId;
    permissionTypeId;
}
__decorate([
    Expose({ name: "FeatureId" })
], UserFeaturePermission.prototype, "featureId", void 0);
__decorate([
    Expose({ name: "PermissionTypeId" })
], UserFeaturePermission.prototype, "permissionTypeId", void 0);
export class UserFeaturePermissions {
    userRoleId;
    userFeaturePermissions;
}
__decorate([
    Expose({ name: "UserRoleId" })
], UserFeaturePermissions.prototype, "userRoleId", void 0);
__decorate([
    Expose({ name: "UserFeaturePermissions" })
], UserFeaturePermissions.prototype, "userFeaturePermissions", void 0);
export class SchoolList {
    schoolCode;
    schoolName;
    isOnboard;
}
__decorate([
    Expose({ name: "SchoolCode" })
], SchoolList.prototype, "schoolCode", void 0);
__decorate([
    Expose({ name: "SchoolName" })
], SchoolList.prototype, "schoolName", void 0);
__decorate([
    Expose({ name: "IsOnboard" })
], SchoolList.prototype, "isOnboard", void 0);
export class SchoolSetting {
    id;
    schoolCode;
    currentSession;
    schoolYearTrack;
    sessionStart;
    sessionEnd;
}
__decorate([
    Expose({ name: "Id" })
], SchoolSetting.prototype, "id", void 0);
__decorate([
    Expose({ name: "SchoolCode" })
], SchoolSetting.prototype, "schoolCode", void 0);
__decorate([
    Expose({ name: "CurrentSession" })
], SchoolSetting.prototype, "currentSession", void 0);
__decorate([
    Expose({ name: "SchoolYearTrack" })
], SchoolSetting.prototype, "schoolYearTrack", void 0);
__decorate([
    Expose({ name: "SessionStart" })
], SchoolSetting.prototype, "sessionStart", void 0);
__decorate([
    Expose({ name: "SessionEnd" })
], SchoolSetting.prototype, "sessionEnd", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2FjY291bnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQXdCO0lBQ3ZELFdBQVc7UUFDVCxPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7SUFFbkMsUUFBUSxDQUFTO0lBRWpCLFFBQVEsQ0FBUztJQUVqQixTQUFTLENBQVM7SUFFbEIsTUFBTSxDQUFTO0lBRWYsU0FBUyxDQUFTO0lBRWxCLEdBQUcsQ0FBUztJQUVaLGVBQWUsQ0FBUztJQUV4QixpQkFBaUIsQ0FBUztDQUNsQztBQWZDO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzZDQUNIO0FBRXhCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzZDQUNIO0FBRXhCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOzhDQUNIO0FBRXpCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOzJDQUNIO0FBRXRCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOzhDQUNIO0FBRXpCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3dDQUNIO0FBRW5CO0lBREMsTUFBTSxDQUFDLEVB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