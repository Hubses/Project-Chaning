import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../model/project.model';

var projects = [{
  'name': '123',
  'framework': 'angular'
},
{
  'name': '123',
  'framework': 'angular'
}]

@Injectable()
export class ProjectStorageService {

  private projects: entities.IProject[] = [];

  private KEY = 'ProjectStorage__KEY';

  public constructor() {
  }

  public getProjects(): Observable<entities.IProject[]> {
    let projects = localStorage.getItem(this.KEY);
    if (projects !== null) {
      this.projects = JSON.parse(projects);
      return Observable.of(JSON.parse(projects));

    } else {

      this.projects.push(new Project('test', '12345'));
      localStorage.setItem(this.KEY, JSON.stringify(this.projects));
      this.projects = JSON.parse(projects);
      return Observable.of(JSON.parse(projects));

    }
  }

  public getProject(projectName: string): entities.IProject {
    const findedProject = this.projects.find(project => projectName === project.name);
    return findedProject;
  }


  public createProject(name: string, framework: string): void {
    const project = new Project(name, framework);
    this.projects.push(project);
  }

  public getNames(): string[] {
    return this.projects.map(project => {
      return project.name;
    });
  }
}
