export abstract class Serializable {
    public static toJson<T>(serializableObject: T): Object {
        return { serializableObject };
    };

    public static fromJson() { }
}