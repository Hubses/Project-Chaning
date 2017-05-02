import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UserService {

  public user$: Observable<entities.IUser>;

  private _user: FirebaseAuthState | undefined | null;
  private storageRef = this.af.database.object('users/0');

  constructor(
    private af: AngularFire
  ) {
    console.log(this.storageRef.subscribe(data => {
      console.log(data);
    }));
    this.user$ = this.af.auth.map(user => {
      console.log(user);

      if (user) {
        return {
          name: user.google.displayName,
          id: user.uid
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
