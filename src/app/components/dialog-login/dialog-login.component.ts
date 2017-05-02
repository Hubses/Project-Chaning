import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { UserStorageService } from '../../services';

@Component({
  selector: 'app-dialog-user-name-edit',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<DialogLoginComponent>,
  ) { }

  ngOnInit() {
  }

}
