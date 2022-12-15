"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlannerType = exports.StudentCourse = exports.Course = exports.TimetableResponse = exports.TimeTableRequest = void 0;
const index_1 = require("../../index");
const class_transformer_1 = require("class-transformer");
class TimeTableRequest extends index_1.APIRequest {
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
exports.TimeTableRequest = TimeTableRequest;
class TimetableResponse extends index_1.APIResponse {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "HasError" })
], TimetableResponse.prototype, "hasError", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Message" })
], TimetableResponse.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StatusCode" })
], TimetableResponse.prototype, "statusCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "BaseExceptionString" })
], TimetableResponse.prototype, "baseExceptionString", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "CourseTable" }),
    (0, class_transformer_1.Type)(() => Course)
], TimetableResponse.prototype, "courseTable", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "PlannerTypes" }),
    (0, class_transformer_1.Type)(() => PlannerType)
], TimetableResponse.prototype, "plannerTypes", void 0);
exports.TimetableResponse = TimetableResponse;
class Course {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "StudentNumber" })
], Course.prototype, "studentNumber", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "CourseKey" })
], Course.prototype, "courseKey", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "AttachedPlanners" })
], Course.prototype, "attachedPlanners", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StudentCourse" }),
    (0, class_transformer_1.Type)(() => StudentCourse)
], Course.prototype, "studentCourse", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "BaseExceptionString" })
], Course.prototype, "baseExceptionString", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StatusCode" })
], Course.prototype, "statusCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Message" })
], Course.prototype, "message", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "HasError" })
], Course.prototype, "hasError", void 0);
exports.Course = Course;
class StudentCourse {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "ClassCode" })
], StudentCourse.prototype, "classCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Period" })
], StudentCourse.prototype, "period", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Block" })
], StudentCourse.prototype, "block", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TeacherName" })
], StudentCourse.prototype, "teacherName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "RoomNo" })
], StudentCourse.prototype, "roomNo", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolCode" })
], StudentCourse.prototype, "schoolCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Date" })
], StudentCourse.prototype, "date", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "CycleDay" })
], StudentCourse.prototype, "cycleDay", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "StartTime" })
], StudentCourse.prototype, "startTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "EndTime" })
], StudentCourse.prototype, "endTime", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "ClassName" })
], StudentCourse.prototype, "className", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TeacherEmail" })
], StudentCourse.prototype, "teacherEmail", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Semester" })
], StudentCourse.prototype, "semester", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Term" })
], StudentCourse.prototype, "term", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "Timeline" })
], StudentCourse.prototype, "timeline", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "SchoolYearTrack" })
], StudentCourse.prototype, "schoolYearTrack", void 0);
exports.StudentCourse = StudentCourse;
class PlannerType {
}
__decorate([
    (0, class_transformer_1.Expose)({ name: "TypeId" })
], PlannerType.prototype, "typeId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TypeName" })
], PlannerType.prototype, "typeName", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TypeKey" })
], PlannerType.prototype, "typeKey", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TypeHexCode" })
], PlannerType.prototype, "typeHexCode", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "TypeIconText" })
], PlannerType.prototype, "typeIconText", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "FeatureId" })
], PlannerType.prototype, "featureId", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "IsActive" })
], PlannerType.prototype, "isActive", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "DisplayOrder" })
], PlannerType.prototype, "displayOrder", void 0);
exports.PlannerType = PlannerType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL3RpbWV0YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FBb0Q7QUFDcEQseURBQStDO0FBRy9DLE1BQWEsZ0JBQWlCLFNBQVEsa0JBQTZCO0lBR2pFLFlBQVksVUFBa0IsRUFBRSxJQUFZO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEYsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBaEJELDRDQWdCQztBQUVELE1BQWEsaUJBQWtCLFNBQVEsbUJBQVc7Q0FnQmpEO0FBZEM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7bURBQ0Y7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7a0RBQ0g7QUFFdkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUM7cURBQ0g7QUFFMUI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUMsQ0FBQzs4REFDSDtBQUduQztJQUZDLElBQUEsMEJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQztJQUM3QixJQUFBLHdCQUFJLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNVO0FBRzdCO0lBRkMs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QyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7MkNBQ0g7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7NENBQ0g7QUFFdkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLENBQUM7Z0RBQ0g7QUFFM0I7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUM7aURBQ0g7QUFFNUI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7OENBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7NkNBQ0Y7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUM7aURBQ0g7QUFoQjlCLGtDQWlCQyJ9