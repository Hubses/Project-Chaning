import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogUserNameEditComponent } from '../dialog-user-name-edit/dialog-user-name-edit.component';
import { UserStorageService } from '../../services';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public observableUser: Observable<any>;

  public constructor(
    private userStorageService: UserStorageService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.observableUser = this.userStorageService.getUser();
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogUserNameEditComponent);
  }

}
