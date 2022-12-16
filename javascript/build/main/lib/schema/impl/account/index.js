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
    (0, class_transformer_1.Expose)({ name: "SchoolCodeList" }),
    (0, class_transformer_1.Type)(() => SchoolCodeList)
], UserResponse.prototype, "schoolCodeList", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolList" }),
    (0, class_transformer_1.Type)(() => SchoolList)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2FjY291bnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUNBQW9EO0FBQ3BELHlEQUErQztBQUUvQyxNQUFhLFdBQVksU0FBUSxrQkFBd0I7SUFDdkQsV0FBVztRQUNULE9BQU8sMEJBQTBCLENBQUM7SUFDcEMsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Q0FDRjtBQVJELGtDQVFDO0FBRUQsTUFBYSxXQUFZLFNBQVEsbUJBQVc7Q0FpQjNDO0FBZkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7MkNBQ0g7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7d0NBQ0g7QUFFbkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztvREFDSDtBQUUvQjtJQURDLElBQUEsMEJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBQyxDQUFDO3NEQUNIO0FBaEJuQyxrQ0FpQkM7QUFFRCxNQUFhLFlBQWEsU0FBUSxtQkFBVztJQTRFM0MsYUFBYTtRQUNY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