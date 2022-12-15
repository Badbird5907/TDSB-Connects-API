import { APIRequest, APIResponse } from "../../index";
export declare class TimeTableRequest extends APIRequest<TimetableResponse> {
    schoolCode: string;
    date: string;
    constructor(schoolCode: string, date: string);
    getEndpoint(): string;
    getResponseClass(): any;
}
export declare class TimetableResponse extends APIResponse {
    hasError: boolean;
    message: string;
    statusCode: number;
    baseExceptionString: string;
    courseTable: Course[];
    plannerTypes: PlannerType[];
}
export declare class Course {
    studentNumber: string;
    courseKey: string;
    attachedPlanners: any[];
    studentCourse: StudentCourse;
    baseExceptionString: string;
    statusCode: number;
    message: string;
    hasError: boolean;
}
export declare class StudentCourse {
    classCode: string;
    period: string;
    block: string;
    teacherName: string;
    roomNo: string;
    schoolCode: string;
    date: string;
    cycleDay: number;
    startTime: string;
    endTime: string;
    className: string;
    teacherEmail: string;
    semester: number;
    term: number;
    timeline: string;
    schoolYearTrack: string;
}
export declare class PlannerType {
    typeId: number;
    typeName: string;
    typeKey: string;
    typeHexCode: string;
    typeIconText: string;
    featureId: number;
    isActive: boolean;
    displayOrder: number;
}
