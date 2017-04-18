import { Injectable } from '@angular/core';

let user: entities.IUser = {
  "userName": "User1",
  "projects": [
    {
      "projectName": "12345",
      "framework": "angular",
      "options": []
    },
    {
      "projectName": "123",
      "framework": "angular2",
      "options": []
    }
  ]
};


@Injectable()
export class UserService {
  public projects: entities.IProject[] = [];
  public emptyProject: entities.IProject;
  constructor() {
    this.emptyProject = {
      "projectName": "",
      "framework": "",
      "options": []
    }
    this.projects = user.projects;
  }

  public get Model(): entities.IUser {
    return user;
  }
  public get userName(): string {
    return user.userName;
  }
  public set userName(value: string) {
    user.userName = value;
  }

  public get projectNames(): string[] {
    return user.projects.map(projects => {
      return projects.projectName;
    })
  }
  public getProject(projectName: string): entities.IProject[] {
    return user.projects.filter(project => project.projectName == projectName)
  }
  public setProjectByName(projectName: string) {
    this.emptyProject.projectName = projectName;
    this.emptyProject.framework = '';
    this.emptyProject.options = [];
    user.projects.push(this.emptyProject);
  }


  // public set project(value: entities.IProject | undefined | null) {
  //   if (value === undefined || value === null) {
  //     value.projectName = 'test';
  //     value.framework = 'angular v4';
  //     value.options = [];
  //   }
  //   user.projects.push(value);

  // }
}