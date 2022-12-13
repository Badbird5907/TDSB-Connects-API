import axios, {AxiosInstance} from "axios";
import {deserialize} from 'json-typescript-mapper';

import {API_BASE, CLIENT_ID} from "../../../index";
import TDSBConnectsAPI from "../index";


export abstract class APIRequest<T> {
  abstract getEndpoint(): string;

  async send(tdsbConnects: TDSBConnectsAPI): Promise<T> {
    const endpoint: string = this.getEndpoint();
    if (endpoint.startsWith("/")) endpoint.substring(1);

    let request = await this.buildRequest(endpoint, tdsbConnects);
    const a = this.addData(request, tdsbConnects);
    if (a != null) request = a;
    // Create and return a new promise
    return new Promise((resolve, reject) => {
      this.sendReq(request, endpoint)
        .then(response => {
          // If the request was successful, call handleResponse and pass the response data
          const data = this.handleResponse(response);
          // Resolve the promise with the data
          resolve(data);
        })
        .catch(error => {
          // If there was an error, reject the promise with the error message
          reject(error.message);
        });
    });
  }

  sendReq(request: AxiosInstance, endpoint: string): Promise<T> {
    return request.get(endpoint);
  }

  handleResponse(response: any): T {
    return deserialize<T>(response.data, this.getResponseClass());
  }

  buildRequest(endpoint: string, tdsbConnects: TDSBConnectsAPI): Promise<AxiosInstance> {
    if (!tdsbConnects.authenticationInfo) {
      const headers: any = this.buildHeaders(tdsbConnects);
      return new Promise((resolve) => {
        resolve(axios.create({
          baseURL: API_BASE + endpoint,
          headers: {
            ...headers
          }
        }));
      });
    }
    return new Promise((resolve, reject) => {
      tdsbConnects.authenticationInfo.refreshIfNeeded(tdsbConnects)
        .then(() => {
          const headers: any = this.buildHeaders(tdsbConnects);
          resolve(axios.create({
            baseURL: API_BASE + endpoint,
            headers: {
              ...headers
            }
          }));
        })
        .catch(reject);
    });
  }

  buildHeaders(tdsbConnects: TDSBConnectsAPI): any {
    return {
      "X-Client-App-Info": CLIENT_ID,
      "Authorization": "Bearer " + tdsbConnects.authenticationInfo.accessToken
    };
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private addData(request: AxiosInstance, tdsbConnects: TDSBConnectsAPI): AxiosInstance {
    return request;
  }

  abstract getResponseClass(): any;
}

export class APIResponse {

}
