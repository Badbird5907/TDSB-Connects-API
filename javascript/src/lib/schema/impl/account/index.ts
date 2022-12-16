import {APIRequest, APIResponse} from "../../index";
import {Expose, Type} from "class-transformer";

export class UserRequest extends APIRequest<UserResponse> {
  getEndpoint(): string {
    return "/api/Account/GetUserInfo";
  }

  getResponseClass(): any {
    return UserResponse;
  }
}

export class StudentInfo extends APIResponse {
  @Expose({name: "PersonId"})
  public personId: string;
  @Expose({name: "LastName"})
  public lastName: string;
  @Expose({name: "FirstName"})
  public firstName: string;
  @Expose({name: "Gender"})
  public gender: string;
  @Expose({name: "BirthDate"})
  public birthDate: string;
  @Expose({name: "Age"})
  public age: string;
  @Expose({name: "SchoolYearTrack"})
  public schoolYearTrack: string;
  @Expose({name: "CurrentGradeLevel"})
  public currentGradeLevel: string;
}

export class UserResponse extends APIResponse {
  @Expose({name: "UserId"})
  public userId: string;
  @Expose({name: "UserName"})
  public userName: string;
  @Expose({name: "Role"})
  public role: number[];
  @Expose({name: "SchoolCodeList"})
  public schoolCodeList: SchoolCodeList[];
  @Expose({name: "SchoolList"})
  public schoolList: SchoolList[];
  @Expose({name: "Email"})
  public email: string;
  @Expose({name: "PrincipalEmailsList"})
  public principalEmailsList: any;
  @Expose({name: "VicePrincipalEmailsList"})
  public vicePrincipalEmailsList: any;
  @Expose({name: "SuperintendentEmailsList"})
  public superintendentEmailsList: any;
  @Expose({name: "Gender"})
  /**
   * @deprecated Empty in request
   */
  public gender: string;
  @Expose({name: "Age"})
  /**
   * @deprecated Empty in request
   */
  public age: string;
  @Expose({name: "D2LUserId"})
  public d2LUserId: number;
  @Expose({name: "TrilliumPersonId"})
  /**
   * @deprecated Empty in request
   */
  public trilliumPersonId: string;
  @Expose({name: "FirstName"})
  /**
   * @deprecated Empty in request
   */
  public firstName: string;
  @Expose({name: "LastName"})
  /**
   * @deprecated Empty in request
   */
  public lastName: string;
  @Expose({name: "BirthDate"})
  /**
   * @deprecated Empty in request
   */
  public birthDate: string;

  @Expose({name: "Picture"})
  public picture: any;

  @Expose({name: "Thumbnail"})
  public thumbnail: any;
  @Expose({name: "UserNavMenus"})
  public userNavMenus: UserNavMenu[];
  @Expose({name: "UserFeaturePermissions"})
  public userFeaturePermissions: UserFeaturePermission[];
  @Expose({name: "StudentInfo"})
  @Type(() => StudentInfo)
  /**
   * @deprecated Empty in request
   */
  public studentInfo: StudentInfo;
  @Expose({name: "IsStaff"})
  public isStaff: boolean;
  @Expose({name: "IsStudent"})
  public isStudent: boolean;
  @Expose({name: "TimetableCache"})
  public timetableCache: string;

  getSchoolCode(): number {
    return parseInt(this.schoolCodeList[0].schoolCode); // thanks TDSB!
  }
}

export class SchoolCodeList {
  @Expose({name: "AssignedRoleId"})
  public assignedRoleId: number;
  @Expose({name: "SchoolCode"})
  public schoolCode: string;
  @Expose({name: "StudentInfo"})
  @Type(() => StudentInfo)
  public studentInfo: StudentInfo;
}

export class UserMenu {
  @Expose({name: "Id"})
  public id: number;
  @Expose({name: "Title"})
  public title: string;
  @Expose({name: "IconSource"})
  public iconSource: string;
  @Expose({name: "LaunchBackgroundColor"})
  public launchBackgroundColor: string;
  @Expose({name: "TargetType"})
  public targetType: any;
  @Expose({name: "TargetTypeParameter"})
  public targetTypeParameter: any;
  @Expose({name: "RequiredPermissionName"})
  public requiredPermissionName: string;
  @Expose({name: "DisplayOrder"})
  public displayOrder: number;
  @Expose({name: "ShowInBottomToolBar"})
  public showInBottomToolBar: boolean;
  @Expose({name: "ShowInLaunchPad"})
  public showInLaunchPad: boolean;
  @Expose({name: "OpenInBrowser"})
  public openInBrowser: boolean;
  @Expose({name: "BrowserUrl"})
  public browserUrl: string;
}

export class UserNavMenu {
  @Expose({name: "SchoolCode"})
  public schoolCode: string;
  @Expose({name: "UserRoleId"})
  public userRoleId: number;
  @Expose({name: "UserMenus"})
  public userMenus: UserMenu[];
}

export class UserFeaturePermission {
  @Expose({name: "FeatureId"})
  public featureId: number;
  @Expose({name: "PermissionTypeId"})
  public permissionTypeId: number;
}

export class UserFeaturePermissions {
  @Expose({name: "UserRoleId"})
  public userRoleId: number;
  @Expose({name: "UserFeaturePermissions"})
  public userFeaturePermissions: UserFeaturePermission[];
}

export class SchoolList {
  @Expose({name: "SchoolCode"})
  public schoolCode: number;
  @Expose({name: "SchoolName"})
  public schoolName: string;
  @Expose({name: "IsOnboard"})
  public isOnboard: boolean;
}

export class SchoolSetting {
  @Expose({name: "Id"})
  public id: number;
  @Expose({name: "SchoolCode"})
  public schoolCode: string;
  @Expose({name: "CurrentSession"})
  public currentSession: string;
  @Expose({name: "SchoolYearTrack"})
  public schoolYearTrack: string;
  @Expose({name: "SessionStart"})
  public sessionStart: string;
  @Expose({name: "SessionEnd"})
  public sessionEnd: string;
}
