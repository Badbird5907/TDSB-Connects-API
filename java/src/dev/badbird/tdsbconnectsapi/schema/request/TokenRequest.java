package dev.badbird.tdsbconnectsapi.schema.request;

import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.response.TokenResponse;
import lombok.Getter;
import lombok.Setter;
import lombok.SneakyThrows;
import okhttp3.*;

@Getter
@Setter
public class TokenRequest implements APIRequest<TokenResponse> {
    private String username, password;

    private String refreshToken = null;

    public TokenRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public TokenRequest(String refreshToken) {
        this.refreshToken = refreshToken;
    }

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
        FormBody.Builder formBody = new FormBody.Builder();
        if (refreshToken == null) {
            formBody.add("grant_type", "password");
            formBody.add("username", username);
            formBody.add("password", password);
        } else {
            formBody.add("grant_type", "refresh_token");
            formBody.add("refresh_token", refreshToken);
        }

        return builder.post(formBody.build());
    }
}
