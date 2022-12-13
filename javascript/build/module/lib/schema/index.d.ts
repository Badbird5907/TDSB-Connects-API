import { AxiosInstance } from "axios";
import TDSBConnectsAPI from "../index";
export declare abstract class APIRequest<T> {
    abstract getEndpoint(): string;
    send(tdsbConnects: TDSBConnectsAPI): Promise<T>;
    sendReq(request: AxiosInstance, endpoint: string): Promise<T>;
    handleResponse(response: any): T;
    buildRequest(endpoint: string, tdsbConnects: TDSBConnectsAPI): Promise<AxiosInstance>;
    buildHeaders(tdsbConnects: TDSBConnectsAPI): any;
    private addData;
    abstract getResponseClass(): any;
}
export declare class APIResponse {
}
