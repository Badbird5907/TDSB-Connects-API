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
    Expose({ name: "SchoolCodeList" }),
    Type(() => SchoolCodeList)
], UserResponse.prototype, "schoolCodeList", void 0);
__decorate([
    Expose({ name: "SchoolList" }),
    Type(() => SchoolList)
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