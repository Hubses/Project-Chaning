declare namespace entities {
    interface IProject {
        name: string;
        framework: string;
        options: string[];
    }
    interface IOptions {
        taskruner: string;
        libs: string[];
    }
    interface IUser {
        id: string;
        name: string;
    }
}
