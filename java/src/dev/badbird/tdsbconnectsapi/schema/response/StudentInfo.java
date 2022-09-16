package dev.badbird.tdsbconnectsapi.schema.response;

import com.google.gson.annotations.SerializedName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class StudentInfo {
    @SerializedName("PersonId")
    private String personId;
    @SerializedName("LastName")
    private String lastName;
    @SerializedName("FirstName")
    private String firstName;
    @SerializedName("Gender")
    private String gender;
    @SerializedName("BirthDate")
    private String birthDate;
    @SerializedName("Age")
    private String age;
    @SerializedName("SchoolYearTrack")
    private String schoolYearTrack;
    @SerializedName("CurrentGradeLevel")
    private String currentGradeLevel;
    //2 yrs 1 mth
    public int getAgeYears() {
        return Integer.parseInt(age.split(" ")[0]);
    }
    public int getAgeMonths() {
        return Integer.parseInt(age.split(" ")[2]);
    }
}
