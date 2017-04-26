import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';



@Injectable()
export class UserService {
  private user: entities.IUser;

  private KEY = 'User';


  public constructor() {
    this.user = new User('User1');
  }

  public getUser(): Observable<entities.IUser> {
    const user = localStorage.getItem(this.KEY);
    if (user !== null) {
      return Observable.of(User.fromJson(JSON.parse(user)));
    } else {
      return Observable.of(new User());
    }
  }

  public isEmpty(): boolean {
    return localStorage.getItem(this.KEY) === null;
  }

  public putUser(user: entities.IUser) {
    localStorage.setItem(this.KEY, JSON.stringify(User.toJson(user)));
  }
}
