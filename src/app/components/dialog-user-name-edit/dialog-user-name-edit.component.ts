import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { UserService } from "../../services";

@Component({
  selector: 'app-dialog-user-name-edit',
  templateUrl: './dialog-user-name-edit.component.html',
  styleUrls: ['./dialog-user-name-edit.component.css']
})
export class DialogUserNameEditComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DialogUserNameEditComponent>,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  public editUserName(value: string) {
    if (this.userService.userName === value) {
      alert('err');
    }
    else {
      this.userService.userName = value;
      console.log(this.userService.userName);
      this.dialogRef.close();

    }
  }

}
