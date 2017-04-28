import { Observable } from 'rxjs/Observable';
import { StringUtil } from '../classes';

export class User {

    public static toJson(user: User): Object {
        return {
            name: user.name
        };
    }

    public static fromJson(json: User): User {
        const user = new User(json.name);
        return user;
    }

    public constructor(
        public name: string
    ) {
        if (StringUtil.isNullorWhiteSpace(name)) {
            throw new Error('name is required');
        }
    }
}
