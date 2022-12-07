package dev.badbird.tdsbconnectsapi.schema.response.impl;

import com.google.gson.JsonArray;
import com.google.gson.annotations.SerializedName;
import dev.badbird.tdsbconnectsapi.schema.response.APIResponse;
import lombok.Data;

public class AnnouncementResponse extends APIResponse {
    @SerializedName("SchoolCode")
    private int schoolCode;
    @SerializedName("OrgUnitId")
    private long orgUnitId;

    @SerializedName("AccessToken")
    private String accessToken;

    @Data
    public static class NewsItem {
        @SerializedName("Id")
        private long id;
        @SerializedName("IsHidden")
        private boolean isHidden;
        @SerializedName("Attachments")
        private JsonArray attachments;
        @SerializedName("Title")
        private String title;
        @SerializedName("Body")
        private Body body;
        @SerializedName("StartDate")
        private String startDate;
        @SerializedName("EndDate")
        private String endDate;
        @SerializedName("IsGlobal")
        private boolean isGlobal;
        @SerializedName("IsPublished")
        private boolean isPublished;
        @SerializedName("CreatedBy")
        private long createdBy;
        @SerializedName("CreatedDate")
        private String createdDate;
        @SerializedName("LastModifiedBy")
        private long lastModifiedBy;
        @SerializedName("LastModifiedDate")
        private String lastModifiedDate;
        @SerializedName("ShowOnlyInCourseOfferings")
        private boolean showOnlyInCourseOfferings;
        @SerializedName("IsAuthorInfoShown")
        private boolean isAuthorInfoShown;
    }

    @Data
    public static class Body {
        @SerializedName("Text")
        private String text;
        @SerializedName("Html")
        private String html;
    }
}
