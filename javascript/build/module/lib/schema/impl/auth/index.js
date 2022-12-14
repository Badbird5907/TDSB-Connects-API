var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { API_BASE, CLIENT_ID } from '../../../../index';
import { APIRequest, APIResponse } from '../../index';
import axios from "axios";
import { Expose } from "class-transformer";
import url from 'url';
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
    Expose({ name: "access_token" })
], TokenResponse.prototype, "accessToken", void 0);
__decorate([
    Expose({ name: "token_type" })
], TokenResponse.prototype, "tokenType", void 0);
__decorate([
    Expose({ name: "expires_in" })
], TokenResponse.prototype, "expiresIn", void 0);
__decorate([
    Expose({ name: "refresh_token" })
], TokenResponse.prototype, "refreshToken", void 0);
__decorate([
    Expose({ name: "refresh_token_expires_in" })
], TokenResponse.prototype, "refreshTokenExpiresIn", void 0);
__decorate([
    Expose({ name: ".issued" })
], TokenResponse.prototype, "formattedIssued", void 0);
__decorate([
    Expose({ name: ".expires" })
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
        return new Promise((resolve) => {
            if (this.refreshToken !== null && this.refreshToken !== undefined) {
                //const form = new FormData();
                //form.append('grant_type', 'refresh_token');
                //form.append('refresh_token', this.refreshToken);
                /*
                const params = new url.URLSearchParams({
                  grant_type: 'refresh_token',
                  refresh_token: this.refreshToken
                });
                 */
                const params = new url.URLSearchParams();
                params.append('grant_type', 'refresh_token');
                params.append('refresh_token', this.refreshToken);
                axios.post(API_BASE + endpoint, params.toString(), {
                    headers: {
                        "X-Client-App-Info": CLIENT_ID,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: (data) => data // Axios bug
                })
                    .then((response) => {
                    const data = this.handleResponse(response);
                    resolve(data);
                });
            }
            else {
                /*const form = new FormData();
                form.append('grant_type', 'password');
                form.append('username', this.username);
                form.append('password', this.password);*/
                /*
                const params = new url.URLSearchParams({
                  grant_type: 'password',
                  username: this.username,
                  password: this.password
                });
                 */
                const params = new url.URLSearchParams();
                params.append('grant_type', 'password');
                params.append('username', this.username);
                params.append('password', this.password);
                axios.post(API_BASE + endpoint, params.toString(), {
                    headers: {
                        "X-Client-App-Info": CLIENT_ID,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: (data) => data // Axios bug
                })
                    .then((response) => {
                    const data = this.handleResponse(response);
                    resolve(data);
                });
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQztBQUV0QixNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7SUFFckMsV0FBVyxDQUFTO0lBRXBCLFNBQVMsQ0FBUyxDQUFDLGtDQUFrQztJQUVyRCxTQUFTLENBQVMsQ0FBQyxxQkFBcUI7SUFFeEMsWUFBWSxDQUFTO0lBRXJCLHFCQUFxQixDQUFTLENBQUMsZ0ZBQWdGO0lBRS9HLGVBQWUsQ0FBUyxDQUFDLDJDQUEyQztJQUVwRSxnQkFBZ0IsQ0FBUyxDQUFDLGdCQUFnQjtJQUVqRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBNkI7UUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO2dCQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FB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