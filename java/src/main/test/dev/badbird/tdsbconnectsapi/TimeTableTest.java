package dev.badbird.tdsbconnectsapi;

import dev.badbird.tdsbconnectsapi.schema.request.impl.timetable.TimeTableRequest;
import dev.badbird.tdsbconnectsapi.schema.response.impl.TimeTableResponse;
import org.junit.jupiter.api.Test;

public class TimeTableTest {
    @Test
    public void testTimeTable() {
        TDSBConnects tdsbConnects = AuthTest.getTDSBConnects();
        TimeTableResponse response = tdsbConnects.call(new TimeTableRequest(450, "07122022"));
    }
}
