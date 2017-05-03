import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

import * as firebase from 'firebase';

import { UserStorageService } from '../user-storage/user.storage.service';

@Injectable()
export class LoginService {

  public user$: Observable<entities.IUser>;

  constructor(
    private af: AngularFire,
    private userStorageService: UserStorageService
  ) {

    this.user$ = this.af.auth.map(user => {
      if (user) {
        return {
          name: user.google.displayName,
          id: user.uid,
          imageurl: user.google.photoURL
        };
      } else {
        return null;
      }
    });
  }

  public loginGoogle(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

  public logout(): void {
    this.af.auth.logout();
  }
}
