import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import { ProjectService } from '../../services';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public currentProject;

  constructor(
    private projectService: ProjectService
  ) {
  }

  ngOnInit() {
  }

  public getFramework(): string {
    return this.projectService.currentProject.framework;
  }

  public getCurrentName(): string {
    return this.projectService.currentProject.name;
  }

}
