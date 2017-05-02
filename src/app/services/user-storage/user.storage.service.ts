import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../../model';

@Injectable()
export class UserStorageService {
  public user$ = new BehaviorSubject<User>({ name: '' });

  private user: User;


  private KEY = 'UserStorage__KEY';

  public constructor() {
    const user = localStorage.getItem(this.KEY);

    if (user !== null) {
      this.user = JSON.parse(user);
    } else {
      this.user = new User('123');
      localStorage.setItem(this.KEY, JSON.stringify(this.user));
    }
    this.user$.next(this.user);
  }
}
