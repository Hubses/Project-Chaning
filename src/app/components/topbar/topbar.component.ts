import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input() public user: entities.IUser;

  @Output() public onLogout: EventEmitter<void> = new EventEmitter<void>();

  public constructor(

  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.user);
  }

  logout() {
    this.onLogout.emit();
  }
}
