import { APIRequest, APIResponse } from "../../index";
export declare class UserRequest extends APIRequest<UserResponse> {
    getEndpoint(): string;
    getResponseClass(): any;
}
export declare class StudentInfo extends APIResponse {
    personId: string;
    lastName: string;
    firstName: string;
    gender: string;
    birthDate: string;
    age: string;
    schoolYearTrack: string;
    currentGradeLevel: string;
}
export declare class UserResponse extends APIResponse {
    userId: string;
    userName: string;
    role: number[];
    schoolCodeList: SchoolCodeList[];
    schoolList: SchoolList[];
    email: string;
    principalEmailsList: any;
    vicePrincipalEmailsList: any;
    superintendentEmailsList: any;
    gender: string;
    age: string;
    d2LUserId: number;
    trilliumPersonId: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    picture: any;
    thumbnail: any;
    userNavMenus: UserNavMenu[];
    userFeaturePermissions: UserFeaturePermission[];
    studentInfo: StudentInfo;
    isStaff: boolean;
    isStudent: boolean;
    timetableCache: string;
    getSchoolCode(): number;
}
export declare class SchoolCodeList {
    assignedRoleId: number;
    schoolCode: string;
    studentInfo: StudentInfo;
}
export declare class UserMenu {
    id: number;
    title: string;
    iconSource: string;
    launchBackgroundColor: string;
    targetType: any;
    targetTypeParameter: any;
    requiredPermissionName: string;
    displayOrder: number;
    showInBottomToolBar: boolean;
    showInLaunchPad: boolean;
    openInBrowser: boolean;
    browserUrl: string;
}
export declare class UserNavMenu {
    schoolCode: string;
    userRoleId: number;
    userMenus: UserMenu[];
}
export declare class UserFeaturePermission {
    featureId: number;
    permissionTypeId: number;
}
export declare class UserFeaturePermissions {
    userRoleId: number;
    userFeaturePermissions: UserFeaturePermission[];
}
export declare class SchoolList {
    schoolCode: number;
    schoolName: string;
    isOnboard: boolean;
}
export declare class SchoolSetting {
    id: number;
    schoolCode: string;
    currentSession: string;
    schoolYearTrack: string;
    sessionStart: string;
    sessionEnd: string;
}
