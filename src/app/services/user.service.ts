import { Injectable } from '@angular/core';

let user: entities.IUser = {
  "userName": "User1",
  "projects": [
    {
      "projectName": "12345",
      "isCurrentProject": true,
      "framework": "angular",
      "options": []
    },
    {
      "projectName": "123",
      "isCurrentProject": false,
      "framework": "angular2",
      "options": []
    }
  ]
};


@Injectable()
export class UserService {
  public projects: entities.IProject[] = [];
  public emptyProject: entities.IProject;
  private currentProj: entities.IProject;
  constructor() {
    this.emptyProject = {
      "projectName": "",
      "isCurrentProject": false,
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

  public get currentProject() {
    return user.projects.find(project => project.isCurrentProject == true);
  }

  public changeCurrentProject(projectName: string) {
    let currentProjectName: string;
    let currentProject = user.projects.find(project => project.isCurrentProject == true);

  }

  public getProject(projectName: string): entities.IProject {
    let projects = user.projects.find(project => project.projectName == projectName);

    return projects;
  }
  public setProjectByName(projectName: string) {
    this.emptyProject.projectName = projectName;
    this.emptyProject.isCurrentProject = false;
    this.emptyProject.framework = '';
    this.emptyProject.options = [];
    user.projects.push(this.emptyProject);
  }
}