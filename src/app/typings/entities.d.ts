declare namespace entities {

    interface IUser {
        id: string;
        name: string;
        photoUrl: string;
    }

    interface IProject {
        name: string;
        framework: string;
        options: string[];
        $key?: string;
    }

    interface IDictionary {
        [propName: string]: string;
    }

    interface IOptions {
        taskruner: string;
        libs: string[];
    }
}
// declare module 'file-saver';
