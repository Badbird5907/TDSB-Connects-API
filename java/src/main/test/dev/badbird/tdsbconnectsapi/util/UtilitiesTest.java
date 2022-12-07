package dev.badbird.tdsbconnectsapi.util;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UtilitiesTest {
    @Test
    public void testParseDateToUnixMillis() {
        String in = "2022-12-15T20:10:30.012Z";
        long out = Utilities.parseDateToUnixMillis(in);
        System.out.println("Out: " + out);
        assertEquals(1671153030012L, out);
    }
}
