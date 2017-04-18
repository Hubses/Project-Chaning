import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { UserService } from "../../services";


@Component({
  selector: 'app-dialog-project-creator',
  templateUrl: './dialog-project-creator.component.html',
  styleUrls: ['./dialog-project-creator.component.css']
})
export class DialogProjectCreatorComponent implements OnInit {
  public projectName: string;
  constructor(
    public dialogRef: MdDialogRef<DialogProjectCreatorComponent>,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

  public createProject(projectName: string) {
    if (projectName !== '') {
      console.log('done ', projectName);
      this.userService.setProjectByName(projectName);
      this.dialogRef.close();
    }
  }
}
