import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { AuthService } from '../auth';



@Injectable()
export class ProjectsService {

    public projects$: Observable<entities.IProject[]>;
    public frameworks$: Observable<string[]>;
    public taskRunners$: Observable<string[]>;
    public libs$: Observable<string[]>;

    public constructor(
        private af: AngularFire,
        private authService: AuthService
    ) {
        this.projects$ = this.authService.user$.switchMap(user => this.getProjects(user.id));
        this.frameworks$ = this.getFrameworks();
        this.taskRunners$ = this.getTaskrunners();
        this.libs$ = this.getLibs();
    }

    public getProjects(userId: string): Observable<entities.IProject[]> {
        return this.af.database.list(`/projects/${userId}`)
            .map(projects => projects.$value !== null ? projects : []);
    }

    public getProject(userId: string, projectKey: string): Observable<entities.IProject> {
        return this.af.database.object(`projects/${userId}/${projectKey}`)
            .map(project => project.$value !== null ? project : {});
    }

    public getFrameworks(): Observable<string[]> {
        return this.af.database.list(`frameworks`)
            .map(frameworks => frameworks.$value !== null ? frameworks.map(f => f.$value) : []);
    }

    public getTaskrunners(): Observable<string[]> {
        return this.af.database.list(`taskrunner`)
            .map(taskrunner => taskrunner.$value !== null ? taskrunner.map(t => t.$value) : []);
    }

    public getLibs(): Observable<string[]> {
        return this.af.database.list(`libs`)
            .map(libs => libs.$value !== null ? libs.map(l => l.$value) : []);
    }

    public createProject(project: entities.IProject): void {
        let userId = this.authService.getState().uid;
        this.af.database.list(`/projects/${userId}`).push(project);
    }

    public updateProject(project: entities.IProject): void {
        let userId = this.authService.getState().uid;
        let newProject: entities.IProject;

        if (project.options) {
            newProject = {
                framework: project.framework,
                name: project.name,
                options: {
                    taskrunner: project.options.taskrunner,
                    libs: project.options.libs
                }
            };
        } else {
            newProject = {
                framework: project.framework,
                name: project.name
            };
        }

        this.af.database.object(`/projects/${userId}/${project.$key}/`).update(newProject);
    }

    public removeProject(project: entities.IProject): void {
        let userId = this.authService.getState().uid;
        this.af.database.list(`/projects/${userId}/${project.$key}`).remove();
    }
}
