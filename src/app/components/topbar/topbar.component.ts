import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { DialogLoginComponent } from '../';
import { UserStorageService } from '../../services';
import { Observable } from 'rxjs/Observable';

import { User } from '../../model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() public userName: string;

  public user$: Observable<User>;

  public constructor(
    private userStorageService: UserStorageService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
    this.user$ = this.userStorageService.user$;
  }

  public openDialog() {
    const dialogRef = this.dialog.open(DialogLoginComponent);
  }

}
