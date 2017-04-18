import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogNameComponent } from "../dialog-name/dialog-name.component";
import { ProjectService } from "../services/project.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    public dialog: MdDialog
  ) {

  }

  ngOnInit() {
  }

  public openDialog() {
    let dialogRef = this.dialog.open(DialogNameComponent);
  }
}
