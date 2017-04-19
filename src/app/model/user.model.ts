import { Project } from "./project.model";

export class User {
    private projects: any;
    constructor(
        private name?: string
    ) {
        if (this.name === null || this.name === '') {
            this.name === 'User';
        }

        this.projects = [{
            projectName: '13',
            isCurrentProject: false,
            framework: 'angular',
            options: ['123', '145']
        },
        {
            projectName: '13',
            isCurrentProject: false,
            framework: 'angular',
            options: ['123', '145']
        }]
    }
    public get Name() {
        return this.name;
    }
    public set Name(value: string) {
        this.name = value;
    }
    public set Project(project: entities.IProject) {
        this.projects.push(project);
    }

    public get Projects(): entities.IProject[] {
        return this.projects;
    }

    // public static ToJson(user: User): any {
    //     return {
    //         userName: user.name,
    //         projects: user.projects.map(project => {
    //             return {
    //                 projectName: project.projectName,
    //                 framework: project.framework,
    //                 options: project.options
    //             }
    //         })
    //     }
    // }
    public static FromJson(json: entities.IUser): User {
        let user: User;
        if (json.userName !== '') {
            user = new User(json.userName);
        }
        else {
            user = new User();
        }
        user.projects = json.projects;

        return user;
    }

}