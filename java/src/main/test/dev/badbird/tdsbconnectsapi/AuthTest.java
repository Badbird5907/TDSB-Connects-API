package dev.badbird.tdsbconnectsapi;

import org.junit.jupiter.api.Test;

public class AuthTest {
    @Test
    public void authTest() {
        TDSBConnects tdsbConnects = getTDSBConnects();
        System.out.println(tdsbConnects.getUserData());
        System.out.println("Auth Info: " + tdsbConnects.getAuthenticationInfo());
    }

    public static TDSBConnects getTDSBConnects() {
        String username = System.getenv("TDSB_USERNAME");
        String password = System.getenv("TDSB_PASSWORD");
        if (username == null || password == null) {
            throw new RuntimeException("Please set the environment variables TDSB_USERNAME and TDSB_PASSWORD");
        }
        TDSBConnects connects = new TDSBConnects(username, password);
        waitUntilReady(connects);
        return connects;
    }

    public static void waitUntilReady(TDSBConnects connects) {
        System.out.println("Waiting for TDSBConnects to be ready...");
        while (!connects.isReady()) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
