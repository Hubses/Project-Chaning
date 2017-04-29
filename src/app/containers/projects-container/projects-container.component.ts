import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import { ProjectStorageService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar, MdSnackBarRef, MdSnackBarConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-default-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsContainerComponent implements OnInit {

  // public projects: entities.IProject[];
  public observableProjects: Observable<entities.IProject[]>;

  constructor(
    private snackBar: MdSnackBar,
    private projectStorageService: ProjectStorageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.observableProjects = this.projectStorageService.getProjects();
  }

  public viewDetail(projectName: string): entities.IProject {
    const currentProject = this.projectStorageService.getProject(projectName);
    this.router.navigate(['/project', currentProject.name]);
    return currentProject;
  }

  public generate(projectName: string) {
    const currentProject = this.projectStorageService.getProject(projectName);
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
