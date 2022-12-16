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
    useCache() {
        return true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL3RpbWV0YWJsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FBb0Q7QUFDcEQseURBQStDO0FBRy9DLE1BQWEsZ0JBQWlCLFNBQVEsa0JBQTZCO0lBR2pFLFlBQVksVUFBa0IsRUFBRSxJQUFZO1FBQzFDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLHNDQUFzQyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDcEYsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8saUJBQWlCLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRjtBQXBCRCw0Q0FvQkM7QUFFRCxNQUFhLGlCQUFrQixTQUFRLG1CQUFXO0NBZ0JqRDtBQWRDO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO21EQUNGO0FBRXpCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO2tEQUNIO0FBRXZCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQyxDQUFDO3FEQUNIO0FBRTFCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDLENBQUM7OERBQ0g7QUFHbkM7SUFGQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLENBQUM7SUFDN0IsSUFBQSx3QkFBSSxFQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDVTtBQUc3QjtJQUZDLElBQUEsMEJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQztJQUM5QixJQUFBLHdCQUFJLEVBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNXO0FBZHJDLDhDQWdCQztBQUVELE1BQWEsTUFBTTtDQWtCbEI7QUFoQkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFDLENBQUM7NkNBQ0g7QUFFN0I7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7eUNBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQztnREFDSjtBQUcvQjtJQUZDLElBQUEsMEJBQU0sRUFBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUMvQixJQUFBLHdCQUFJLEVBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDOzZDQUNVO0FBRXBDO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFDLENBQUM7bURBQ0g7QUFFbkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUM7MENBQ0g7QUFFMUI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7dUNBQ0g7QUFFdkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7d0NBQ0Y7QUFqQjNCLHdCQWtCQztBQUVELE1BQWEsYUFBYTtDQWlDekI7QUEvQkM7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7Z0RBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7NkNBQ0g7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7NENBQ0g7QUFFckI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLENBQUM7a0RBQ0g7QUFFM0I7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLENBQUM7NkNBQ0g7QUFFdEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUM7aURBQ0g7QUFFMUI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MkNBQ0g7QUFFcEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7K0NBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7Z0RBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDLENBQUM7OENBQ0g7QUFFdkI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFDLENBQUM7Z0RBQ0g7QUFFekI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLENBQUM7bURBQ0g7QUFFNUI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7K0NBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MkNBQ0g7QUFFcEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7K0NBQ0g7QUFFeEI7SUFEQyxJQUFBLDBCQUFNLEVBQUMsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUMsQ0FBQztzREFDSDtBQWhDakMsc0NBaUNDO0FBRUQsTUFBYSxXQUFXO0NBaUJ2QjtBQWZDO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDOzJDQUNIO0FBRXRCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzZDQUNIO0FBRXhCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDOzRDQUNIO0FBRXZCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQyxDQUFDO2dEQUNIO0FBRTNCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDO2lEQUNIO0FBRTVCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQyxDQUFDOzhDQUNIO0FBRXpCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzZDQUNGO0FBRXpCO0lBREMsSUFBQSwwQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBQyxDQUFDO2lEQUNIO0FBaEI5QixrQ0FpQkMifQ==