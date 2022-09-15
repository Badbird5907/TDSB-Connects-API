package dev.badbird.tdsbconnectsapi.schema.request;

import dev.badbird.tdsbconnectsapi.TDSBConnects;
import lombok.SneakyThrows;
import okhttp3.Call;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public interface APIRequest<T> {
    OkHttpClient CLIENT = new OkHttpClient();
    String getEndpoint();
    @SneakyThrows
    default T send() {
        String endpoint = getEndpoint();
        if (endpoint.startsWith("/")) endpoint = endpoint.substring(1);
        Request.Builder request = new Request.Builder()
                .url(TDSBConnects.API_BASE  + endpoint)
                .header("X-Client-App-Info", TDSBConnects.CLIENT_ID)
                ;
        request = addData(request);

        Call call = CLIENT.newCall(request.build());
        try (Response response = call.execute()) {
            return onResponse(response);
        }
    }

    T onResponse(Response response);


    Request.Builder addData(Request.Builder builder);
}
