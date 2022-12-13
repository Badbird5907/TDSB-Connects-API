"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializationHelper = exports.SerializedName = void 0;
function SerializedName(name) {
    return function (target, propertyKey) {
        target[propertyKey] = name;
    };
}
exports.SerializedName = SerializedName;
class SerializationHelper {
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
exports.SerializationHelper = SerializationHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWFsaXphdGlvbkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsL1NlcmlhbGl6YXRpb25IZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsU0FBZ0IsY0FBYyxDQUFDLElBQVk7SUFDdkMsT0FBTyxVQUFTLE1BQVcsRUFBRSxXQUFtQjtRQUM1QyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFKRCx3Q0FJQztBQUNELE1BQWEsbUJBQW1CO0lBQzVCLE1BQU0sQ0FBQyxVQUFVLENBQUksR0FBTSxFQUFFLElBQVk7UUFDckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUN2QyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDNUI7YUFDSTtZQUNELEtBQUssTUFBTSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUM1QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3BDO1NBQ0o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjtBQWRELGtEQWNDIn0=