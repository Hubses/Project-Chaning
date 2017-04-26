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

  public name: string;

  public constructor(
    private userService: UserService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.userService.getUser().subscribe(user => this.name = user.name);
  }

  public get user(): any {
    return this.name;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogUserNameEditComponent);
  }

}
