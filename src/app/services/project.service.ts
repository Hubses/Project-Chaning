import { Injectable } from '@angular/core';
import { Project } from "../model/project.model";
@Injectable()
export class ProjectService {
  public projectName: string;
  private chaining: Project;

  constructor() {
    this.chaining = new Project();
  }

  public AddProjectName(projectName: string): string {
    this.chaining.ProjectName = projectName;
    return this.chaining.ProjectName;
    // localStorage.setItem('Chaining', JSON.stringify(Chaining.ToJson(this.chaining)));
  }
  public getProjectName() {
    return this.chaining.ProjectName;
  }
}
