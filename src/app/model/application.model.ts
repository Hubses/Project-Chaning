import { User, Project } from '../model';

export class Application {

    public static toJson(application: Application) {
        return {
            user: User.toJson(application.user),
            projects: application.projects
        };
    }
    public static fromJson(data: any): Application {
        const application = new Application(data.user, data.projects);
        return application;
    }

    public constructor(
        public user: User,
        public projects?: entities.IProject[]
    ) {
        if (user === null || user === undefined) {
            throw new Error('user is empty');
        }
    }

}
