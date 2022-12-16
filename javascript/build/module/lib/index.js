import { TokenRequest } from "./schema/impl/auth";
export class TDSBConnectsAPI {
    username;
    password;
    authenticationInfo;
    ready = false;
    readyCallback = null;
    useCache = false; // Doesn't work
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWdCLE1BQU0sb0JBQW9CLENBQUM7QUFHL0QsTUFBTSxPQUFPLGVBQWU7SUFDbkIsUUFBUSxDQUFTO0lBQ2pCLFFBQVEsQ0FBUztJQUNqQixrQkFBa0IsQ0FBZ0I7SUFFbEMsS0FBSyxHQUFZLEtBQWdCLENBQUM7SUFDbEMsYUFBYSxHQUF3QixJQUFJLENBQUM7SUFDMUMsUUFBUSxHQUFZLEtBQWdCLENBQUMsQ0FBQyxlQUFlO0lBQzVELFlBQVksUUFBZ0IsRUFBRSxRQUFnQixFQUFFLGFBQXlCO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUF3QjtRQUNqQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO1lBQ3BHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxRQUFRLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYTtnQkFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDL0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELGVBQWUsZUFBZSxDQUFDIn0=