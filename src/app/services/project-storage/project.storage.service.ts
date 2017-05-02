import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { AppStorageService } from '../app-storage/app-storage.service';
import { Project, Application } from '../../model';

@Injectable()
export class ProjectStorageService {

  public projects$: Observable<Application>;

  private projects: entities.IProject[] = [];
  private KEY = 'ProjectStorage__KEY';

  public constructor(
    private appStorageService: AppStorageService
  ) {
    this.projects$ = this.appStorageService.data$.find(application => this.projects === application.projects);
    console.log(this.projects$);
    // const projects = localStorage.getItem(this.KEY);
    // if (projects !== null) {
    //   this.projects = JSON.parse(projects);
    //   this.projects$.next(this.projects);
    // }
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
    this.projects$.concat(this.projects);
  }
}
