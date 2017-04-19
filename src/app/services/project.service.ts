import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

const projects: entities.IProject[] = [
  {
    'name': '12345',
    'framework': 'angular',
    'options': []
  },
  {
    'name': '123',
    'framework': 'angular2',
    'options': []
  }
];


@Injectable()
export class ProjectService {

  constructor() { }

  public getProjects(userName: string): Observable<entities.IProject[]> {
    return Observable.of(projects);
  }

  public changeCurrentProject(userName: string, projectName: string): void {
    // need implemets
  }

  public createProject(name: string): void {
    const newProject: entities.IProject = {
      name,
      'framework': 'angular',
      'options': []
    };

    projects.push(newProject);

    Observable.of(newProject);
  }
}
