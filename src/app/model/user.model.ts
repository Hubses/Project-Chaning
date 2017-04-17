import { Chaining } from "./chaining.model";
export class User {
    private chaining: entities.IChaining[] = [];
    constructor(
        private name?: string
    ) {
        if (this.name === null || this.name === '') {
            this.name == 'User';
        }
    }
    public get User() {
        return this.name;
    }
    public set User(value: string) {
        this.name = value;
    }
    
    public get Chaining(): entities.IChaining[] {
        return this.chaining;
    }

}