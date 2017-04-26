import { Component, OnInit, Output } from '@angular/core';
import { UserService, ProjectService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: entities.IUser;
  public projects: entities.IProject[];

  public currentProject: entities.IProject;

  public constructor(
    private userService: UserService,
    private projectService: ProjectService
  ) { }

  public ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
    this.projectService.getProjects(this.user.name).subscribe(projects => this.projects = projects);
  }

  public setCurrentProject(projectName: string): entities.IProject {
    this.currentProject = this.projectService.setCurrentProject(projectName);
    return this.currentProject;
  }
}
