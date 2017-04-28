import { Component, Input, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ProjectStorageService } from '../../services';

@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css']
})
export class DialogProjectCreatorComponent {

  public projectName: string;
  public projectsNames: string[];

  public framework: string;


  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>,
    private projectStorageService: ProjectStorageService
  ) {
    this.projectsNames = this.projectStorageService.getNames();
  }


  public get valid(): boolean {
    if (this.projectsNames.includes(this.projectName)) {
      return false;
    } else {
      return true;
    }
  }

  public createProject(projectName: string, framework: string): void {
    if (this.valid) {

      this.projectStorageService.createProject(projectName, framework);
      console.log('valid');
      this.dialogRef.close();

    } else {
      console.log('not valid');
    }
  }
}
