declare namespace entities {
    interface IProject {
        name: string;
        framework: string;
        options: string[];
    }
    interface IUser {
        name: string;
    }
    interface IModel {
        projectName: string;
        isValid: boolean;
    }
}