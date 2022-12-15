import {APIRequest, APIResponse} from "../../index";
import {Expose, Type} from "class-transformer";


export class TimeTableRequest extends APIRequest<TimetableResponse> {
  schoolCode: string;
  date: string;
  constructor(schoolCode: string, date: string) {
    super();
    this.schoolCode = schoolCode;
    this.date = date;
  }

  getEndpoint(): string {
    return "/api/TimeTable/GetTimeTable/Student/" + this.schoolCode + "/" + this.date;
  }

  getResponseClass(): any {
    return TimetableResponse;
  }
}

export class TimetableResponse extends APIResponse {
  @Expose({name: "HasError"})
  public hasError: boolean;
  @Expose({name: "Message"})
  public message: string;
  @Expose({name: "StatusCode"})
  public statusCode: number;
  @Expose({name: "BaseExceptionString"})
  public baseExceptionString: string;
  @Expose({name: "CourseTable"})
  @Type(() => Course)
  public courseTable: Course[];
  @Expose({name: "PlannerTypes"})
  @Type(() => PlannerType)
  public plannerTypes: PlannerType[];

}

export class Course {
  @Expose({name: "StudentNumber"})
  public studentNumber: string;
  @Expose({name: "CourseKey"})
  public courseKey: string;
  @Expose({name: "AttachedPlanners"})
  public attachedPlanners: any[];
  @Expose({name: "StudentCourse"})
  @Type(() => StudentCourse)
  public studentCourse: StudentCourse;
  @Expose({name: "BaseExceptionString"})
  public baseExceptionString: string;
  @Expose({name: "StatusCode"})
  public statusCode: number;
  @Expose({name: "Message"})
  public message: string;
  @Expose({name: "HasError"})
  public hasError: boolean;
}

export class StudentCourse {
  @Expose({name: "ClassCode"})
  public classCode: string;
  @Expose({name: "Period"})
  public period: string;
  @Expose({name: "Block"})
  public block: string;
  @Expose({name: "TeacherName"})
  public teacherName: string;
  @Expose({name: "RoomNo"})
  public roomNo: string;
  @Expose({name: "SchoolCode"})
  public schoolCode: string;
  @Expose({name: "Date"})
  public date: string;
  @Expose({name: "CycleDay"})
  public cycleDay: number;
  @Expose({name: "StartTime"})
  public startTime: string;
  @Expose({name: "EndTime"})
  public endTime: string;
  @Expose({name: "ClassName"})
  public className: string;
  @Expose({name: "TeacherEmail"})
  public teacherEmail: string;
  @Expose({name: "Semester"})
  public semester: number;
  @Expose({name: "Term"})
  public term: number;
  @Expose({name: "Timeline"})
  public timeline: string;
  @Expose({name: "SchoolYearTrack"})
  public schoolYearTrack: string;
}

export class PlannerType {
  @Expose({name: "TypeId"})
  public typeId: number;
  @Expose({name: "TypeName"})
  public typeName: string;
  @Expose({name: "TypeKey"})
  public typeKey: string;
  @Expose({name: "TypeHexCode"})
  public typeHexCode: string;
  @Expose({name: "TypeIconText"})
  public typeIconText: string;
  @Expose({name: "FeatureId"})
  public featureId: number;
  @Expose({name: "IsActive"})
  public isActive: boolean;
  @Expose({name: "DisplayOrder"})
  public displayOrder: number;
}
