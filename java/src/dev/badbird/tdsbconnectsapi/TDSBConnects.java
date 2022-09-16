package dev.badbird.tdsbconnectsapi;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dev.badbird.tdsbconnectsapi.schema.request.TokenRequest;
import dev.badbird.tdsbconnectsapi.schema.response.TokenResponse;
import dev.badbird.tdsbconnectsapi.util.GsonInstanceAdapter;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TDSBConnects {
    public static final String CLIENT_ID = "TDSBConnectsAPI||||0.0.0||2147483647|"; // Thanks https://github.com/tylertian123/pytdsbconnects/
    public static final String API_BASE = "https://zappsmaprd.tdsb.on.ca/";
    public final Gson GSON = new GsonBuilder()
            .setPrettyPrinting()
            .registerTypeAdapter(TDSBConnects.class, new GsonInstanceAdapter(this))
            .create();

    private final String username, password;


    private TokenResponse authenticationInfo;

    public TDSBConnects(String username, String password) {
        this.username = username;
        this.password = password;
        authenticationInfo = new TokenRequest(username, password, this).send(this);
    }
    public TDSBConnects(String username, String password, TokenResponse authenticationInfo) {
        this.username = username;
        this.password = password;
        this.authenticationInfo = authenticationInfo;
    }

    public TDSBConnects(TokenResponse authenticationInfo) {
        this.username = null;
        this.password = null;
        this.authenticationInfo = authenticationInfo;
    }
}