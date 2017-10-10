import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsListComponent {

  @Input() public projects: entities.IProject[];
  @Output() public onRemoveProject: EventEmitter<entities.IProject> = new EventEmitter();
  @Output() public onViewDetail: EventEmitter<entities.IProject> = new EventEmitter();
  @Output() public onGenerateProject: EventEmitter<entities.IProject> = new EventEmitter();

  public urls: entities.IDictionary = {
    angular2: '../../../assets/angular-logo.svg ',
    react: '../../../assets/react-logo.svg',
    jquery: '../../../assets/jquery-icon.png',
    none: '../../../assets/none-logo.png'
  };

  public removeProject(project: entities.IProject): void {
    this.onRemoveProject.emit(project);
  }

  public viewDetail(project: entities.IProject): void {
    this.onViewDetail.emit(project);
  }

  public generateProject(project: entities.IProject): void {
    this.onGenerateProject.emit(project);
  }

}
