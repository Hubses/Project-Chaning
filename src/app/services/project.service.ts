import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../model/project.model';

@Injectable()
export class ProjectService {

  private _currentProject: entities.IProject;
  private projects: entities.IProject[] = [];

  public constructor() {
    this.mock();
  }

  public getProjects(userName?: string): Observable<entities.IProject[]> {
    return Observable.of(this.projects);
  }

  public createProject(name: string): void {
    const project = new Project(name);
    this.projects.push(project);
  }

  public getNames(): string[] {
    return this.projects.map(project => {
      return project.name;
    });
  }

  public setCurrentProject(projectName: string): entities.IProject {
    this._currentProject = this.projects.find(project => project.name === projectName);
    return this._currentProject;
  }

  public get currentProject() {
    if (this._currentProject === null || this._currentProject === undefined) {
      this._currentProject = this.projects[0];
    }
    return this._currentProject;
  }

  public mock(): void {
    const project1 = new Project('123');
    const project2 = new Project('1234');
    const project3 = new Project('12345');
    this.projects.push(project1, project2, project3);
  }
}
