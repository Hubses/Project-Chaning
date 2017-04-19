import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css']
})
export class DialogProjectCreatorComponent {

  public projectName: string;
  public projectsNames: string[];

  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>,
  ) { }

  public createProject(projectName: string): void {
    this.projectName = projectName;
    this.dialogRef.close();
  }
}
