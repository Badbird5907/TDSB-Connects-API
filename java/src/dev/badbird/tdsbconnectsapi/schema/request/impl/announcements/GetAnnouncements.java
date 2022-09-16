package dev.badbird.tdsbconnectsapi.schema.request.impl.announcements;

import dev.badbird.tdsbconnectsapi.schema.request.APIRequest;
import dev.badbird.tdsbconnectsapi.schema.response.AnnouncementResponse;
import lombok.RequiredArgsConstructor;
import okhttp3.Request;
import okhttp3.Response;

@RequiredArgsConstructor
public class GetAnnouncements implements APIRequest<AnnouncementResponse> {
    private final int schoolID, start, end;
    @Override
    public String getEndpoint() {
        return "/api/Announcement/D2L/GetNews/" + schoolID + "/filter/Published/skip/" + start + "/take/" + end;
    }

    @Override
    public Class<AnnouncementResponse> getGenericClass() {
        return AnnouncementResponse.class;
    }

    @Override
    public Request.Builder addData(Request.Builder builder) {
        return builder;
    }


}
