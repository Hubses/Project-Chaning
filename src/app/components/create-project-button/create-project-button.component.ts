import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from '../../components';

@Component({
  selector: 'app-create-project-button',
  templateUrl: './create-project-button.component.html',
  styleUrls: ['./create-project-button.component.css']
})
export class CreateProjectButtonComponent {

  @Input() public projects: entities.IProject[];

  constructor(
    public dialog: MdDialog,
  ) { }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogProjectCreatorComponent);
    console.log(dialogRef.componentInstance.projectsNames);
  }
}
