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

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

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
    private ThreadPoolExecutor executor = (ThreadPoolExecutor) Executors.newFixedThreadPool(1); // TODO: config option for this

    private final String username, password;

    private TokenResponse authenticationInfo;
    private UserResponse userData;
    private Runnable readyCallback;
    private boolean ready = false;
    public void login() {
        call(new TokenRequest(username, password, this)).thenAccept(response -> {
            System.out.println("Logged in! - " + response);
            authenticationInfo = response;
            try {
                call(new GetUserInfo()).thenAccept(resp -> {
                    System.out.println("Got user data!");
                    userData = resp;
                    ready = true;
                    if (readyCallback != null) readyCallback.run();
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }).exceptionally((err)-> {
            err.printStackTrace();
            throw new RuntimeException(err);
        });
    }

    public TDSBConnects(String username, String password, Runnable onReady) {
        this.username = username;
        this.password = password;
        this.readyCallback = onReady;
        login();
    }
    public TDSBConnects(String username, String password) {
        this(username, password, null);
    }

    /**
     * Blocking call to the API
     *
     * @param request
     * @param <T>
     * @return
     */
    public <T> T callBlocking(APIRequest<T> request) {
        try {
            return request.send(this).get();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public <T> CompletableFuture<T> call(APIRequest<T> request) {
        return request.send(this);
    }
}
// TODO: Not sure where to put this so I'll put this here:
// Some routes fail and return a message instead of data sometimes
// We have to implement a way to handle this.
// Example: GET /api/GoogleCalendar/GetEvents/<school>?timeMin=month/day/year hour:min:sec&timeMax=month/day/year hour:min:sec
// Returns {
//    "Message": "There was no calendar available for your profile."
//} for me
