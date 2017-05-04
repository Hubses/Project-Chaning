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
  @Output() public onViewDetail: EventEmitter<string> = new EventEmitter();
  @Output() public onGenerateProject: EventEmitter<entities.IProject> = new EventEmitter();

  public urls: entities.IDictionary = {
    angular2: 'https://angular.io/resources/images/logos/angular/angular.svg',
    react: 'https://react.parts/react-logo.svg',
    jquery: 'http://www.css-tricks.ru/content/data/6/jquery-icon.png'
  };

  public removeProject(project: entities.IProject): void {
    this.onRemoveProject.emit(project);
  }

  public viewDetail(projectName: string): void {
    this.onViewDetail.emit(projectName);
  }

  public generateProject(project: entities.IProject): void {
    this.onGenerateProject.emit(project);
  }

}
