export declare function SerializedName(name: string): (target: any, propertyKey: string) => void;
export declare class SerializationHelper {
    static toInstance<T>(obj: T, json: string): T;
}
