"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDSBConnectsAPI = void 0;
const auth_1 = require("./schema/impl/auth");
class TDSBConnectsAPI {
    constructor(username, password, readyCallback) {
        this.ready = false;
        this.readyCallback = null;
        this.useCache = true;
        this.username = username;
        this.password = password;
        this.readyCallback = readyCallback;
        this.connect();
    }
    async call(request) {
        return request.send(this);
    }
    connect() {
        this.call(auth_1.TokenRequest.userPass(this.username, this.password, this)).then((response) => {
            this.authenticationInfo = response;
            this.ready = true;
            if (this.readyCallback)
                this.readyCallback();
        }).catch((error) => {
            console.error('Error logging in: ' + error);
        });
    }
}
exports.TDSBConnectsAPI = TDSBConnectsAPI;
exports.default = TDSBConnectsAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUErRDtBQUcvRCxNQUFhLGVBQWU7SUFRMUIsWUFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsYUFBeUI7UUFIbEUsVUFBSyxHQUFZLEtBQWdCLENBQUM7UUFDbEMsa0JBQWEsR0FBd0IsSUFBSSxDQUFDO1FBQzFDLGFBQVEsR0FBWSxJQUFlLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO1lBQ3BHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVCRCwwQ0E0QkM7QUFFRCxrQkFBZSxlQUFlLENBQUMifQ==