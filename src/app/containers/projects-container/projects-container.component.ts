import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import { ProjectStorageService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarRef, MdSnackBarConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { Application } from "../../model";

@Component({
  selector: 'app-default-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnInit {

  public projects$: Observable<Application>;

  public urls = {
    angular2: 'https://angular.io/resources/images/logos/angular/angular.svg',
    react: 'https://react.parts/react-logo.svg',
    jquery: 'http://www.css-tricks.ru/content/data/6/jquery-icon.png'
  };

  constructor(
    private snackBar: MdSnackBar,
    private projectStorageService: ProjectStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    //this.projects$ = this.projectStorageService.projects$;
  }

  public viewDetail(projectName: string): entities.IProject {
    const currentProject = this.projectStorageService.find(projectName);
    this.router.navigate(['/project', currentProject.name]);
    return currentProject;
  }

  public generateProject(projectName: string) {

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
