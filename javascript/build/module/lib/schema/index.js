import 'reflect-metadata';
import axios from "axios";
import { API_BASE, CLIENT_ID } from "../../index";
import { plainToInstance } from "class-transformer";
export class APIRequest {
    async send(tdsbConnects) {
        const endpoint = this.getEndpoint();
        if (endpoint.startsWith("/"))
            endpoint.substring(1);
        let request = await this.buildRequest(endpoint, tdsbConnects);
        const a = this.addData(request, tdsbConnects);
        if (a != null)
            request = a;
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
    sendReq(request, endpoint) {
        console.log("Sending request to " + endpoint);
        return request.get(API_BASE + endpoint);
    }
    handleResponse(response) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = plainToInstance(this.getResponseClass(), response.data);
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
    buildRequest(endpoint, tdsbConnects) {
        if (!tdsbConnects.authenticationInfo) {
            const headers = this.buildHeaders(tdsbConnects);
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
            const authInfo = tdsbConnects.authenticationInfo;
            authInfo.refreshIfNeeded(tdsbConnects)
                .then(() => {
                const headers = this.buildHeaders(tdsbConnects);
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
    buildHeaders(tdsbConnects) {
        return {
            "X-Client-App-Info": CLIENT_ID,
            "Authorization": "Bearer " + tdsbConnects.authenticationInfo.accessToken
        };
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    addData(request, tdsbConnects) {
        return request;
    }
}
export class APIResponse {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sS0FBc0IsTUFBTSxPQUFPLENBQUM7QUFFM0MsT0FBTyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFHaEQsT0FBTyxFQUNMLGVBQWUsRUFDaEIsTUFBTSxtQkFBbUIsQ0FBQztBQUczQixNQUFNLE9BQWdCLFVBQVU7SUFHOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUE2QjtRQUN0QyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxJQUFJO1lBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixrQ0FBa0M7UUFDbEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDZixnRkFBZ0Y7Z0JBQ2hGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLG9DQUFvQztnQkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFD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