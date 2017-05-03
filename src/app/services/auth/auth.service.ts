import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Rx';

import { UserStorageService } from '../user-storage/user.storage.service';

@Injectable()
export class AuthService {

  public user$: Observable<entities.IUser | null>;

  constructor(
    private af: AngularFire,
    private userStorageService: UserStorageService
  ) {
    this.user$ = this.af.auth.switchMap(state => state ? this.af.database.object(`/users/${state.uid}`) : Observable.of(null));
  }

  public loginGoogle(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(state => {
      const subscription = this.af.database.object(`/users/${state.uid}`).subscribe(data => {
        if (data.$value === null) {
          this.af.database.object(`/users/${state.uid}`).set({
            name: state.auth.displayName,
            photoUrl: state.auth.photoURL
          });
        }

        subscription.unsubscribe();
      });
    });
  }

  public logout(): void {
    this.af.auth.logout();
  }
}
