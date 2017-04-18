import { Component } from '@angular/core';
import { UserService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userService: UserService
  ) {

  }
  public getProjectNames(): string[] {
    // console.log(this.userService.getProjectNames());
    // return this.userService.getProjectNames();
    // return [];
    return this.userService.projectNames;
  }
  title = 'app works!';
}
