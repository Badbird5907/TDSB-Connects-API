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
const index_1 = require("../../../../index");
const index_2 = require("../../index");
const axios_1 = __importDefault(require("axios"));
const class_transformer_1 = require("class-transformer");
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
    (0, class_transformer_1.Expose)({ name: "access_token" })
], TokenResponse.prototype, "accessToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "token_type" })
], TokenResponse.prototype, "tokenType", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "expires_in" })
], TokenResponse.prototype, "expiresIn", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "refresh_token" })
], TokenResponse.prototype, "refreshToken", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "refresh_token_expires_in" })
], TokenResponse.prototype, "refreshTokenExpiresIn", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: ".issued" })
], TokenResponse.prototype, "formattedIssued", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: ".expires" })
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
        return 'token';
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
        return new Promise((resolve) => {
            if (this.refreshToken !== null && this.refreshToken !== undefined) {
                const form = new form_data_1.default();
                form.append('grant_type', 'refresh_token');
                form.append('refresh_token', this.refreshToken);
                axios_1.default.post(index_1.API_BASE + endpoint, form, {
                    headers: {
                        "X-Client-App-Info": index_1.CLIENT_ID,
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
                const form = new form_data_1.default();
                form.append('grant_type', 'password');
                form.append('username', this.username);
                form.append('password', this.password);
                axios_1.default.post(index_1.API_BASE + endpoint, form, {
                    headers: {
                        "X-Client-App-Info": index_1.CLIENT_ID,
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
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbXBsL2F1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNEO0FBR3RELHVDQUFvRDtBQUNwRCxrREFBMEI7QUFDMUIseURBQXlDO0FBQ3pDLDBEQUFpQztBQUVqQyxNQUFhLGFBQWMsU0FBUSxtQkFBVztJQWdCNUMsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsZUFBZSxDQUFDLFlBQTZCO1FBQzNDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtnQkFDaEMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztxQkFDakcsSUFBSSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO29CQUNoQyxZQUFZLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO29CQUMzQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pCLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNwQixZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZ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