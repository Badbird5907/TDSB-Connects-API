import 'reflect-metadata';
import axios, {AxiosInstance} from "axios";

import {API_BASE, CLIENT_ID} from "../../index";
import TDSBConnectsAPI from "../index";
import {TokenResponse} from "./impl/auth";
import {
  plainToInstance
} from "class-transformer";


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
    console.log("Sending request to " + endpoint);
    return request.get(API_BASE + endpoint);
  }

  handleResponse(response: any): T {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const data: any = plainToInstance(this.getResponseClass(), response.data);
    // print out all the functions in this class
    /*
    console.log("------------------------")
    console.log('Data: ', data);
    console.log("Response: ", response);
    console.log('API Data: ', response.data);
    console.log("Functions in this class:")
    console.log(' - ' + this.getMethods(this).join('\n - '));
    console.log('Functions in test: ')
     const test = new TokenResponse();
    console.log(' - ' + this.getMethods(test).join('\n - '));
    console.log("------------------------")
     */
    return data;
  }
  /*
  getMethods = (obj) => {
    const properties = new Set()
    let currentObj = obj
    do {
      Object.getOwnPropertyNames(currentObj).map(item => properties.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...properties.keys()].filter(item => typeof obj[item] === 'function')
  }
   */


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
      const authInfo: TokenResponse = tdsbConnects.authenticationInfo;
      authInfo.refreshIfNeeded(tdsbConnects)
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
