import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { ProjectStorageService } from '../../services';
import { Frameworks } from '../../classes';

@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogProjectCreatorComponent {

  public projectName: string;
  public projectsNames: string[];

  @Input() public framework: string;
  public frameworks = [
    { value: 'empty-0', viewValue: 'empty' },
    { value: 'angular2-1', viewValue: 'angular2' },
    { value: 'react-2', viewValue: 'react' },
    { value: 'jquery-3', viewValue: 'jquery' }
  ];

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

  public setFramework(framework: string): string {
    this.framework = framework;
    return this.framework;
  }
}
