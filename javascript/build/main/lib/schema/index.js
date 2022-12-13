"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIResponse = exports.APIRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const json_typescript_mapper_1 = require("json-typescript-mapper");
const index_1 = require("../../index");
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
        return request.get(endpoint);
    }
    handleResponse(response) {
        return (0, json_typescript_mapper_1.deserialize)(response.data, this.getResponseClass());
    }
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
            tdsbConnects.authenticationInfo.refreshIfNeeded(tdsbConnects)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NjaGVtYS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMkM7QUFDM0MsbUVBQW1EO0FBRW5ELHVDQUFnRDtBQUloRCxNQUFzQixVQUFVO0lBRzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBNkI7UUFDdEMsTUFBTSxRQUFRLEdBQVcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzVDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBELElBQUksT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksSUFBSTtZQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDM0Isa0NBQWtDO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2lCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ2YsZ0ZBQWdGO2dCQUNoRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxvQ0FBb0M7Z0JBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNiLG1FQUFtRTtnQkFDbkUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFzQixFQUFFLFFBQWdCO1FBQzlDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQWE7UUFDMUIsT0FBTyxJQUFBLG9DQUFXLEVBQUksUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBZ0IsRUFBRSxZQUE2QjtRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BDLE1BQU0sT0FBTyxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM3QixPQUFPLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQztvQkFDbkIsT0FBTyxFQUFFLGdCQUFRLEdBQUcsUUFBUTtvQkFDNUIsT0FBTyxvQkFDRixPQUFPLENBQ1g7aUJBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztpQkFDMUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxNQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNyRCxPQUFPLENBQUMsZUFBSyxDQUFDLE1BQU0sQ0FBQztvQkFDbkIsT0FBTyxFQUFFLGdCQUFRLEdBQUcsUUFBUTtvQkFDNUIsT0FBTyxvQkFDRixPQUFPLENBQ1g7aUJBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxZQUE2QjtRQUN4QyxPQUFPO1lBQ0wsbUJBQW1CLEVBQUUsaUJBQVM7WUFDOUIsZUFBZSxFQUFFLFNBQVMsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUMsV0FBVztTQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVELDZEQUE2RDtJQUM3RCxhQUFhO0lBQ0wsT0FBTyxDQUFDLE9BQXNCLEVBQUUsWUFBNkI7UUFDbkUsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUdGO0FBM0VELGdDQTJFQztBQUVELE1BQWEsV0FBVztDQUV2QjtBQUZELGtDQUVDIn0=