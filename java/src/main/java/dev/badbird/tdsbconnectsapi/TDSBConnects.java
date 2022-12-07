package dev.badbird.tdsbconnectsapi;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dev.badbird.tdsbconnectsapi.schema.request.APIRequest;
import dev.badbird.tdsbconnectsapi.schema.request.impl.account.GetUserInfo;
import dev.badbird.tdsbconnectsapi.schema.request.impl.auth.TokenRequest;
import dev.badbird.tdsbconnectsapi.schema.response.impl.TokenResponse;
import dev.badbird.tdsbconnectsapi.schema.response.impl.UserResponse;
import dev.badbird.tdsbconnectsapi.util.GsonInstanceAdapter;
import dev.badbird.tdsbconnectsapi.util.GsonStringAdapter;
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
            .registerTypeAdapter(String.class, new GsonStringAdapter())
            .create();

    private final String username, password;

    private TokenResponse authenticationInfo;
    private UserResponse userData;

    public void requestData() {
        userData = call(new GetUserInfo());
    }

    public void login() {
        authenticationInfo = call(new TokenRequest(username, password, this));
    }

    public TDSBConnects(String username, String password) {
        this.username = username;
        this.password = password;
        login();
        requestData();
    }


    public <T> T call(APIRequest<T> request) {
        return request.send(this);
    }
}
