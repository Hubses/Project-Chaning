import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AuthService, ProjectsService } from '../../services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-container',
  templateUrl: './app-container.html',
  styleUrls: ['./app-container.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppContainer implements OnInit {

  public user$: Observable<entities.IUser>;
  public projects$: Observable<entities.IProject[]>;
  public frameworks$: Observable<string[]>;

  public constructor(
    private authService: AuthService,
    private projectsService: ProjectsService,
  ) { }

  public ngOnInit(): void {
    this.user$ = this.authService.user$;
    this.projects$ = this.projectsService.projects$;
    this.frameworks$ = this.projectsService.frameworks$;
  }

  public logout(): void {
    this.authService.logout();
  }

  public viewDetail(project: entities.IProject): void {
    this.projectsService.getProject(this.authService.getState().uid, project.$key);
  }
  public createProject(project: entities.IProject): void {
    this.projectsService.createProject(project);
  }
}
