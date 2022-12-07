package dev.badbird.tdsbconnectsapi.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utilities {
    private static final DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
    public static long parseDateToUnixMillis(String in) { // Thanks chatgpt
        // the date format that the string follows

        try {
            // parse the date string using the specified format
            Date date = dateFormat.parse(in);

            // convert the Date object to a unix timestamp (the number of milliseconds since January 1, 1970)

            // return the unix timestamp
            return date.getTime();
        } catch (ParseException e) {
            // if the date string could not be parsed, return 0
            return -1;
        }
    }

}
