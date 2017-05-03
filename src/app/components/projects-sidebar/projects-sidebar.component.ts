import { Component, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from 'app/components';

@Component({
  selector: 'projects-sidebar',
  templateUrl: './projects-sidebar.component.html',
  styleUrls: ['./projects-sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsSidebarComponent {

  @Input() public projects: entities.IProject[];

  @Output() public onOpenProject: EventEmitter<string> = new EventEmitter();
  @Output() public onCreateProject: EventEmitter<entities.IProject> = new EventEmitter();

  constructor(
    private dialog: MdDialog
  ) { }

  public openDialog(): void {
    let dialogRef = this.dialog.open(DialogProjectCreatorComponent);

    dialogRef.componentInstance.projectsNames = this.projects.map(project => project.name);

    let closeDialogSunscription = dialogRef.afterClosed().subscribe(result => {
      this.onCreateProject.emit(result);
      closeDialogSunscription.unsubscribe();
    });
  }

  public openProject(projectName: string): void {
    this.onOpenProject.emit(projectName);
  }
}
