package dev.badbird.tdsbconnectsapi.util;

import com.google.gson.*;

import java.lang.reflect.Type;

public class GsonStringAdapter implements JsonSerializer<String>, JsonDeserializer<String> {
    @Override
    public String deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        String s = json.getAsString();
        if (s == null) return null;
        if (s.equals("null")) return null;
        return s;
    }

    @Override
    public JsonElement serialize(String src, Type typeOfSrc, JsonSerializationContext context) {
        return new JsonPrimitive(src);
    }
}
