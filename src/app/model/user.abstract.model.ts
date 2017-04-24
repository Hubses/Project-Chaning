export abstract class AbstractUser {
    public abstract toJson(abstractUser: entities.IUser);

    public abstract fromJson();
}
