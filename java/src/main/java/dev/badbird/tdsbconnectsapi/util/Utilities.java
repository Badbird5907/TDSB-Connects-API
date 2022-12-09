package dev.badbird.tdsbconnectsapi.util;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Utilities {
    private static final DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"),
    otherDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
    public static long parseDateToUnixMillis(String in) { // Thanks chatgpt
        // the date format that the string follows

        try {
            // parse the date string using the specified format
            Date date;

            if (in.contains("Z")) {
                date = dateFormat.parse(in);
            } else {
                date = otherDateFormat.parse(in);
            }

            // convert the Date object to a unix timestamp (the number of milliseconds since January 1, 1970)

            // return the unix timestamp
            return date.getTime();
        } catch (ParseException e) {
            e.printStackTrace();
            // if the date string could not be parsed, return 0
            return -1;
        }
    }

    public static String getToday() {
        return dateFormat.format(new Date());
    }

}
