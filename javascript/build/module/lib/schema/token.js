var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { JsonProperty } from 'json-typescript-mapper';
import { API_BASE, CLIENT_ID } from '../../index';
import { APIRequest, APIResponse } from './index';
import axios from "axios";
import FormData from "form-data";
export class TokenResponse extends APIResponse {
    accessToken;
    tokenType; // Looks like it's always 'bearer'
    expiresIn; // Unix epoch seconds
    refreshToken;
    refreshTokenExpiresIn; // Unix epoch seconds WHY IS IT A STRING WHOEVER DESIGNED THIS NEEDS TO BE FIRED
    formattedIssued; // Like this: Tue, 13 Sep 2022 20:27:50 GMT
    formattedExpires; // Same as above
    isExpired() {
        return Date.now() / 1000 >= this.expiresIn;
    }
    isRefreshTokenExpired() {
        return Date.now() / 1000 >= parseInt(this.refreshTokenExpiresIn);
    }
    refreshIfNeeded(tdsbConnects) {
        return new Promise((resolve, reject) => {
            if (this.isRefreshTokenExpired()) {
                tdsbConnects.call(TokenRequest.userPass(tdsbConnects.username, tdsbConnects.password, tdsbConnects))
                    .then((response) => {
                    tdsbConnects.authenticationInfo = response;
                    resolve(response);
                })
                    .catch(reject);
                return;
            }
            if (this.isExpired()) {
                tdsbConnects.call(TokenRequest.refreshToken(this.refreshToken, tdsbConnects))
                    .then((response) => {
                    tdsbConnects.authenticationInfo = response;
                    resolve(response);
                })
                    .catch(reject);
                return;
            }
            resolve(this);
        });
    }
}
__decorate([
    JsonProperty('access_token')
], TokenResponse.prototype, "accessToken", void 0);
__decorate([
    JsonProperty('token_type')
], TokenResponse.prototype, "tokenType", void 0);
__decorate([
    JsonProperty('expires_in')
], TokenResponse.prototype, "expiresIn", void 0);
__decorate([
    JsonProperty('refresh_token')
], TokenResponse.prototype, "refreshToken", void 0);
__decorate([
    JsonProperty('refresh_token_expires_in')
], TokenResponse.prototype, "refreshTokenExpiresIn", void 0);
__decorate([
    JsonProperty('.issued')
], TokenResponse.prototype, "formattedIssued", void 0);
__decorate([
    JsonProperty('.expires')
], TokenResponse.prototype, "formattedExpires", void 0);
export class TokenRequest extends APIRequest {
    username;
    password;
    refreshToken = null;
    tdsbConnects;
    /**
     * @deprecated Use {@link refreshToken} or {@link userPass} instead because of js limitations
     * @param tdsbConnects
     */
    constructor(tdsbConnects) {
        super();
        this.tdsbConnects = tdsbConnects;
    }
    static refreshToken(refresh, tdsbConnects) {
        const request = new TokenRequest(tdsbConnects);
        request.refreshToken = refresh;
        return request;
    }
    static userPass(username, password, tdsbConnects) {
        const request = new TokenRequest(tdsbConnects);
        request.username = username;
        request.password = password;
        return request;
    }
    getEndpoint() {
        return 'token';
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we are overriding the method but not using the parameter
    buildHeaders(tdsbConnects) {
        return {
            "X-Client-App-Info": CLIENT_ID
        };
    }
    getResponseClass() {
        return TokenResponse;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we are overriding the method but not using the parameter
    async send(tdsbConnects) {
        const endpoint = this.getEndpoint();
        if (endpoint.startsWith("/"))
            endpoint.substring(1);
        console.log('Sending token request to endpoint: ', endpoint);
        return new Promise((resolve) => {
            if (this.refreshToken !== null && this.refreshToken !== undefined) {
                const form = new FormData();
                form.append('grant_type', 'refresh_token');
                form.append('refresh_token', this.refreshToken);
                axios.post(API_BASE + endpoint, form, {
                    headers: {
                        "X-Client-App-Info": CLIENT_ID,
                        ...form.getHeaders()
                    },
                    transformRequest: (data) => data // Axios bug
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
            else {
                const form = new FormData();
                form.append('grant_type', 'password');
                form.append('username', this.username);
                form.append('password', this.password);
                axios.post(API_BASE + endpoint, form, {
                    headers: {
                        "X-Client-App-Info": CLIENT_ID,
                        "Content-Type": "application/x-www-form-urlencoded",
                        ...form.getHeaders()
                    },
                    transformRequest: (data) => data // Axios bug
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHaEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDaEQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBQzFCLE9BQU8sUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUVqQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7SUFFbkMsV0FBVyxDQUFTO0lBRXBCLFNBQVMsQ0FBUyxDQUFDLGtDQUFrQztJQUVyRCxTQUFTLENBQVMsQ0FBQyxxQkFBcUI7SUFFeEMsWUFBWSxDQUFTO0lBRXJCLHFCQUFxQixDQUFTLENBQUMsZ0ZBQWdGO0lBRS9HLGVBQWUsQ0FBUyxDQUFDLDJDQUEyQztJQUVwRSxnQkFBZ0IsQ0FBUyxDQUFDLGdCQUFnQjtJQUVuRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBNkI7UUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO2dCQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxD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