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
                const params = new URLSearchParams();
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
                const params = new URLSearchParams();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRXpDLE1BQU0sT0FBTyxhQUFjLFNBQVEsV0FBVztJQUVyQyxXQUFXLENBQVM7SUFFcEIsU0FBUyxDQUFTLENBQUMsa0NBQWtDO0lBRXJELFNBQVMsQ0FBUyxDQUFDLHFCQUFxQjtJQUV4QyxZQUFZLENBQVM7SUFFckIscUJBQXFCLENBQVMsQ0FBQyxnRkFBZ0Y7SUFFL0csZUFBZSxDQUFTLENBQUMsMkNBQTJDO0lBRXBFLGdCQUFnQixDQUFTLENBQUMsZ0JBQWdCO0lBRWpELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUE2QjtRQUMzQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFF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