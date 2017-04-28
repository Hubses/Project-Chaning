import { Component, OnInit, Output } from '@angular/core';
import { UserStorageService, ProjectStorageService } from './services';

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
    private userStorageService: UserStorageService,
    private projectStorageService: ProjectStorageService
  ) { }

  public ngOnInit(): void {
    //this.userStorageService.getUser().subscribe(user => this.user = user);
    // this.projectStorageService.getProject(this.user.name).subscribe(projects => this.projects = projects);
  }

  public setCurrentProject(projectName: string): entities.IProject {
    return this.currentProject;
  }
}
