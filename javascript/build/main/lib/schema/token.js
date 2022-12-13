"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenRequest = exports.TokenResponse = void 0;
const json_typescript_mapper_1 = require("json-typescript-mapper");
const index_1 = require("../../index");
const index_2 = require("./index");
const axios_1 = __importDefault(require("axios"));
class TokenResponse extends index_2.APIResponse {
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
    (0, json_typescript_mapper_1.JsonProperty)('access_token')
], TokenResponse.prototype, "accessToken", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('token_type')
], TokenResponse.prototype, "tokenType", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('expires_in')
], TokenResponse.prototype, "expiresIn", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('refresh_token')
], TokenResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('refresh_token_expires_in')
], TokenResponse.prototype, "refreshTokenExpiresIn", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('.issued')
], TokenResponse.prototype, "formattedIssued", void 0);
__decorate([
    (0, json_typescript_mapper_1.JsonProperty)('.expires')
], TokenResponse.prototype, "formattedExpires", void 0);
exports.TokenResponse = TokenResponse;
class TokenRequest extends index_2.APIRequest {
    /**
     * @deprecated Use {@link refreshToken} or {@link userPass} instead because of js limitations
     * @param tdsbConnects
     */
    constructor(tdsbConnects) {
        super();
        this.refreshToken = null;
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
            "X-Client-App-Info": index_1.CLIENT_ID
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
                axios_1.default.post(index_1.API_BASE + endpoint, {
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
                axios_1.default.post(index_1.API_BASE + endpoint, {
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
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtRUFBb0Q7QUFFcEQsdUNBQWdEO0FBR2hELG1DQUFnRDtBQUNoRCxrREFBMEI7QUFFMUIsTUFBYSxhQUFjLFNBQVEsbUJBQVc7SUFnQjVDLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELGVBQWUsQ0FBQyxZQUE2QjtRQUMzQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ2hDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7cUJBQ2pHLElBQUksQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtvQkFDaEMsWUFBWSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztvQkFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDcEIsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFB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