"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDSBConnectsAPI = void 0;
const token_1 = require("./schema/token");
class TDSBConnectsAPI {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.connect();
    }
    async call(request) {
        return request.send(this);
    }
    async connect() {
        this.call(token_1.TokenRequest.userPass(this.username, this.password, this)).then((response) => {
            this.authenticationInfo = response;
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.TDSBConnectsAPI = TDSBConnectsAPI;
exports.default = TDSBConnectsAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUEyRDtBQUczRCxNQUFhLGVBQWU7SUFLMUIsWUFBWSxRQUFnQixFQUFFLFFBQWdCO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUF3QjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7WUFDcEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBdEJELDBDQXNCQztBQUVELGtCQUFlLGVBQWUsQ0FBQyJ9