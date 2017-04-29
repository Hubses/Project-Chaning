import { Component, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UserStorageService, ProjectStorageService } from './services';

import { User } from './model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public projects: entities.IProject[];
  public observableProjects: Observable<entities.IProject[]>;

  public currentProject: entities.IProject;

  public constructor(
    private userStorageService: UserStorageService,
    private projectStorageService: ProjectStorageService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.projectStorageService.getProjects().subscribe(project => this.projects = project);
    this.observableProjects = this.projectStorageService.getProjects();
  }

  public setCurrentProject(projectName: string): entities.IProject {
    this.currentProject = this.projectStorageService.getProject(projectName);
    this.router.navigate(['/project', this.currentProject.name]);
    return this.currentProject;
  }
}
