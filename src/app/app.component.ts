import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription;

  public constructor(
    private userService: AuthService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe(user =>
      user ? this.router.navigate(['/projects']) : this.router.navigate(['/login'])
    );
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
