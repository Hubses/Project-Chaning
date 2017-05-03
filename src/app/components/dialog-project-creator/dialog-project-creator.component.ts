import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogProjectCreatorComponent {

  @Input() public projectsNames: string[];

  public projectName: string;
  public framework: string;

  public frameworks = [
    { value: 'empty-0', viewValue: 'empty' },
    { value: 'angular2-1', viewValue: 'angular2' },
    { value: 'react-2', viewValue: 'react' },
    { value: 'jquery-3', viewValue: 'jquery' }
  ];

  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>
  ) { }

  public get isValid(): boolean {
    return !this.projectsNames.includes(this.projectName);
  }

  public createProject(projectName: string, framework: string): void {
    if (this.isValid) {
      this.dialogRef.close({ name: projectName, framework });
    }
  }

  public setFramework(framework: string): string {
    this.framework = framework;
    return this.framework;
  }
}
