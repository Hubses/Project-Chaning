export class Chaining {
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
    // public static ToJson(chaining: Chaining): entities.IChaining {
    //     return {
    //         projectName: chaining.projectName,
    //         framework: chaining.framework,
    //         options: chaining.options
    //     }
    // }
    // public static FromJson(json: entities.IChaining): Chaining {
    //     let chaining: Chaining = new Chaining();
    //     chaining.projectName = json.projectName;
    //     chaining.framework = json.framework;
    //     chaining.options = json.options;
    //     return chaining;
    // }
}
