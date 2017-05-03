import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {

  @Input() public user: entities.IUser;

  @Output() public onLogout: EventEmitter<void> = new EventEmitter<void>();

  public logout(): void {
    this.onLogout.emit();
  }
}
