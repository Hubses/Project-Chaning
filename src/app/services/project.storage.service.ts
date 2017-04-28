import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../model/project.model';

@Injectable()
export class ProjectStorageService {

  private projects: entities.IProject[] = [];

  private KEY = 'ProjectStorage__KEY';

  public constructor() {
  }

  public getProjects(): Observable<entities.IProject> {
    const stringProjects = localStorage.getItem(this.KEY);
    const projects: Project = Project.fromJson(stringProjects);
    return Observable.of(projects);
  }

  public getProject(userName: string): Observable<entities.IProject> {
    const project = localStorage.getItem(userName);
    if (project !== null) {
      return Observable.of(Project.fromJson(JSON.parse(project)));
    } else {
      localStorage.setItem(this.KEY, JSON.stringify(new Project('test', '1234567890')));
      return;
    }
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
