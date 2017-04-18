import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from "../../components";

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
    let dialogRef = this.dialog.open(DialogProjectCreatorComponent);
  }
}
