var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { APIRequest, APIResponse } from "../../index";
import { Expose, Type } from "class-transformer";
export class TimeTableRequest extends APIRequest {
    schoolCode;
    date;
    constructor(schoolCode, date) {
        super();
        this.schoolCode = schoolCode;
        this.date = date;
    }
    getEndpoint() {
        return "/api/TimeTable/GetTimeTable/Student/" + this.schoolCode + "/" + this.date;
    }
    getResponseClass() {
        return TimetableResponse;
    }
    useCache() {
        return true;
    }
}
export class TimetableResponse extends APIResponse {
    hasError;
    message;
    statusCode;
    baseExceptionString;
    courseTable;
    plannerTypes;
}
__decorate([
    Expose({ name: "HasError" })
], TimetableResponse.prototype, "hasError", void 0);
__decorate([
    Expose({ name: "Message" })
], TimetableResponse.prototype, "message", void 0);
__decorate([
    Expose({ name: "StatusCode" })
], TimetableResponse.prototype, "statusCode", void 0);
__decorate([
    Expose({ name: "BaseExceptionString" })
], TimetableResponse.prototype, "baseExceptionString", void 0);
__decorate([
    Expose({ name: "CourseTable" }),
    Type(() => Course)
], TimetableResponse.prototype, "courseTable", void 0);
__decorate([
    Expose({ name: "PlannerTypes" }),
    Type(() => PlannerType)
], TimetableResponse.prototype, "plannerTypes", void 0);
export class Course {
    studentNumber;
    courseKey;
    attachedPlanners;
    studentCourse;
    baseExceptionString;
    statusCode;
    message;
    hasError;
}
__decorate([
    Expose({ name: "StudentNumber" })
], Course.prototype, "studentNumber", void 0);
__decorate([
    Expose({ name: "CourseKey" })
], Course.prototype, "courseKey", void 0);
__decorate([
    Expose({ name: "AttachedPlanners" })
], Course.prototype, "attachedPlanners", void 0);
__decorate([
    Expose({ name: "StudentCourse" }),
    Type(() => StudentCourse)
], Course.prototype, "studentCourse", void 0);
__decorate([
    Expose({ name: "BaseExceptionString" })
], Course.prototype, "baseExceptionString", void 0);
__decorate([
    Expose({ name: "StatusCode" })
], Course.prototype, "statusCode", void 0);
__decorate([
    Expose({ name: "Message" })
], Course.prototype, "message", void 0);
__decorate([
    Expose({ name: "HasError" })
], Course.prototype, "hasError", void 0);
export class StudentCourse {
    classCode;
    period;
    block;
    teacherName;
    roomNo;
    schoolCode;
    date;
    cycleDay;
    startTime;
    endTime;
    className;
    teacherEmail;
    semester;
    term;
    timeline;
    schoolYearTrack;
}
__decorate([
    Expose({ name: "ClassCode" })
], StudentCourse.prototype, "classCode", void 0);
__decorate([
    Expose({ name: "Period" })
], StudentCourse.prototype, "period", void 0);
__decorate([
    Expose({ name: "Block" })
], StudentCourse.prototype, "block", void 0);
__decorate([
    Expose({ name: "TeacherName" })
], StudentCourse.prototype, "teacherName", void 0);
__decorate([
    Expose({ name: "RoomNo" })
], StudentCourse.prototype, "roomNo", void 0);
__decorate([
    Expose({ name: "SchoolCode" })
], StudentCourse.prototype, "schoolCode", void 0);
__decorate([
    Expose({ name: "Date" })
], StudentCourse.prototype, "date", void 0);
__decorate([
    Expose({ name: "CycleDay" })
], StudentCourse.prototype, "cycleDay", void 0);
__decorate([
    Expose({ name: "StartTime" })
], StudentCourse.prototype, "startTime", void 0);
__decorate([
    Expose({ name: "EndTime" })
], StudentCourse.prototype, "endTime", void 0);
__decorate([
    Expose({ name: "ClassName" })
], StudentCourse.prototype, "className", void 0);
__decorate([
    Expose({ name: "TeacherEmail" })
], StudentCourse.prototype, "teacherEmail", void 0);
__decorate([
    Expose({ name: "Semester" })
], StudentCourse.prototype, "semester", void 0);
__decorate([
    Expose({ name: "Term" })
], StudentCourse.prototype, "term", void 0);
__decorate([
    Expose({ name: "Timeline" })
], StudentCourse.prototype, "timeline", void 0);
__decorate([
    Expose({ name: "SchoolYearTrack" })
], StudentCourse.prototype, "schoolYearTrack", void 0);
export class PlannerType {
    typeId;
    typeName;
    typeKey;
    typeHexCode;
    typeIconText;
    featureId;
    isActive;
    displayOrder;
}
__decorate([
    Expose({ name: "TypeId" })
], PlannerType.prototype, "typeId", void 0);
__decorate([
    Expose({ name: "TypeName" })
], PlannerType.prototype, "typeName", void 0);
__decorate([
    Expose({ name: "TypeKey" })
], PlannerType.prototype, "typeKey", void 0);
__decorate([
    Expose({ name: "TypeHexCode" })
], PlannerType.prototype, "typeHexCode", void 0);
__decorate([
    Expose({ name: "TypeIconText" })
], PlannerType.prototype, "typeIconText", void 0);
__decorate([
    Expose({ name: "FeatureId" })
], PlannerType.prototype, "featureId", void 0);
__decorate([
    Expose({ name: "IsActive" })
], PlannerType.prototype, "isActive", void 0);
__decorate([
    Expose({ name: "DisplayOrder" })
], PlannerType.prototype, "displayOrder", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL3RpbWV0YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUE2QjtJQUNqRSxVQUFVLENBQVM7SUFDbkIsSUFBSSxDQUFTO0lBQ2IsWUFBWSxVQUFrQixFQUFFLElBQVk7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sc0NBQXNDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFdBQVc7SUFFekMsUUFBUSxDQUFVO0lBRWxCLE9BQU8sQ0FBUztJQUVoQixVQUFVLENBQVM7SUFFbkIsbUJBQW1CLENBQVM7SUFHNUIsV0FBVyxDQUFXO0lBR3RCLFlBQVksQ0FBZ0I7Q0FFcEM7QUFkQztJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQzttREFDRjtBQUV6QjtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQztrREFDSDtBQUV2QjtJQURDLE1BQU0sQ0FBQyxF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