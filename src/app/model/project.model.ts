import { Observable } from 'rxjs/Observable';
import { ExtendedString } from '../classes';

export class Project {

    public static toJson(project: Project): entities.IProject {
        return {
            name: project._name,
            framework: project._framework,
            options: project._options
        };
    }

    public static fromJson(json: entities.IProject): Project {
        const project = new Project(json.name);
        project._framework = json.framework;
        project._options = json.options;
        return project;
    }

    public static toObservable(project: entities.IProject): Observable<entities.IProject> {
        return Observable.of(project);
    }

    public constructor(
        private _name: string,
        private _framework?: string,
        private _options?: string[]
    ) {
        if (ExtendedString.isNullorEmpty(_framework)) {
            _framework = 'some framework';
        }
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get framework(): string {
        return this._framework;
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

    public removeOption(option: string) {
        const findItemIndex = this._options.findIndex(optioon => optioon === option);
        return this.options.slice(findItemIndex, 1);
    }
}
