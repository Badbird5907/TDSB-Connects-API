import { TokenResponse } from "./schema/token";
import { APIRequest } from "./schema";
export declare class TDSBConnectsAPI {
    username: string;
    password: string;
    authenticationInfo: TokenResponse;
    constructor(username: string, password: string);
    call(request: APIRequest<any>): Promise<any>;
    connect(): Promise<void>;
}
export default TDSBConnectsAPI;
