package dev.badbird.tdsbconnectsapi.schema.request.impl.auth;

import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.request.APIRequest;
import dev.badbird.tdsbconnectsapi.schema.response.impl.TokenResponse;
import lombok.Getter;
import lombok.Setter;
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

    @Override
    public Class<TokenResponse> getGenericClass() {
        return TokenResponse.class;
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
