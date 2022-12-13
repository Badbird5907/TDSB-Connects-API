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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2FjY291bnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQW9EO0FBQ3BELHlEQUErQztBQUUvQyxNQUFhLFdBQVksU0FBUSxrQkFBd0I7SUFDdkQsV0FBVztRQUNULE9BQU8sMEJBQTBCLENBQUM7SUFDcEMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVJELGtDQVFDO0FBRUQsTUFBYSxXQUFZLFNBQVEsbUJBQVc7Q0FpQjNDO0FBZkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7NkNBQ0w7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUM7NkNBQ0w7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7OENBQ0w7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7MkNBQ0w7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7OENBQ0w7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7d0NBQ0w7QUFFbkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztvREFDTDtBQUUvQjtJQURDLElBQUEsMEJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxDQUFDO3NEQUNMO0FBaEJuQyxrQ0FpQkM7QUFDRCxNQUFhLFlBQWEsU0FBUSxtQkFBVztDQXlFNUM7QUF2RUM7SUFE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