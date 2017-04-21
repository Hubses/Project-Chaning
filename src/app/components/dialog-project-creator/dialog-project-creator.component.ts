import { Component, Input, Output } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css']
})
export class DialogProjectCreatorComponent {

  public projectName: string;
  public projectsNames: string[];
  private _model: entities.IModel = {
    projectName: this.projectName,
    isValid: false
  };

  public constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>,
  ) {
    console.log('test');
  }


  public get model(): Observable<entities.IModel> {
    return Observable.of(this._model);
  }

  public get valid(): boolean {
    if (this.projectsNames.includes(this.projectName)) {
      this._model.isValid = false;
      return false;
    } else {
      this._model.isValid = true;
      return true;
    }
  }

  public createProject(projectName: string): void {
    this.projectName = projectName;

    if (this.valid) {
      console.log('valid');
      this.dialogRef.close();
    } else {
      console.log('not valid');
    }
  }
}
