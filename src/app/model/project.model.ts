import { Observable } from 'rxjs/Observable';

export class Project {

    public static toJson(project: Project): entities.IProject {
        return {
            name: project._name,
            framework: project._framework,
            options: project._options
        };
    }

    public static fromJson() { }

    public static toObservable(project: Project): Observable<entities.IProject> {
        const json = Project.toJson(project);
        return Observable.of(json);
    }

    public constructor(
        private _name: string,
        private _framework: string,
        private _options: string[]) { }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get framework(): string {
        return this.framework;
    }

    public set framework(framework: string) {
        this._framework = framework;
    }

    public get options(): string[] {
        return this._options;
    }

    public addOption(option: string) {
        this._options.push(option);
    }
}
