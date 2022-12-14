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
import { URLSearchParams } from 'url';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUd0RCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNwRCxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxLQUFLLENBQUM7QUFFcEMsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUFXO0lBRXJDLFdBQVcsQ0FBUztJQUVwQixTQUFTLENBQVMsQ0FBQyxrQ0FBa0M7SUFFckQsU0FBUyxDQUFTLENBQUMscUJBQXFCO0lBRXhDLFlBQVksQ0FBUztJQUVyQixxQkFBcUIsQ0FBUyxDQUFDLGdGQUFnRjtJQUUvRyxlQUFlLENBQVMsQ0FBQywyQ0FBMkM7SUFFcEUsZ0JBQWdCLENBQVMsQ0FBQyxnQkFBZ0I7SUFFakQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZUFBZSxDQUFDLFlBQTZCO1FBQzNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtnQkFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztxQkFDakcsSUFBSSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO29CQUNoQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO29CQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztxQkFDMUUsSUFBSSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO29CQUNoQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO29CQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTdDQztJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQztrREFDSjtBQUUzQjtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQztnREFDSjtBQUV6QjtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQztnREFDSjtBQUV6QjtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQzttREFDSjtBQUU1QjtJQURDLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSwwQkFBMEIsRUFBQyxDQUFDOzREQUNOO0FBRXJDO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO3NEQUNLO0FBRS9CO0lBREMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO3VEQUNLO0FBbUNsQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFVBQXlCO0lBQ2xELFFBQVEsQ0FBUztJQUNqQixRQUFRLENBQVM7SUFDakIsWUFBWSxHQUFrQixJQUFJLENBQUM7SUFDbkMsWUFBWSxDQUFrQjtJQUdyQzs7O09BR0c7SUFDSCxZQUFZLFlBQTZCO1FBQ3ZDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBZSxFQUFFLFlBQTZCO1FBQ3ZFLE1BQU0sT0FBTyxHQUFpQixJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUMvQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFnQixFQUFFLFFBQWdCLEVBQUUsWUFBNkI7UUFDdEYsTUFBTSxPQUFPLEdBQWlCLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzVCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCx3RUFBd0U7SUFDeEUsWUFBWSxDQUFDLFlBQTZCO1FBQ3hDLE9BQU87WUFDTCxtQkFBbUIsRUFBRSxTQUFTO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVELDZEQUE2RDtJQUM3RCx3RUFBd0U7SUFDeEUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUE2QjtRQUN0QyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQ2pFLDhCQUE4QjtnQkFDOUIsNkNBQTZDO2dCQUM3QyxrREFBa0Q7Z0JBRWxEOzs7OzttQkFLRztnQkFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNyQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsQ0FBQztnQkFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUMvQztvQkFDRSxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CLEVBQUUsU0FBUzt3QkFDOUIsY0FBYyxFQUFFLG1DQUFtQztxQkFDcEQ7b0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO2lCQUM5QyxDQUFDO3FCQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFBO2FBQ0w7aUJBQU07Z0JBQ0w7Ozt5REFHeUM7Z0JBRXpDOzs7Ozs7bUJBTUc7Z0JBQ0gsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV6QyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUMvQztvQkFDRSxPQUFPLEVBQUU7d0JBQ1AsbUJBQW1CLEVBQUUsU0FBUzt3QkFDOUIsY0FBYyxFQUFFLG1DQUFtQztxQkFDcEQ7b0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZO2lCQUM5QyxDQUFDO3FCQUNELElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNqQixNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFBO2FBQ0w7UUFDSCxDQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9