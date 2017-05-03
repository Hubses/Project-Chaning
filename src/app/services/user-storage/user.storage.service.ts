import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

// import { User } from '../../model';

@Injectable()
export class UserStorageService {

  public users$: FirebaseListObservable<entities.IDB>;

  public constructor(
    private af: AngularFire
  ) {

  }

  public getUserById(id: string): Observable<entities.IDB> {
    return this.af.database.list('/users').map((users: entities.IDB[]) => {
      return users.find(user => user.id === id);
    });
  }

  public AddUser(userId: string, userName: string, projects?: entities.IProject[]) {
    this.users$.push({
      id: userId,
      name: userName,
      projects: projects
    });
  }
}
