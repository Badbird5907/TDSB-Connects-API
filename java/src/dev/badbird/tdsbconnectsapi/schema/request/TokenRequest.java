package dev.badbird.tdsbconnectsapi.schema.request;

import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.response.TokenResponse;
import lombok.*;
import okhttp3.*;

@AllArgsConstructor
@Getter
@Setter
public class TokenRequest implements APIRequest<TokenResponse> {
    private String username, password;
    @Override
    public String getEndpoint() {
        return "/token";
    }

    @SneakyThrows
    @Override
    public TokenResponse onResponse(Response response) {
        ResponseBody body = response.body();
        String bodyString = body == null ? "" : body.string();
        return TDSBConnects.GSON.fromJson(bodyString, TokenResponse.class);
    }

    @Override
    public Request.Builder addData(Request.Builder builder) {
        RequestBody formBody = new FormBody.Builder()
                .add("username", username)
                .add("password", password)
                .add("grant_type", "password")
                .build();

        return builder.post(formBody);
    }
}
