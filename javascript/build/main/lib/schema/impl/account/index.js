"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolSetting = exports.SchoolList = exports.UserFeaturePermissions = exports.UserFeaturePermission = exports.UserNavMenu = exports.UserMenu = exports.SchoolCodeList = exports.UserResponse = exports.StudentInfo = exports.UserRequest = void 0;
const index_1 = require("../../index");
const class_transformer_1 = require("class-transformer");
class UserRequest extends index_1.APIRequest {
    getEndpoint() {
        return "/api/Account/GetUserInfo";
    }
    getResponseClass() {
        return UserResponse;
    }
}
exports.UserRequest = UserRequest;
class StudentInfo extends index_1.APIResponse {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "PersonId" })
], StudentInfo.prototype, "personId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "LastName" })
], StudentInfo.prototype, "lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "FirstName" })
], StudentInfo.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Gender" })
], StudentInfo.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "BirthDate" })
], StudentInfo.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Age" })
], StudentInfo.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolYearTrack" })
], StudentInfo.prototype, "schoolYearTrack", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "CurrentGradeLevel" })
], StudentInfo.prototype, "currentGradeLevel", void 0);
exports.StudentInfo = StudentInfo;
class UserResponse extends index_1.APIResponse {
    getSchoolCode() {
        return parseInt(this.schoolCodeList[0].schoolCode); // thanks TDSB!
    }
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserId" })
], UserResponse.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserName" })
], UserResponse.prototype, "userName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Role" })
], UserResponse.prototype, "role", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCodeList" })
], UserResponse.prototype, "schoolCodeList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolList" })
], UserResponse.prototype, "schoolList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Email" })
], UserResponse.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "PrincipalEmailsList" })
], UserResponse.prototype, "principalEmailsList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "VicePrincipalEmailsList" })
], UserResponse.prototype, "vicePrincipalEmailsList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SuperintendentEmailsList" })
], UserResponse.prototype, "superintendentEmailsList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Gender" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Age" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "age", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "D2LUserId" })
], UserResponse.prototype, "d2LUserId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TrilliumPersonId" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "trilliumPersonId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "FirstName" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "firstName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "LastName" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "lastName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "BirthDate" })
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "birthDate", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Picture" })
], UserResponse.prototype, "picture", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Thumbnail" })
], UserResponse.prototype, "thumbnail", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserNavMenus" })
], UserResponse.prototype, "userNavMenus", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserFeaturePermissions" })
], UserResponse.prototype, "userFeaturePermissions", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StudentInfo" }),
    (0, class_transformer_1.Type)(() => StudentInfo)
    /**
     * @deprecated Empty in request
     */
], UserResponse.prototype, "studentInfo", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "IsStaff" })
], UserResponse.prototype, "isStaff", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "IsStudent" })
], UserResponse.prototype, "isStudent", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TimetableCache" })
], UserResponse.prototype, "timetableCache", void 0);
exports.UserResponse = UserResponse;
class SchoolCodeList {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "AssignedRoleId" })
], SchoolCodeList.prototype, "assignedRoleId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCode" })
], SchoolCodeList.prototype, "schoolCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StudentInfo" }),
    (0, class_transformer_1.Type)(() => StudentInfo)
], SchoolCodeList.prototype, "studentInfo", void 0);
exports.SchoolCodeList = SchoolCodeList;
class UserMenu {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "Id" })
], UserMenu.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Title" })
], UserMenu.prototype, "title", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "IconSource" })
], UserMenu.prototype, "iconSource", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "LaunchBackgroundColor" })
], UserMenu.prototype, "launchBackgroundColor", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TargetType" })
], UserMenu.prototype, "targetType", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TargetTypeParameter" })
], UserMenu.prototype, "targetTypeParameter", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "RequiredPermissionName" })
], UserMenu.prototype, "requiredPermissionName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "DisplayOrder" })
], UserMenu.prototype, "displayOrder", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "ShowInBottomToolBar" })
], UserMenu.prototype, "showInBottomToolBar", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "ShowInLaunchPad" })
], UserMenu.prototype, "showInLaunchPad", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "OpenInBrowser" })
], UserMenu.prototype, "openInBrowser", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "BrowserUrl" })
], UserMenu.prototype, "browserUrl", void 0);
exports.UserMenu = UserMenu;
class UserNavMenu {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCode" })
], UserNavMenu.prototype, "schoolCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserRoleId" })
], UserNavMenu.prototype, "userRoleId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserMenus" })
], UserNavMenu.prototype, "userMenus", void 0);
exports.UserNavMenu = UserNavMenu;
class UserFeaturePermission {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "FeatureId" })
], UserFeaturePermission.prototype, "featureId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "PermissionTypeId" })
], UserFeaturePermission.prototype, "permissionTypeId", void 0);
exports.UserFeaturePermission = UserFeaturePermission;
class UserFeaturePermissions {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserRoleId" })
], UserFeaturePermissions.prototype, "userRoleId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "UserFeaturePermissions" })
], UserFeaturePermissions.prototype, "userFeaturePermissions", void 0);
exports.UserFeaturePermissions = UserFeaturePermissions;
class SchoolList {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCode" })
], SchoolList.prototype, "schoolCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolName" })
], SchoolList.prototype, "schoolName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "IsOnboard" })
], SchoolList.prototype, "isOnboard", void 0);
exports.SchoolList = SchoolList;
class SchoolSetting {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "Id" })
], SchoolSetting.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCode" })
], SchoolSetting.prototype, "schoolCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "CurrentSession" })
], SchoolSetting.prototype, "currentSession", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolYearTrack" })
], SchoolSetting.prototype, "schoolYearTrack", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SessionStart" })
], SchoolSetting.prototype, "sessionStart", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SessionEnd" })
], SchoolSetting.prototype, "sessionEnd", void 0);
exports.SchoolSetting = SchoolSetting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2FjY291bnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQW9EO0FBQ3BELHlEQUErQztBQUUvQyxNQUFhLFdBQVksU0FBUSxrQkFBd0I7SUFDdkQsV0FBVztRQUNULE9BQU8sMEJBQTBCLENBQUM7SUFDcEMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVJELGtDQVFDO0FBRUQsTUFBYSxXQUFZLFNBQVEsbUJBQVc7Q0FpQjNDO0FBZkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7MkNBQ0g7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7d0NBQ0g7QUFFbkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztvREFDSDtBQUUvQjtJQURDLElBQUEsMEJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQyxDQUFDO3NEQUNIO0FBaEJuQyxrQ0FpQkM7QUFFRCxNQUFhLFlBQWEsU0FBUSxtQkFBVztJQTBFM0MsYUFBYTtRQUNY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