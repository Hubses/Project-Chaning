import { Injectable } from '@angular/core';
import { User } from "../model/user.model";
import { Project } from "../model/project.model";
import { ProjectService } from "./project.service";

@Injectable()
export class UserService {
  private user: User;
  private project;
  constructor(
    // private projectService: ProjectService
  ) {
    // this.project = new Project();
    this.user = new User();
  }

  public set User(user: User) {
    this.user = user;
  }
  public get User(): User {
    return this.user;
  }

  public addProject(project) {
    this.user.Project = project;
  }

  public getProjectNames(): string[] {
    return this.user.Projects.map(proj => {
      return proj.projectName;
    })
  }

}
