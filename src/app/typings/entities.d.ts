declare namespace entities {

    interface IUser {
        id: string;
        name: string;
        photoUrl: string;
    }

    interface IProject {
        name: string;
        framework: string;
        taskrunner: string;
        options?: string[];
        $key?: string;
    }

    interface IDictionary {
        [propName: string]: string;
    }
    interface IOptions {
        taskrunner: string;
        libs: string[];
    }
    interface ITaskRunner {
        name: string;
        $key?: string;
    }
    interface ILib {
        name: string;
        $key?: string;
    }
    interface IFramework {
        name: string;
        $key?: string;
    }
    interface IDictionaryExtention {
        [extention: string]: string;
    }
    interface IDictionaryLib {
        [name: string]: string;
    }
}
// declare module 'file-saver';
