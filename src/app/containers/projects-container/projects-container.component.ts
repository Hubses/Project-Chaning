import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProjectStorageService, AuthService, ProjectsService, ProjectGeneratorService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnInit {

  private snackBarOpenedSubscribtion: Subscription;
  private snackBarDississedSubscribtion: Subscription;

  public user$: Observable<entities.IUser>;
  public projects$: Observable<entities.IProject[]>;

  public constructor(
    private snackBar: MdSnackBar,
    private projectStorageService: ProjectStorageService,
    private authService: AuthService,
    private projectsService: ProjectsService,
    private router: Router,
    private projectGeneratorService: ProjectGeneratorService
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

  public generateProject(project: entities.IProject): void {

    const snackbarRef = this.snackBar.open('generating, please wait', 'OK', {
      duration: 3000
    });
    this.snackBarOpenedSubscribtion = snackbarRef.afterOpened().subscribe(() => {
      console.log(' generate starting');
      this.snackBarOpenedSubscribtion.unsubscribe();
    });
    this.snackBarDississedSubscribtion = snackbarRef.afterDismissed().subscribe(() => {
      console.log(' generate ending');

      this.projectGeneratorService.generateDownloadUrl();

      this.snackBarDississedSubscribtion.unsubscribe();
    });
  }
}
