import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user.model';



@Injectable()
export class UserStorageService {
  private user: User;

  private KEY = 'UserStorage__KEY';


  public constructor() {
  }

  public getUser(): Observable<User> {
    let user = localStorage.getItem(this.KEY);

    if (user !== null) {

      return Observable.of(User.fromJson(JSON.parse(user)));

    } else {

      user = JSON.stringify(new User('123'));
      localStorage.setItem(this.KEY, user);
      return Observable.of(JSON.parse(user));
    }
  }

  public putUser(userName: string): void {

    const user = new User(userName);
    localStorage.setItem(this.KEY, JSON.stringify(user));

  }

  public isEmpty(): boolean {

    return localStorage.getItem(this.KEY) === null;

  }
}
