import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Project } from '../model/project.model';

@Injectable()
export class ProjectStorageService {

  private projects: entities.IProject[] = [];
  private KEY = 'ProjectStorage__KEY';
  public observableProjects: Observable<entities.IProject[]> = Observable.of(this.projects);

  public constructor() {
  }

  public getProjects(): Observable<entities.IProject[]> {
    const projects = localStorage.getItem(this.KEY);
    if (projects !== null) {

      this.projects = JSON.parse(projects);
      this.observableProjects = Observable.of(this.projects);
      return this.observableProjects;

    } else {

      this.projects.push(new Project('test', '12345'));
      localStorage.setItem(this.KEY, JSON.stringify(this.projects));
      this.projects = JSON.parse(projects);
      this.observableProjects = Observable.of(this.projects);
      return this.observableProjects;

    }
  }

  public getProject(projectName: string): entities.IProject {
    const findedProject = this.projects.find(project => projectName === project.name);
    return findedProject;
  }


  public createProject(name: string, framework: string): void {
    const project = new Project(name, framework);
    this.projects.push(project);
    localStorage.setItem(this.KEY, JSON.stringify(this.projects));
  }

  public getNames(): string[] {
    return this.projects.map(project => {
      return project.name;
    });
  }

  public removeProject(projectName: string): void {
    const removableProjectIndex = this.projects.findIndex(project => projectName === project.name);
    this.projects.slice(removableProjectIndex);
    this.observableProjects = Observable.of(this.projects);
    localStorage.setItem(this.KEY, JSON.stringify(this.projects));
  }
}
