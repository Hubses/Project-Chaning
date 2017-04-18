declare namespace entities {
    export interface IProject {
        projectName: string;
        framework: string;
        options: string[];
    }
    export interface IUser {
        name: string;
        projects: IProject[];
    }
}