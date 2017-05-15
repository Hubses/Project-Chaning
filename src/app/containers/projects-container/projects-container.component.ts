import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { ProjectsService, ProjectGeneratorService } from '../../services';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.css']
})
export class ProjectsContainerComponent implements OnInit {

  public projects$: Observable<entities.IProject[]>;

  @Output() public onViewDetailProject: EventEmitter<entities.IProject> = new EventEmitter();

  private snackBarOpenedSubscribtion: Subscription;
  private snackBarDississedSubscribtion: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private projectGeneratorService: ProjectGeneratorService,
    private snackBar: MdSnackBar,
  ) { }

  public ngOnInit(): void {
    this.projects$ = this.projectsService.projects$;
  }

  public removeProject(project: entities.IProject): void {
    this.projectsService.removeProject(project);
  }

  public viewDetail(project: entities.IProject): void {
    this.onViewDetailProject.emit(project);
    this.router.navigate(['/projects', project.$key]);
  }

  public generateProject(project: entities.IProject): void {

    const snackbarRef = this.snackBar.open('generating, please wait', 'OK', {
      duration: 3000
    });
    this.snackBarOpenedSubscribtion = snackbarRef.afterOpened().subscribe(() => {
      if (project.framework === 'angular2') {
        this.projectGeneratorService.generateAngular();
      }
      if (project.framework === 'jquery') {
        this.projectGeneratorService.generateJquery();
      }

      if (project.framework === 'react') {
        this.projectGeneratorService.generateReact();
      }

      this.snackBarOpenedSubscribtion.unsubscribe();
    });
    this.snackBarDississedSubscribtion = snackbarRef.afterDismissed().subscribe(() => {
      this.snackBarDississedSubscribtion.unsubscribe();
    });
  }
}
