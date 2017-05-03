import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserStorageService } from '../user-storage/user.storage.service';
import { Project, Application } from '../../model';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ProjectStorageService {

  public projects$: Observable<entities.IProject[]>;

  private projects: entities.IProject[] = [];


  public constructor(
    private userStorageService: UserStorageService,
    private af: AngularFire
  ) {
    // this.projects$ = this.userStorageService.users$.map((users: entities.IDB) => {
    //   if (users) {
    //     return {
    //       projects: users.projects
    //     }
    //   } else {
    //     return null;
    //   }

  }

  public getProjects(id: string): Observable<entities.IProject[]> {
    return this.af.database.list('/users').map((users: entities.IDB[]) => {
      return users.find(user => user.id === id).projects;
    });
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
    // localStorage.setItem(this.KEY, JSON.stringify(this.projects));
    this.projects$.concat(this.projects);
  }
}