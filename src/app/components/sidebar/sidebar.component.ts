import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Application } from 'app/model';
import { DialogProjectCreatorComponent } from 'app/components';
import { MdDialog } from '@angular/material';
import { ProjectStorageService } from 'app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
    encapsulation: ViewEncapsulation.None,

})
export class SidebarComponent implements OnInit {


  public currentProject: entities.IProject;
  public projects$: Observable<Application>;

  constructor(
    private router: Router,
    private dialog: MdDialog,
    private projectStorageService: ProjectStorageService
  ) { }

  ngOnInit() {
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
