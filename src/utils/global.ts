export class GlobalUtils {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(newName: string) {
        this._name = newName;
    }
}

export class VariablesUtils {
    private _name: string;
    private _value : string;

    constructor(envVar: string, val : string) {
        this._name = envVar;
        this._value = val;
    }

    public get name(): string {
        return this._name;
    }
    
    public get value() : string {
        return this._value;
    }
    
    public set value(v : string) {
        this._value = v;
    }
    
    

    public set name(newVar: string) {
        this._name = newVar;
    }
}
export function varReturn(varName : string) : string {
    return `${varName}`; 
}