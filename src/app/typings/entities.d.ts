declare namespace entities {
    export interface IProject {
        projectName: string;
        isCurrentProject: boolean;
        framework: string;
        options: string[];
    }
    export interface IUser {
        userName: string;
        projects: IProject[];
    }
}