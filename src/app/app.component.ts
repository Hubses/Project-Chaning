import { Component, OnInit, Output, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { UserStorageService, ProjectStorageService } from './services';

import { User } from './model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from './components';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public currentProject: entities.IProject;
  public projects$: Observable<entities.IProject[]>;

  public constructor(
    private userStorageService: UserStorageService,
    private projectStorageService: ProjectStorageService,
    private router: Router,
    public dialog: MdDialog
  ) { }

  public ngOnInit(): void {
    this.projects$ = this.projectStorageService.projects$;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogProjectCreatorComponent);
  }

  public setCurrentProject(projectName: string): entities.IProject {
    this.currentProject = this.projectStorageService.find(projectName);
    this.router.navigate(['/project', this.currentProject.name]);
    return this.currentProject;
  }
}
