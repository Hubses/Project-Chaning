import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ProjectStorageService, AuthService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Application } from '../../model';

@Component({
  selector: 'app-default-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnInit {

  public user: entities.IUser | null;
  public projects$: Observable<Application>;

  public urls = {
    angular2: 'https://angular.io/resources/images/logos/angular/angular.svg',
    react: 'https://react.parts/react-logo.svg',
    jquery: 'http://www.css-tricks.ru/content/data/6/jquery-icon.png'
  };

  constructor(
    private snackBar: MdSnackBar,
    private projectStorageService: ProjectStorageService,
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      this.user = user;
    });
  }

  public logout(): void {
    this.authService.logout();
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

  public removeProject(projectsName: string): void {
    this.projectStorageService.remove(projectsName);
  }
}
