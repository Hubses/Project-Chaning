import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogNameComponent } from "../dialog-name/dialog-name.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  selectedOption: string;
  constructor(public dialog: MdDialog) {
    this.openDialog();
  }

  ngOnInit() {
  }

  public openDialog() {
    let dialogRef = this.dialog.open(DialogNameComponent);
  }
}
