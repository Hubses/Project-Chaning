import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProjectStorageService } from '../../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  public currentProject: entities.IProject;

  constructor(
    private projectStorageService: ProjectStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => Observable.of(this.projectStorageService.getProject(params['name'])))
      .subscribe((project: entities.IProject) => this.currentProject = project);
  }


  public getFramework(): string {
    return this.currentProject.framework;
  }

  public getName(): string {
    return this.currentProject.name;
  }

}
