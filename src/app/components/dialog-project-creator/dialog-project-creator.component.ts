import { Component, Input, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../../services/project.service';

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
    private projectService: ProjectService
  ) {
    console.log('test');
    this.projectsNames = this.projectService.getNames();
  }


  public get valid(): boolean {
    if (this.projectsNames.includes(this.projectName)) {
      return false;
    } else {
      return true;
    }
  }

  public createProject(projectName: string): void {

    if (this.valid) {
      this.projectService.createProject(projectName);
      console.log('valid');
      this.dialogRef.close();
    } else {
      console.log('not valid');
    }
  }
}
