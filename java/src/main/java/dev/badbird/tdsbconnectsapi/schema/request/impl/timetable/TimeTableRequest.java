package dev.badbird.tdsbconnectsapi.schema.request.impl.timetable;

import dev.badbird.tdsbconnectsapi.schema.request.APIRequest;
import dev.badbird.tdsbconnectsapi.schema.response.impl.TimeTableResponse;
import lombok.Data;
import okhttp3.Request;

@Data
public class TimeTableRequest implements APIRequest<TimeTableResponse> {
    private final long schoolId;
    private final String date;
    @Override
    public String getEndpoint() {
        return "/api/TimeTable/GetTimeTable/Student/" + schoolId + "/" + date;
    }

    @Override
    public Class<TimeTableResponse> getGenericClass() {
        return TimeTableResponse.class;
    }

    @Override
    public Request.Builder addData(Request.Builder builder) {
        return null;
    }
}
