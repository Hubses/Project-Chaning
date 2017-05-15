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
  public frameworks: string[] = [];
  public selectedFramework: string;

  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>
  ) { }

  public get isValid(): boolean {
    return !this.projectsNames.includes(this.projectName);
  }

  public createProject(projectName: string, framework: string): void {
    if (this.isValid) {
      this.dialogRef.close({ name: projectName, framework, options: { taskrunner: '', libs: '' } });
    }
  }

  public setFramework(framework: string): string {
    this.selectedFramework = framework;
    return this.selectedFramework;
  }
}
