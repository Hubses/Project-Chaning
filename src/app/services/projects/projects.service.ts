import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { AuthService } from '../auth';

@Injectable()
export class ProjectsService {

    public constructor(
        private af: AngularFire,
        private authService: AuthService
    ) { }

    public getProjects(userId: string): Observable<entities.IProject[]> {
        return this.af.database.list(`/projects/${userId}`)
            .map(projects => projects.$value !== null ? projects : []);
    }

    public createProject(project: entities.IProject): void {
        let userId = this.authService.getState().uid;
        this.af.database.list(`/projects/${userId}`).push(project);
    }

    public removeProject(project: entities.IProject): void {
        let userId = this.authService.getState().uid;
        this.af.database.list(`/projects/${userId}/${project.$key}`).remove();
    }
}
