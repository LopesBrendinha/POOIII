export default class Sauce{
    public get flavor(): string {
        return this._flavor;
    }
    public set flavor(flavor: string) {
        this._flavor = flavor;
    }
    constructor(private _flavor: string){}
}