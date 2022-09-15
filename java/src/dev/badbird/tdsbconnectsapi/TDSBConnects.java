package dev.badbird.tdsbconnectsapi;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dev.badbird.tdsbconnectsapi.schema.request.TokenRequest;
import dev.badbird.tdsbconnectsapi.schema.response.TokenResponse;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TDSBConnects {
    public static final String CLIENT_ID = "TDSBConnectsAPI||||0.0.0||2147483647|"; // Thanks https://github.com/tylertian123/pytdsbconnects/
    public static final String API_BASE = "https://zappsmaprd.tdsb.on.ca/";
    public static final Gson GSON = new GsonBuilder()
            .setPrettyPrinting()
            .create();


    private TokenResponse authenticationInfo;

    public TDSBConnects(String username, String password) {
        authenticationInfo = new TokenRequest(username, password).send();
        System.out.println(GSON.toJson(authenticationInfo));
    }

    public TDSBConnects(TokenResponse authenticationInfo) {
        this.authenticationInfo = authenticationInfo;
    }
}
