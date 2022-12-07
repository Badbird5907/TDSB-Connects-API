package dev.badbird.tdsbconnectsapi.util;

import com.google.gson.*;
import dev.badbird.tdsbconnectsapi.TDSBConnects;
import lombok.RequiredArgsConstructor;

import java.lang.reflect.Type;

@RequiredArgsConstructor
public class GsonInstanceAdapter implements JsonDeserializer<TDSBConnects>, JsonSerializer<TDSBConnects> {
    private final TDSBConnects tdsbConnects;

    @Override
    public TDSBConnects deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
        return tdsbConnects;
    }

    @Override
    public JsonElement serialize(TDSBConnects src, Type typeOfSrc, JsonSerializationContext context) {
        return null;
    }
}
