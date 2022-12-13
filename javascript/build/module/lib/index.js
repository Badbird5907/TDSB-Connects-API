import { TokenRequest } from "./schema/impl/auth";
export class TDSBConnectsAPI {
    username;
    password;
    authenticationInfo;
    ready = false;
    readyCallback = null;
    constructor(username, password, readyCallback) {
        this.username = username;
        this.password = password;
        this.readyCallback = readyCallback;
        this.connect();
    }
    async call(request) {
        return request.send(this);
    }
    connect() {
        this.call(TokenRequest.userPass(this.username, this.password, this)).then((response) => {
            this.authenticationInfo = response;
            this.ready = true;
            if (this.readyCallback)
                this.readyCallback();
        }).catch((error) => {
            console.error('Error logging in: ' + error);
        });
    }
}
export default TDSBConnectsAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFHL0QsTUFBTSxPQUFPLGVBQWU7SUFDbkIsUUFBUSxDQUFTO0lBQ2pCLFFBQVEsQ0FBUztJQUNqQixrQkFBa0IsQ0FBZ0I7SUFFbEMsS0FBSyxHQUFZLEtBQWdCLENBQUM7SUFDbEMsYUFBYSxHQUF3QixJQUFJLENBQUM7SUFDakQsWUFBWSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsYUFBeUI7UUFDdkUsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQXdCO1FBQ2pDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7WUFDcEcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsZUFBZSxlQUFlLENBQUMifQ==