import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from '../../components';

@Component({
  selector: 'app-create-project-button',
  templateUrl: './create-project-button.component.html',
  styleUrls: ['./create-project-button.component.css']
})
export class CreateProjectButtonComponent {

  @Input() public projects: entities.IProject[];

  @Output() public onProjectNameCreated: EventEmitter<string> = new EventEmitter<string>();

  public user: entities.IUser;

  constructor(
    public dialog: MdDialog,
  ) { }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogProjectCreatorComponent);
    dialogRef.componentInstance.projectsNames = this.projects.map(project => project.name);
    dialogRef.afterClosed().subscribe(() => {
      this.onProjectNameCreated.emit(dialogRef.componentInstance.projectName);
    });
  }
}
