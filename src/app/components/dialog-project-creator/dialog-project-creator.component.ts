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
  public frameworks: string[];
  public framework: string;

  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>
  ) { }

  public createProject(projectName: string, framework: string): void {
    this.dialogRef.close({ name: projectName, framework, options: { taskrunner: '', libs: [''] } });
  }

  public setFramework(framework: string): string {
    this.framework = framework;
    return this.framework;
  }
}
