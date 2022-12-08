package dev.badbird.tdsbconnectsapi;

import dev.badbird.tdsbconnectsapi.schema.request.impl.announcements.GetAnnouncements;
import dev.badbird.tdsbconnectsapi.schema.response.impl.AnnouncementResponse;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

public class AnnouncementTest {
    @Test
    public void announcementTest() {
        TDSBConnects tdsbConnects = AuthTest.getTDSBConnects();

        AnnouncementResponse[] resp = tdsbConnects.callBlocking(
                new GetAnnouncements(
                        tdsbConnects.getUserData().getSchoolID(),
                        0,
                        10
                )
        );

        System.out.println("Announcements: " + Arrays.toString(resp));
    }
}
