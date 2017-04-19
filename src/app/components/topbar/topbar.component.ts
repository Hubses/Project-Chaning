import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogUserNameEditComponent } from '../dialog-user-name-edit/dialog-user-name-edit.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  constructor(
    private userService: UserService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }
  public openDialog() {
    let dialogRef = this.dialog.open(DialogUserNameEditComponent);
  }
  
}
