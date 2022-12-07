package dev.badbird.tdsbconnectsapi.schema.request.impl.account;

import dev.badbird.tdsbconnectsapi.schema.request.APIRequest;
import dev.badbird.tdsbconnectsapi.schema.response.impl.UserResponse;
import lombok.Data;
import okhttp3.Request;

@Data
public class GetUserInfo implements APIRequest<UserResponse> {

    @Override
    public String getEndpoint() {
        return "/api/Account/GetUserInfo";
    }

    @Override
    public Class<UserResponse> getGenericClass() {
        return UserResponse.class;
    }

    @Override
    public Request.Builder addData(Request.Builder builder) {
        return builder;
    }
}
