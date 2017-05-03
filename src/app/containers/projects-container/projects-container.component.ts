import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProjectStorageService, AuthService, ProjectsService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-default-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnInit {

  public user$: Observable<entities.IUser>;
  public projects$: Observable<entities.IProject[]>;

  constructor(
    private snackBar: MdSnackBar,
    private projectStorageService: ProjectStorageService,
    private authService: AuthService,
    private projectsService: ProjectsService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.projects$ = this.user$.switchMap(user => this.projectsService.getProjects(user.id));
  }

  public logout(): void {
    this.authService.logout();
  }

  public createProject(project: entities.IProject): void {
    this.projectsService.createProject(project);
  }

  public removeProject(project: entities.IProject): void {
    this.projectsService.removeProject(project);
  }

  public viewDetail(projectName: string): entities.IProject {
    const currentProject = this.projectStorageService.find(projectName);
    this.router.navigate(['/project', currentProject.name]);
    return currentProject;
  }

  public generateProject(projectName: string): void {

    const currentProject = this.projectStorageService.find(projectName);

    const snackbarRef = this.snackBar.open('generating, please wait', 'OK', {
      duration: 3000
    });
    snackbarRef.afterOpened().subscribe(() => {
      console.log(currentProject.name + ' generate starting');
    });
    snackbarRef.afterDismissed().subscribe(() => {
      console.log(currentProject.name + ' generate ending');
    });
  }
}
