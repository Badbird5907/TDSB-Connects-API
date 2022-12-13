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
const form_data_1 = __importDefault(require("form-data"));
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - we are overriding the method but not using the parameter
    async send(tdsbConnects) {
        const endpoint = this.getEndpoint();
        if (endpoint.startsWith("/"))
            endpoint.substring(1);
        console.log('Sending token request to endpoint: ', endpoint);
        return new Promise((resolve) => {
            if (this.refreshToken) {
                const form = new form_data_1.default();
                form.append('grant_type', 'refresh_token');
                form.append('refresh_token', this.refreshToken);
                axios_1.default.post(index_1.API_BASE + endpoint, form, {
                    headers: Object.assign({ "X-Client-App-Info": index_1.CLIENT_ID }, form.getHeaders())
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
            else {
                const form = new form_data_1.default();
                form.append('grant_type', 'password');
                form.append('username', this.username);
                form.append('password', this.password);
                axios_1.default.post(index_1.API_BASE + endpoint, form, {
                    headers: Object.assign({ "X-Client-App-Info": index_1.CLIENT_ID }, form.getHeaders())
                })
                    .then((response) => {
                    resolve(response.data);
                });
            }
        });
    }
}
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtRUFBb0Q7QUFFcEQsdUNBQWdEO0FBR2hELG1DQUFnRDtBQUNoRCxrREFBMEI7QUFDMUIsMERBQWlDO0FBRWpDLE1BQWEsYUFBYyxTQUFRLG1CQUFXO0lBZ0I1QyxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0MsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxlQUFlLENBQUMsWUFBNkI7UUFDM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO2dCQUNoQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO3FCQUNqRyxJQUFJLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7b0JBQ2hDLFlBQVksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3BCLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMs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