import { Component, OnInit } from '@angular/core';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userSerice: LoginService
  ) {

  }

  ngOnInit() {

  }

  public loginGoogle() {
    this.userSerice.loginGoogle();
  }
  public logout() {
    this.userSerice.logout();
  }

}
