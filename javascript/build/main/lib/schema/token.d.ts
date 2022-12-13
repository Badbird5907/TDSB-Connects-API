import TDSBConnectsAPI from "../index";
import { APIRequest, APIResponse } from './index';
export declare class TokenResponse extends APIResponse {
    readonly accessToken: string;
    readonly tokenType: string;
    readonly expiresIn: number;
    readonly refreshToken: string;
    readonly refreshTokenExpiresIn: string;
    readonly formattedIssued: string;
    readonly formattedExpires: string;
    isExpired(): boolean;
    isRefreshTokenExpired(): boolean;
    refreshIfNeeded(tdsbConnects: TDSBConnectsAPI): Promise<TokenResponse>;
}
export declare class TokenRequest extends APIRequest<TokenResponse> {
    username: string;
    password: string;
    refreshToken: string | null;
    tdsbConnects: TDSBConnectsAPI;
    /**
     * @deprecated Use {@link refreshToken} or {@link userPass} instead because of js limitations
     * @param tdsbConnects
     */
    constructor(tdsbConnects: TDSBConnectsAPI);
    static refreshToken(refresh: string, tdsbConnects: TDSBConnectsAPI): TokenRequest;
    static userPass(username: string, password: string, tdsbConnects: TDSBConnectsAPI): TokenRequest;
    getEndpoint(): string;
    buildHeaders(tdsbConnects: TDSBConnectsAPI): any;
    getResponseClass(): any;
    send(tdsbConnects: TDSBConnectsAPI): Promise<TokenResponse>;
}
