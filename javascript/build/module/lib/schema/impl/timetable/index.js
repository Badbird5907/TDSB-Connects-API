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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL3RpbWV0YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxVQUE2QjtJQUNqRSxVQUFVLENBQVM7SUFDbkIsSUFBSSxDQUFTO0lBQ2IsWUFBWSxVQUFrQixFQUFFLElBQVk7UUFDMUMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sc0NBQXNDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNwRixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsV0FBVztJQUV6QyxRQUFRLENBQVU7SUFFbEIsT0FBTyxDQUFTO0lBRWhCLFVBQVUsQ0FBUztJQUVuQixtQkFBbUIsQ0FBUztJQUc1QixXQUFXLENBQVc7SUFHdEIsWUFBWSxDQUFnQjtDQUVwQztBQWRDO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO21EQUNGO0FBRXpCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO2tEQUNIO0FBRXZCO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxDQUFDO3FEQUNIO0FBRTFC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