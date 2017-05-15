import { Component } from '@angular/core';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public constructor(
    private authSerice: AuthService
  ) { }

  public loginGoogle(): void {
    this.authSerice.loginGoogle();
  }
}
