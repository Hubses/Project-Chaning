import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
// import { ProjectStorageService, UserStorageService } from "../";
import { Application, Project, User } from '../../model';

@Injectable()
export class AppStorageService {

  public data: Application;
  public data$ = new BehaviorSubject<Application>(this.data);

  private KEY: string = 'applicationStorage__KEY';

  public constructor() {
    this.mock();
    const applicationData = localStorage.getItem(this.KEY);
    if (applicationData !== null) {
      this.data = JSON.parse(applicationData);
    } else {
      throw new Error('storage is empty');
    }
    this.data$.next(this.data);
  }

  private mock() {
    const user: User = new User('123');
    const project1: entities.IProject = new Project('123', 'react');
    const project2: entities.IProject = new Project('1234', 'react');
    const projects: entities.IProject[] = [];
    projects.push(project1, project2);
    const application = new Application(user, projects);
    localStorage.setItem(this.KEY, JSON.stringify(application));
  }
}
