import { TokenRequest } from "./schema/impl/auth";
export class TDSBConnectsAPI {
    username;
    password;
    authenticationInfo;
    ready = false;
    readyCallback = null;
    useCache = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFHL0QsTUFBTSxPQUFPLGVBQWU7SUFDbkIsUUFBUSxDQUFTO0lBQ2pCLFFBQVEsQ0FBUztJQUNqQixrQkFBa0IsQ0FBZ0I7SUFFbEMsS0FBSyxHQUFZLEtBQWdCLENBQUM7SUFDbEMsYUFBYSxHQUF3QixJQUFJLENBQUM7SUFDMUMsUUFBUSxHQUFZLElBQWUsQ0FBQztJQUMzQyxZQUFZLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxhQUF5QjtRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBd0I7UUFDakMsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNwRyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWE7Z0JBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCxlQUFlLGVBQWUsQ0FBQyJ9