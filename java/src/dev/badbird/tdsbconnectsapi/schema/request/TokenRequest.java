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

    private TDSBConnects tdsbConnects;

    public TokenRequest(String username, String password, TDSBConnects tdsbConnects) {
        this.username = username;
        this.password = password;
        this.tdsbConnects = tdsbConnects;
    }

    public TokenRequest(String refreshToken, TDSBConnects tdsbConnects) {
        this.refreshToken = refreshToken;
        this.tdsbConnects = tdsbConnects;
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
        return tdsbConnects.GSON.fromJson(bodyString, TokenResponse.class);
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
