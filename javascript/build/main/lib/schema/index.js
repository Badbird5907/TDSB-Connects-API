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
                resolve(axios_1.default.create({
                    baseURL: index_1.API_BASE + endpoint,
                    headers: Object.assign({}, headers)
                }));
            });
        }
        return new Promise((resolve, reject) => {
            const authInfo = tdsbConnects.authenticationInfo;
            authInfo.refreshIfNeeded(tdsbConnects)
                .then(() => {
                const headers = this.buildHeaders(tdsbConnects);
                resolve(axios_1.default.create({
                    baseURL: index_1.API_BASE + endpoint,
                    headers: Object.assign({}, headers)
                }));
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
}
exports.APIRequest = APIRequest;
class APIResponse {
}
exports.APIResponse = APIResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsa0RBQTJDO0FBRTNDLHVDQUFnRDtBQUdoRCx5REFFMkI7QUFHM0IsTUFBc0IsVUFBVTtJQUc5QixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQTZCO1FBQ3RDLE1BQU0sUUFBUSxHQUFXLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1lBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwRCxJQUFJLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLElBQUk7WUFBRSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGtDQUFrQztRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztpQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNmLGdGQUFnRjtnQkFDaEYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0Msb0NBQW9DO2dCQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDYixtRUFBbUU7Z0JBQ25FLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxPQUFPLENBQUMsT0FBc0IsRUFBRSxRQUFnQjtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBYTtRQUMxQiw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLE1BQU0sSUFBSSxHQUFRLElBQUEsbUNBQWUsRUFBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsNENBQTRDO1FBQzVDOzs7Ozs7Ozs7OztXQVdHO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBR0gsWUFBWSxDQUFDLFFBQWdCLEVBQUUsWUFBNkI7UUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTtZQUNwQyxNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxDQUFDLGVBQUssQ0FBQyxNQUFNLENBQUM7b0JBQ25CLE9BQU8sRUFBRSxnQkFBUSxHQUFHLFFBQVE7b0JBQzVCLE9BQU8sb0JBQ0YsT0FBTyxDQUNYO2lCQUNGLENBQUMsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxRQUFRLEdBQWtCLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztpQkFDbkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQztvQkFDbkIsT0FBTyxFQUFFLGdCQUFRLEdBQUcsUUFBUTtvQkFDNUIsT0FBTyxvQkFDRixPQUFPLENBQ1g7aUJBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxZQUE2QjtRQUN4QyxPQUFPO1lBQ0wsbUJBQW1CLEVBQUUsaUJBQVM7WUFDOUIsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVztTQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxhQUFhO0lBQ0wsT0FBTyxDQUFDLE9BQXNCLEVBQUUsWUFBNkI7UUFDbkUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUdGO0FBeEdELGdDQXdHQztBQUVELE1BQWEsV0FBVztDQUV2QjtBQUZELGtDQUVDIn0=