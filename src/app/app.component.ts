import { Component, OnInit, Output } from '@angular/core';
import { UserStorageService, ProjectStorageService } from './services';

import { User } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public user: User;
  public projects: entities.IProject[];

  public currentProject: entities.IProject;

  public constructor(
    private userStorageService: UserStorageService,
    private projectStorageService: ProjectStorageService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.projectStorageService.getProjects().subscribe(project => this.projects = project);
  }

  public setCurrentProject(projectName: string): entities.IProject {
    this.currentProject = this.projectStorageService.getProject(projectName);
    this.router.navigate(['/project', this.currentProject.name]);
    return this.currentProject;
  }
}
