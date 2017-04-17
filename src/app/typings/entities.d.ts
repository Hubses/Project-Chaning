declare namespace entities {
    export interface IChaining {
        projectName: string;
        framework: string;
        options: string[];
    }
    export interface IUser {
        name: string;
        projects: IChaining[]
    }
}