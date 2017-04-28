import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { ProjectStorageService } from '../../services';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public currentProject: entities.IProject;

  constructor(
    private projectStorageService: ProjectStorageService
  ) {
  }

  ngOnInit() {
    //this.projectStorageService.getProject(this.currentProject.name).subscribe(project => this.currentProject = project);
  }

  public getFramework(): string {
    return this.currentProject.framework;
  }

  public getName(): string {
    return this.currentProject.name;
  }

}
