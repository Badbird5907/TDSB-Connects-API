"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDSBConnectsAPI = void 0;
const auth_1 = require("./schema/impl/auth");
class TDSBConnectsAPI {
    constructor(username, password, readyCallback) {
        this.ready = false;
        this.readyCallback = null;
        this.useCache = false; // Doesn't work
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUErRDtBQUcvRCxNQUFhLGVBQWU7SUFRMUIsWUFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsYUFBeUI7UUFIbEUsVUFBSyxHQUFZLEtBQWdCLENBQUM7UUFDbEMsa0JBQWEsR0FBd0IsSUFBSSxDQUFDO1FBQzFDLGFBQVEsR0FBWSxLQUFnQixDQUFDLENBQUMsZUFBZTtRQUUxRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBd0I7UUFDakMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7WUFDcEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBNUJELDBDQTRCQztBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9