import { Component, OnInit, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UserStorageService, ProjectStorageService, LoginService } from './services';

import { User } from './model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from './components';
import { Application } from './model';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public user: entities.IUser;

  public constructor(
    private userService: LoginService,
    private userStorageService: UserStorageService,
    private router: Router
  ) { }

  public ngOnInit() {
    this.userService.user$.subscribe(user => {
      this.user = user;
      user ? this.router.navigate(['/projects']) : this.router.navigate(['/login']);
    });
  }

  logout() {
    this.userService.logout();
  }
}
