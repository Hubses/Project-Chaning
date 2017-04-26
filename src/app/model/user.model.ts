import { Observable } from 'rxjs/Observable';
import { ExtendedString } from '../classes/extendedString';
// import { AbstractUser } from './user.abstract.model';

export class User {

    public static toJson(user: User): entities.IUser {
        return {
            name: user.name
        };
    }

    public static fromJson(json: entities.IUser): User {
        const user = new User();
        user._name = json.name;
        return user;
    }

    public static toObservable(user: User): Observable<entities.IUser> {
        return Observable.of(user);
    }

    public constructor(
        private _name?: string
    ) {
        if (ExtendedString.isNullorWhiteSpace(_name)) {
            _name = 'User1';
        }
    }

    public get name(): string {
        return this._name;
    }
}
