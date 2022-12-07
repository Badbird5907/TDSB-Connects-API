package dev.badbird.tdsbconnectsapi;

import dev.badbird.tdsbconnectsapi.schema.request.impl.account.GetUserInfo;
import dev.badbird.tdsbconnectsapi.schema.response.impl.UserResponse;
import org.junit.jupiter.api.Test;

public class AuthTest {
    @Test
    public void authTest() {
        TDSBConnects tdsbConnects = getTDSBConnects();
        UserResponse userResponse = tdsbConnects.call(new GetUserInfo());
        System.out.println(userResponse);
        System.out.println("Auth Info: " + tdsbConnects.getAuthenticationInfo());
    }

    public static TDSBConnects getTDSBConnects() {
        String username = System.getenv("TDSB_USERNAME");
        String password = System.getenv("TDSB_PASSWORD");
        if (username == null || password == null) {
            throw new RuntimeException("Please set the environment variables TDSB_USERNAME and TDSB_PASSWORD");
        }
        return new TDSBConnects(username, password);
    }
}