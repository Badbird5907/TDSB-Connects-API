package dev.badbird.tdsbconnectsapi.schema.response.impl;

import com.google.gson.annotations.SerializedName;
import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.request.impl.auth.TokenRequest;
import dev.badbird.tdsbconnectsapi.schema.response.APIResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TokenResponse extends APIResponse {
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
    @SerializedName(".issued")
    private String formattedIssued; // Like this: Tue, 13 Sep 2022 20:27:50 GMT
    @SerializedName(".expires")
    private String formattedExpires; // Same as above

    private String error, errorDescription, httpStatusCode;

    public boolean isExpired() {
        return System.currentTimeMillis() / 1000 >= expiresIn;
    }

    public boolean isRefreshTokenExpired() {
        if (refreshTokenExpiresIn == null) return true;
        return System.currentTimeMillis() / 1000 >= Long.parseLong(refreshTokenExpiresIn);
    }

    /**
     * Blocking request checking if the token is expired & refreshing if needed
     * @param tdsbConnects
     */
    public void refreshIfNeeded(TDSBConnects tdsbConnects) {
        if (isRefreshTokenExpired()) {
            tdsbConnects.call(new TokenRequest(tdsbConnects.getUsername(), tdsbConnects.getPassword(), tdsbConnects)).thenAccept(tdsbConnects::setAuthenticationInfo);
            return;
        }
        if (isExpired()) {
            tdsbConnects.call(new TokenRequest(refreshToken, tdsbConnects)).thenAccept(tdsbConnects::setAuthenticationInfo);
        }
    }
}
