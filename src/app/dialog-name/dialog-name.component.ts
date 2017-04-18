import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ProjectService, UserService } from "../services";
import { Project } from "../model/project.model";

@Component({
  selector: 'app-dialog-name',
  templateUrl: './dialog-name.component.html',
  styleUrls: ['./dialog-name.component.css']
})
export class DialogNameComponent implements OnInit {
  public projectName: string;
  constructor(
    public dialogRef: MdDialogRef<DialogNameComponent>,
    private projectService: ProjectService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  public createProject(projectName: string) {
    let project = new Project();
    if (projectName !== '') {
      console.log('done ', projectName);
      project.ProjectName = this.projectService.AddProjectName(projectName);
      this.userService.addProject(project);

      this.dialogRef.close();
    }
  }
}
