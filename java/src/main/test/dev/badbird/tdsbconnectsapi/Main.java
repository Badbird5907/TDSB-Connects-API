package dev.badbird.tdsbconnectsapi;

import dev.badbird.tdsbconnectsapi.schema.request.impl.account.GetUserInfo;
import dev.badbird.tdsbconnectsapi.schema.response.impl.UserResponse;
import org.junit.jupiter.api.Test;

public class Main {
    @Test
    public void main() {
        String username = System.getenv("TDSB_USERNAME");
        String password = System.getenv("TDSB_PASSWORD");
        if (username == null || password == null) {
            throw new RuntimeException("Please set the environment variables TDSB_USERNAME and TDSB_PASSWORD");
        }
        TDSBConnects tdsbConnects = new TDSBConnects(username, password);
        UserResponse userResponse = tdsbConnects.call(new GetUserInfo());
        System.out.println(userResponse);
    }
}