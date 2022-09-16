package dev.badbird.tdsbconnectsapi.schema.response;

import com.google.gson.annotations.SerializedName;
import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.request.impl.auth.TokenRequest;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenResponse {
    @SerializedName("access_token")
    private String accessToken;
    @SerializedName("token_type")
    private String tokenType; // Looks like it's always "bearer"
    @SerializedName("expires_in")
    private long expiresIn; // Unix epoch seconds
    @SerializedName("refresh_token")
    private String refreshToken;
    @SerializedName("refresh_token_expires_in")
    private String refreshTokenExpiresIn; // Unix epoch seconds WHY IS IT A STRING WHOEVER DESIGNED THIS NEEDS TO BE FIRED
    @SerializedName("issued")
    private String formattedIssued; // Like this: Tue, 13 Sep 2022 20:27:50 GMT
    @SerializedName("expires")
    private String formattedExpires; // Same as above

    public boolean isExpired() {
        return System.currentTimeMillis() / 1000 >= expiresIn;
    }

    public boolean isRefreshTokenExpired() {
        return System.currentTimeMillis() / 1000 >= Long.parseLong(refreshTokenExpiresIn);
    }

    private TDSBConnects tdsbConnects; // Injected by Gson

    public void refreshIfNeeded() {
        if (isRefreshTokenExpired()) {
            tdsbConnects.setAuthenticationInfo(new TokenRequest(tdsbConnects.getUsername(), tdsbConnects.getPassword(), tdsbConnects).send(tdsbConnects));
            return;
        }
        if (isExpired()) {
            tdsbConnects.setAuthenticationInfo(new TokenRequest(refreshToken, tdsbConnects).send(tdsbConnects));
            return;
        }
    }
}
