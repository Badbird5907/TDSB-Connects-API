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
        return '/token';
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
    async send(tdsbConnects) {
        const endpoint = this.getEndpoint();
        if (endpoint.startsWith("/"))
            endpoint.substring(1);
        console.log('Sending token request to endpoint: ', endpoint);
        return new Promise((resolve) => {
            if (this.refreshToken) {
                axios.post(API_BASE + endpoint, {
                    grant_type: "refresh_token",
                    refresh_token: this.refreshToken
                }, {
                    headers: this.buildHeaders(tdsbConnects)
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
            else {
                axios.post(API_BASE + endpoint, {
                    grant_type: "password",
                    username: this.username,
                    password: this.password
                }, {
                    headers: this.buildHeaders(tdsbConnects)
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHaEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDaEQsT0FBTyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBRTFCLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVztJQUVuQyxXQUFXLENBQVM7SUFFcEIsU0FBUyxDQUFTLENBQUMsa0NBQWtDO0lBRXJELFNBQVMsQ0FBUyxDQUFDLHFCQUFxQjtJQUV4QyxZQUFZLENBQVM7SUFFckIscUJBQXFCLENBQVMsQ0FBQyxnRkFBZ0Y7SUFFL0csZUFBZSxDQUFTLENBQUMsMkNBQTJDO0lBRXBFLGdCQUFnQixDQUFTLENBQUMsZ0JBQWdCO0lBRW5ELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUE2QjtRQUMzQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVB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