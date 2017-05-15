import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';


@Injectable()
export class AuthService {

  public user$: Observable<entities.IUser | null>;

  private state: FirebaseAuthState | null;

  constructor(
    private af: AngularFire
  ) {
    this.user$ = this.af.auth.switchMap(state => state ? this.af.database.object(`/users/${state.uid}`) : Observable.of(null));
    this.af.auth.subscribe(state => this.state = state);
  }

  public getState(): FirebaseAuthState {
    return this.state;
  }

  public loginGoogle(): void {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(state => {
      const subscription = this.af.database.object(`/users/${state.uid}`).subscribe(data => {
        if (data.$value === null) {
          this.af.database.object(`/users/${state.uid}`).set({
            id: state.uid,
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
