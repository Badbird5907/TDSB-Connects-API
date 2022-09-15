package dev.badbird.tdsbconnectsapi.schema.response;

import com.google.gson.annotations.SerializedName;

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
}
