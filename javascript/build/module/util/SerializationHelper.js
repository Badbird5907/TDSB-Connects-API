export function SerializedName(name) {
    return function (target, propertyKey) {
        target[propertyKey] = name;
    };
}
export class SerializationHelper {
    static toInstance(obj, json) {
        const jsonObj = JSON.parse(json);
        if (typeof obj["fromJSON"] === "function") {
            obj["fromJSON"](jsonObj);
        }
        else {
            for (const propName in jsonObj) {
                obj[propName] = jsonObj[propName];
            }
        }
        return obj;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphdGlvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL1NlcmlhbGl6YXRpb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsTUFBTSxVQUFVLGNBQWMsQ0FBQyxJQUFZO0lBQ3ZDLE9BQU8sVUFBUyxNQUFXLEVBQUUsV0FBbUI7UUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBQ0QsTUFBTSxPQUFPLG1CQUFtQjtJQUM1QixNQUFNLENBQUMsVUFBVSxDQUFJLEdBQU0sRUFBRSxJQUFZO1FBQ3JDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFakMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDdkMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVCO2FBQ0k7WUFDRCxLQUFLLE1BQU0sUUFBUSxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNwQztTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0NBQ0oifQ==