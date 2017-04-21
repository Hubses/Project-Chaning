import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const user: entities.IUser = {
  'name': 'User1'
};



@Injectable()
export class UserService {

  public constructor() { }

  public getUser(): Observable<entities.IUser> {
    return Observable.of(user);
  }
}
