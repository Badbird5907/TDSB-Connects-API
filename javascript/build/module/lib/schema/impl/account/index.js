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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2FjY291bnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDcEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUUvQyxNQUFNLE9BQU8sV0FBWSxTQUFRLFVBQXdCO0lBQ3ZELFdBQVc7UUFDVCxPQUFPLDBCQUEwQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sV0FBWSxTQUFRLFdBQVc7SUFFbkMsUUFBUSxDQUFTO0lBRWpCLFFBQVEsQ0FBUztJQUVqQixTQUFTLENBQVM7SUFFbEIsTUFBTSxDQUFTO0lBRWYsU0FBUyxDQUFTO0lBRWxCLEdBQUcsQ0FBUztJQUVaLGVBQWUsQ0FBUztJQUV4QixpQkFBaUIsQ0FBUztDQUNsQztBQWZDO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzZDQUNMO0FBRXhCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDOzZDQUNMO0FBRXhCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzhDQUNMO0FBRXpCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOzJDQUNMO0FBRXRCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOzhDQUNMO0FBRXpCO0lBREMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO3dDQUNMO0FBRW5CO0lBREMsTUFBTSxDQUFDLEVB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