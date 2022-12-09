package dev.badbird.tdsbconnectsapi.schema.response.impl;

import com.google.gson.JsonArray;
import com.google.gson.annotations.SerializedName;
import dev.badbird.tdsbconnectsapi.schema.response.APIResponse;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Getter
public class TimeTableResponse extends APIResponse {
    @SerializedName("HasError")
    private boolean hasError;

    @SerializedName("Message")
    private String message;

    @SerializedName("StatusCode")
    private int statusCode;

    @SerializedName("BaseExceptionString")
    private String baseExceptionString;

    @SerializedName("CourseTable")
    private List<Course> courseTable;

    @SerializedName("PlannerTypes")
    private List<PlannerType> plannerTypes;


    @Data
    public static class Course {
        @SerializedName("StudentNumber")
        private String studentNumber;

        @SerializedName("CourseKey")
        private String courseKey;

        @SerializedName("AttachedPlanners")
        private List<JsonArray> attachedPlanners;

        @SerializedName("StudentCourse")
        private StudentCourse studentCourse;

        @SerializedName("BaseExceptionString")
        private String baseExceptionString;

        @SerializedName("StatusCode")
        private int statusCode;

        @SerializedName("Message")
        private String message;

        @SerializedName("HasError")
        private boolean hasError;
    }

    @Data
    public static class StudentCourse {
        @SerializedName("ClassCode")
        private String classCode;
        @SerializedName("Period")
        private String period;
        @SerializedName("Block")
        private String block;
        @SerializedName("TeacherName")
        private String teacherName;
        @SerializedName("RoomNo")
        private String roomNo;
        @SerializedName("SchoolCode")
        private String schoolCode;
        @SerializedName("Date")
        private String date;
        @SerializedName("CycleDay")
        private int cycleDay;
        @SerializedName("StartTime")
        private String startTime;
        @SerializedName("EndTime")
        private String endTime;
        @SerializedName("ClassName")
        private String className;
        @SerializedName("TeacherEmail")
        private String teacherEmail;
        @SerializedName("Semester")
        private int semester;
        @SerializedName("Term")
        private int term;
        @SerializedName("Timeline")
        private String timeline;
        @SerializedName("SchoolYearTrack")
        private String schoolYearTrack;
    }
    public static class PlannerType {
        @SerializedName("TypeId")
        private int typeId;
        @SerializedName("TypeName")
        private String typeName;
        @SerializedName("TypeKey")
        private String typeKey;
        @SerializedName("TypeHexCode")
        private String typeHexCode;
        @SerializedName("TypeIconText")
        private String typeIconText;
        @SerializedName("FeatureId")
        private int featureId;
        @SerializedName("IsActive")
        private boolean isActive;
        @SerializedName("DisplayOrder")
        private int displayOrder;
    }
}
