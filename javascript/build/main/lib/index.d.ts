import { TokenResponse } from "./schema/impl/auth";
import { APIRequest } from "./schema";
export declare class TDSBConnectsAPI {
    username: string;
    password: string;
    authenticationInfo: TokenResponse;
    ready: boolean;
    readyCallback: (() => void) | null;
    useCache: boolean;
    constructor(username: string, password: string, readyCallback: () => void);
    call(request: APIRequest<any>): Promise<any>;
    connect(): void;
}
export default TDSBConnectsAPI;
