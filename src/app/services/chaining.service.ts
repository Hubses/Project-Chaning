import { Injectable } from '@angular/core';
import { Chaining } from "../model/chaining.model";
@Injectable()
export class ChainingService {
  public projectName: string;
  private chaining: Chaining;

  constructor() {
    this.chaining = new Chaining();
  }

  public AddProjectName() {
    let chaining = localStorage.getItem('Chaining');
    if (chaining !== null) {
      console.log(chaining);
    }
    this.chaining.ProjectName = this.projectName;
  }

}
