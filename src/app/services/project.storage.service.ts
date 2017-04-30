import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

import { Project } from '../model/project.model';

@Injectable()
export class ProjectStorageService {

  public projects$: BehaviorSubject<entities.IProject[]> = new BehaviorSubject([]);

  private projects: entities.IProject[] = [];
  private KEY = 'ProjectStorage__KEY';

  public constructor() {
    const projects = localStorage.getItem(this.KEY);
    if (projects !== null) {
      this.projects = JSON.parse(projects);
      this.projects$.next(this.projects);
    }
  }

  public find(projectName: string): entities.IProject {
    return this.projects.find(project => projectName === project.name);
  }

  public create(name: string, framework: string): void {
    const newProject = new Project(name, framework);
    this.projects.push(newProject);

    this.updateProjects();
  }

  public remove(projectName: string): void {
    const removableProjectIndex = this.projects.findIndex(project => projectName === project.name);
    this.projects.splice(removableProjectIndex, 1);

    this.updateProjects();
  }

  public getNames(): string[] {
    return this.projects.map(project => project.name);
  }

  private updateProjects(): void {
    localStorage.setItem(this.KEY, JSON.stringify(this.projects));
    this.projects$.next(this.projects);
  }
}
