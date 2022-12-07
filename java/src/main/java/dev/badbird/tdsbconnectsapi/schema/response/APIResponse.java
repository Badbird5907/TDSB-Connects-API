package dev.badbird.tdsbconnectsapi.schema.response;

import com.google.gson.Gson;

public class APIResponse {
    @Override
    public String toString() {
        return new Gson().toJson(this); // TODO: use gson from TDSBConnects
    }
}
