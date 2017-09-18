import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { ProjectsService, AuthService } from '../../services';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {


  public project: entities.IProject;
  public frameworks: string[];
  public libs: string[];
  public taskrunners: string[];

  private projectSubscription: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private authService: AuthService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    this.projectSubscription = this.route.params
      .switchMap((params: Params) => this.projectsService.getProject(this.authService.getState().uid, params['name']))
      .combineLatest(this.projectsService.frameworks$, this.projectsService.libs$, this.projectsService.taskRunners$)
      .subscribe(([project, frameworks, libs, taskrunners]) => {
        this.project = project;
        this.frameworks = frameworks;
        this.libs = libs;
        this.taskrunners = taskrunners;
      });
  }

  public ngOnDestroy(): void {
    this.projectSubscription.unsubscribe();
  }

  public updateProject(project: entities.IProject): void {
    this.projectsService.updateProject(project);
    this.router.navigate(['projects']);
  }
}
