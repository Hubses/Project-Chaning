import { Observable } from 'rxjs/Observable';
import { AbstractUser } from './user.abstract.model';

export class User implements AbstractUser {
    public toJson(user: entities.IUser) {
        return {
            name: user.name
        };
    }
    public fromJson() {
        throw new Error('Method not implemented.');
    }
    public toObservable(user: User): Observable<entities.IUser> {
        const json = user.toJson(user);
        return Observable.of(json);
    }


    public constructor(
        private _name: string
    ) {
    }

    public get name(): string {
        return this._name;
    }
}