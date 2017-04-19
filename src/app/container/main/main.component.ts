import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogProjectCreatorComponent } from "../../components";
import { UserService } from "../../services/";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public user: entities.IUser;

  constructor(
    public dialog: MdDialog,
    private userService: UserService
  ) {
    this.user = this.userService.Model;
  }

  ngOnInit() {
  }

  public openDialog() {
    let dialogRef = this.dialog.open(DialogProjectCreatorComponent);
  }
}
