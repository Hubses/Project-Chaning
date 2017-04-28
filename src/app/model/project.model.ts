import { Observable } from 'rxjs/Observable';
import { StringUtil } from '../classes';

export class Project {

    public static toJson(project: Project): entities.IProject {
        return {
            name: project.name,
            framework: project.framework,
            options: project._options
        };
    }

    public static fromJson(json: any): Project {
        const project = new Project(json.name, json.framework);
        project._options = json.options;
        return project;
    }

    public static toObservable(project: entities.IProject): Observable<entities.IProject> {
        return Observable.of(project);
    }

    public constructor(
        public name: string,
        public framework: string,
        private _options?: string[]
    ) {
        if (StringUtil.isNullorEmpty(name)) {
            throw new Error('name is reqired');
        }
        if (StringUtil.isNullorEmpty(framework)) {
            throw new Error('Framework is reqired');
        }
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
