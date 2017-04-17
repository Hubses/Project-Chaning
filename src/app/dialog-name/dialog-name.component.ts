import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ChainingService } from "../services/chaining.service";

@Component({
  selector: 'app-dialog-name',
  templateUrl: './dialog-name.component.html',
  styleUrls: ['./dialog-name.component.css']
})
export class DialogNameComponent implements OnInit {
  public projectName: string;
  constructor(
    public dialogRef: MdDialogRef<DialogNameComponent>,
    private chaining: ChainingService
  ) {
  }

  ngOnInit() {
  }

  public createProject(projectName: string) {
    if (projectName === '') {
      
    }
    else {
      console.log('done ', projectName);
      this.chaining.projectName = projectName;
      this.dialogRef.close();
    }

  }
}
