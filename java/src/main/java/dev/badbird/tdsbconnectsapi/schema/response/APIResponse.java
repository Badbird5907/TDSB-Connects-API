package dev.badbird.tdsbconnectsapi.schema.response;

import dev.badbird.tdsbconnectsapi.TDSBConnects;

public class APIResponse {
    private TDSBConnects tdsbConnects;

    @Override
    public String toString() {
        return tdsbConnects.GSON.toJson(this); // TODO: use gson from TDSBConnects
    }
}
