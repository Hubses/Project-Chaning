export class Option {

    public taskRunner: string;

    private _libs: Map<string, string>[] = [];

    public constructor() { }

    public get libs(): Map<string, string>[] {
        return this._libs;
    }
    public addLib(lib: Map<string, string>): void {
        this._libs.push(lib);
    }
}
