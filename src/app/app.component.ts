import { Component } from '@angular/core';
import { UserService } from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedProject: entities.IProject;
  constructor(
    private userService: UserService
  ) {

  }
  public getProjectNames(): string[] {
    return this.userService.projectNames;
  }

  public getProjectInfo(event: MouseEvent, projectName: string) {
    console.log(this.userService.getProject(projectName));
    this.selectedProject = this.userService.getProject(projectName);
    return this.selectedProject;
  }
  title = 'app works!';
}
