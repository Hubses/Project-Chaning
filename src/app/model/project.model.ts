export class Project {
    private projectName: string;
    private framework: string;
    private options: string[] = [];
    constructor() {

    }
    public set ProjectName(value: string) {
        this.projectName = value;
    }
    public get ProjectName(): string {
        return this.projectName;
    }
    public static ToJson(project: Project): entities.IProject {
        return {
            projectName: project.projectName,
            framework: project.framework,
            options: project.options
        }
    }
    public static FromJson(json: entities.IProject): Project {
        let project: Project = new Project();
        project.projectName = json.projectName;
        project.framework = json.framework;
        project.options = json.options;
        return project;
    }
}
