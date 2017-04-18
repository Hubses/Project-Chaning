// import { Injectable } from '@angular/core';
// import { User } from "../model/user.model";
// import { Project } from "../model/project.model";
// import { ProjectService } from "./project.service";

// @Injectable()
// export class UserService {
//   private user: User;
//   private project;
//   constructor(

//   ) {

//     this.user = new User();
//   }

//   public set User(user: User) {
//     this.user = user;
//   }
//   public get User(): User {
//     return this.user;
//   }

//   public addProject(project) {
//     this.user.Project = project;
//   }

//   public getProjectNames(): string[] {
//     return this.user.Projects.map(proj => {
//       return proj.projectName;
//     })
//   }

// }
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
  constructor() { }

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


  public get projects() {
    return user.projects;
  }
  public set project(value: entities.IProject | undefined | null) {
    if (value === undefined || value === null) {
      value.projectName = 'test';
      value.framework = 'angular v4';
      value.options = [];
    }
    user.projects.push(value);

  }
}