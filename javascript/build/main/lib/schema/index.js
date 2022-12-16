"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = exports.APIRequest = void 0;
require("reflect-metadata");
const axios_1 = __importDefault(require("axios"));
const index_1 = require("../../index");
const class_transformer_1 = require("class-transformer");
const cache_1 = __importDefault(require("../cache"));
class APIRequest {
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
        return request.get(index_1.API_BASE + endpoint);
    }
    handleResponse(response) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = (0, class_transformer_1.plainToInstance)(this.getResponseClass(), response.data);
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
                if (tdsbConnects.useCache && this.useCache()) {
                    resolve(axios_1.default.create({
                        baseURL: index_1.API_BASE + endpoint,
                        adapter: cache_1.default.adapter,
                        headers: Object.assign({}, headers)
                    }));
                }
                else {
                    resolve(axios_1.default.create({
                        baseURL: index_1.API_BASE + endpoint,
                        headers: Object.assign({}, headers)
                    }));
                }
            });
        }
        return new Promise((resolve, reject) => {
            const authInfo = tdsbConnects.authenticationInfo;
            authInfo.refreshIfNeeded(tdsbConnects)
                .then(() => {
                const headers = this.buildHeaders(tdsbConnects);
                if (tdsbConnects.useCache && this.useCache()) {
                    resolve(axios_1.default.create({
                        baseURL: index_1.API_BASE + endpoint,
                        adapter: cache_1.default.adapter,
                        headers: Object.assign({}, headers)
                    }));
                }
                else {
                    resolve(axios_1.default.create({
                        baseURL: index_1.API_BASE + endpoint,
                        headers: Object.assign({}, headers)
                    }));
                }
            })
                .catch(reject);
        });
    }
    buildHeaders(tdsbConnects) {
        return {
            "X-Client-App-Info": index_1.CLIENT_ID,
            "Authorization": "Bearer " + tdsbConnects.authenticationInfo.accessToken
        };
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    addData(request, tdsbConnects) {
        return request;
    }
    useCache() {
        return true;
    }
}
exports.APIRequest = APIRequest;
class APIResponse {
}
exports.APIResponse = APIResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsa0RBQTJDO0FBRTNDLHVDQUFnRDtBQUdoRCx5REFBa0Q7QUFDbEQscURBQTZCO0FBRzdCLE1BQXNCLFVBQVU7SUFHOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUE2QjtRQUN0QyxNQUFNLFFBQVEsR0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQztZQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxJQUFJO1lBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixrQ0FBa0M7UUFDbEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUM7aUJBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDZixnRkFBZ0Y7Z0JBQ2hGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLG9DQUFvQztnQkFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2IsbUVBQW1FO2dCQUNuRSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQXNCLEVBQUUsUUFBZ0I7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM5QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWE7UUFDMUIsNkRBQTZEO1FBQzdELGFBQWE7UUFDYixNQUFNLElBQUksR0FBUSxJQUFBLG1DQUFlLEVBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLDRDQUE0QztRQUM1Qzs7Ozs7Ozs7Ozs7V0FXRztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUdILFlBQVksQ0FBQyxRQUFnQixFQUFFLFlBQTZCO1FBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUU7WUFDcEMsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzdCLElBQUksWUFBWSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7b0JBQzVDLE9BQU8sQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsZ0JBQVEsR0FBRyxRQUFRO3dCQUM1QixPQUFPLEVBQUUsZUFBSyxDQUFDLE9BQU87d0JBQ3RCLE9BQU8sb0JBQ0YsT0FBTyxDQUNYO3FCQUNGLENBQUMsQ0FBQyxDQUFDO2lCQUNMO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxlQUFLLENBQUMsTUFBTSxDQUFDO3dCQUNuQixPQUFPLEVBQUUsZ0JBQVEsR0FBRyxRQUFRO3dCQUM1QixPQUFPLG9CQUNGLE9BQU8sQ0FDWDtxQkFDRixDQUFDLENBQUMsQ0FBQztpQkFDTDtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sUUFBUSxHQUFrQixZQUFZLENBQUMsa0JBQWtCLENBQUM7WUFDaEUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUM7aUJBQ25DLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckQsSUFBSSxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDNUMsT0FBTyxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUM7d0JBQ25CLE9BQU8sRUFBRSxnQkFBUSxHQUFHLFFBQVE7d0JBQzVCLE9BQU8sRUFBRSxlQUFLLENBQUMsT0FBTzt3QkFDdEIsT0FBTyxvQkFDRixPQUFPLENBQ1g7cUJBQ0YsQ0FBQyxDQUFDLENBQUM7aUJBQ0w7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUM7d0JBQ25CLE9BQU8sRUFBRSxnQkFBUSxHQUFHLFFBQVE7d0JBQzVCLE9BQU8sb0JBQ0YsT0FBTyxDQUNYO3FCQUNGLENBQUMsQ0FBQyxDQUFDO2lCQUNMO1lBQ0gsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsWUFBNkI7UUFDeEMsT0FBTztZQUNMLG1CQUFtQixFQUFFLGlCQUFTO1lBQzlCLGVBQWUsRUFBRSxTQUFTLEdBQUcsWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVc7U0FDekUsQ0FBQztJQUNKLENBQUM7SUFFRCw2REFBNkQ7SUFDN0QsYUFBYTtJQUNMLE9BQU8sQ0FBQyxPQUFzQixFQUFFLFlBQTZCO1FBQ25FLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFJRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFqSUQsZ0NBaUlDO0FBRUQsTUFBYSxXQUFXO0NBRXZCO0FBRkQsa0NBRUMifQ==