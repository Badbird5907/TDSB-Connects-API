package dev.badbird.tdsbconnectsapi.schema.response.impl;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.annotations.SerializedName;
import dev.badbird.tdsbconnectsapi.schema.response.APIResponse;
import dev.badbird.tdsbconnectsapi.util.object.SimpleUserInfo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse extends APIResponse {
    @SerializedName("UserId")
    private String userId;
    @SerializedName("UserName")
    private String userName;
    @SerializedName("Role")
    private int[] role;
    @SerializedName("SchoolCodeList")
    private SchoolCodeList[] schoolCodeList;
    @SerializedName("SchoolList")
    private SchoolList[] schoolList;
    @SerializedName("Email")
    private String email;
    @SerializedName("PrincipalEmailsList")
    private JsonArray principalEmailsList;
    @SerializedName("VicePrincipalEmailsList")
    private JsonArray vicePrincipalEmailsList;
    @SerializedName("SuperintendentEmailsList")
    private JsonArray superintendentEmailsList;
    @SerializedName("Gender")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String gender;
    @SerializedName("Age")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String age;
    @SerializedName("D2LUserId")
    private int d2LUserId;
    @SerializedName("TrilliumPersonId")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String trilliumPersonId;
    @SerializedName("FirstName")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String firstName;
    @SerializedName("LastName")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String lastName;
    @SerializedName("BirthDate")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private String birthDate;

    @SerializedName("Picture")
    private JsonElement picture;

    @SerializedName("Thumbnail")
    private JsonElement thumbnail;
    @SerializedName("UserNavMenus")
    private UserNavMenu[] userNavMenus;
    @SerializedName("UserFeaturePermissions")
    private UserFeaturePermission[] userFeaturePermissions;
    @SerializedName("StudentInfo")
    @Deprecated
    /**
     * @deprecated Empty in request
     */
    private StudentInfo studentInfo;
    @SerializedName("IsStaff")
    private boolean isStaff;
    @SerializedName("IsStudent")
    private boolean isStudent;
    @SerializedName("TimetableCache")
    private String timetableCache;

    public SimpleUserInfo toSimpleUserInfo() {
        return new SimpleUserInfo(this);
    }

    @Getter
    public static class SchoolCodeList {
        @SerializedName("AssignedRoleId")
        private int assignedRoleId;
        @SerializedName("SchoolCode")
        private String schoolCode;
        @SerializedName("StudentInfo")
        private StudentInfo studentInfo;
    }

    @Getter
    public static class UserMenu {
        @SerializedName("Id")
        private int id;
        @SerializedName("Title")
        private String title;
        @SerializedName("IconSource")
        private String iconSource;
        @SerializedName("LaunchBackgroundColor")
        private String launchBackgroundColor;
        @SerializedName("TargetType")
        private JsonElement targetType;
        @SerializedName("TargetTypeParameter")
        private JsonElement targetTypeParameter;
        @SerializedName("RequiredPermissionName")
        private String requiredPermissionName;
        @SerializedName("DisplayOrder")
        private int displayOrder;
        @SerializedName("ShowInBottomToolBar")
        private boolean showInBottomToolBar;
        @SerializedName("ShowInLaunchPad")
        private boolean showInLaunchPad;
        @SerializedName("OpenInBrowser")
        private boolean openInBrowser;
        @SerializedName("BrowserUrl")
        private String browserUrl;
    }

    @Getter
    public static class UserNavMenu {
        @SerializedName("SchoolCode")
        private String schoolCode;
        @SerializedName("UserRoleId")
        private int userRoleId;
        @SerializedName("UserMenus")
        private UserMenu[] userMenus;
    }

    @Getter
    public static class UserFeaturePermission {
        @SerializedName("FeatureId")
        private int featureId;
        @SerializedName("PermissionTypeId")
        private int permissionTypeId;
    }

    @Getter
    public static class UserFeaturePermissions {
        @SerializedName("UserRoleId")
        private int userRoleId;
        @SerializedName("UserFeaturePermissions")
        private UserFeaturePermission[] userFeaturePermissions;
    }

    @Getter
    public static class SchoolList {
        @SerializedName("SchoolCode")
        private int schoolCode;
        @SerializedName("SchoolName")
        private String schoolName;
        @SerializedName("IsOnboard")
        private boolean isOnboard;

        public static class SchoolSetting {
            @SerializedName("Id")
            private int id;
            @SerializedName("SchoolCode")
            private String schoolCode;
            @SerializedName("CurrentSession")
            private String currentSession;
            @SerializedName("SchoolYearTrack")
            private String schoolYearTrack;
            @SerializedName("SessionStart")
            private String sessionStart;
            @SerializedName("SessionEnd")
            private String sessionEnd;
        }
    }
}
