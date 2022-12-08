package dev.badbird.tdsbconnectsapi.schema.request;

import dev.badbird.tdsbconnectsapi.TDSBConnects;
import dev.badbird.tdsbconnectsapi.schema.request.impl.auth.TokenRequest;
import lombok.SneakyThrows;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.concurrent.CompletableFuture;

public interface APIRequest<T> {
    OkHttpClient CLIENT = new OkHttpClient();

    String getEndpoint();

    @SneakyThrows
    default CompletableFuture<T> send(TDSBConnects tdsbConnects) {
        System.out.println("Sending request to " + getEndpoint());

        CompletableFuture<T> future = new CompletableFuture<>();
        String endpoint = getEndpoint();
        if (endpoint.startsWith("/")) endpoint = endpoint.substring(1);
        String finalEndpoint = endpoint;
        tdsbConnects.getExecutor().submit(()-> {
            try {
                Request.Builder request = new Request.Builder()
                        .url(TDSBConnects.API_BASE + finalEndpoint)
                        .header("X-Client-App-Info", TDSBConnects.CLIENT_ID);
                if (!(this instanceof TokenRequest)) {
                    tdsbConnects.getAuthenticationInfo().refreshIfNeeded(tdsbConnects);
                    request.header("Authorization", "Bearer " + tdsbConnects.getAuthenticationInfo().getAccessToken());
                }
                Request.Builder a = addData(request);
                if (a != null) request = a;

                Call call = CLIENT.newCall(request.build());
                System.out.println("Queuing request");
                call.enqueue(new Callback() {
                    @Override
                    public void onFailure(@NotNull Call call, @NotNull IOException e) {
                        System.out.println("Request failed");
                        future.completeExceptionally(e);
                    }

                    @Override
                    public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                        System.out.println("Request succeeded");
                        try {
                            T res = APIRequest.this.onResponse(response, tdsbConnects);
                            future.complete(res);
                        } catch (Exception e) {
                            future.completeExceptionally(e);
                        }
                    }
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        return future;
    }

    @SuppressWarnings({"CastCanBeRemovedNarrowingVariableType", "unchecked"})
    @SneakyThrows
    default T onResponse(Response response, TDSBConnects tdsbConnects) {
        ResponseBody body = response.body();
        String bodyString = body == null ? "" : body.string();
        validateResponse(bodyString);
        System.out.println("Body: " + bodyString);
        Object obj = tdsbConnects.GSON.fromJson(bodyString, getGenericClass());
        //check if obj is an array
        if (obj instanceof Object[]) {
            T[] arr = (T[]) obj;
            for (T t : arr) {
                injectTDSBConnects(t, tdsbConnects);
            }
        } else {
            injectTDSBConnects(obj, tdsbConnects); //TODO this sucks
        }
        return (T) obj;
    }

    @SneakyThrows
    default void injectTDSBConnects(Object inst, TDSBConnects tdsbConnects) {
        injectTDSBConnects(inst.getClass().getDeclaredFields(), inst, tdsbConnects);
        // inject all superclasses
        Class<?> superclass = inst.getClass().getSuperclass();
        while (isValidSuperClass(superclass)) {
            injectTDSBConnects(superclass.getDeclaredFields(), inst, tdsbConnects);
            superclass = superclass.getSuperclass();
        }
    }

    @SneakyThrows
    default void injectTDSBConnects(Field[] fields, Object inst, TDSBConnects tdsbConnects) {
        for (Field field : fields) {
            field.setAccessible(true);
            if (field.getType() == TDSBConnects.class && field.get(inst) == null) {
                field.set(inst, tdsbConnects);
            }
        }
    }

    default boolean isValidSuperClass(Class<?> clazz) {
        // check if class isnt object etc... because we want to limit the times we recurse
        return clazz != null && clazz != Object.class;
    }

    Class<T> getGenericClass();


    Request.Builder addData(Request.Builder builder);

    default void validateResponse(String bodyString) {

    }
}
