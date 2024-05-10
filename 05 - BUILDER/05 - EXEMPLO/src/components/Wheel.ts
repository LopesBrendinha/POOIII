export default class Wheel{
    public get rim(): number {
        return this._rim;
    }
    public set rim(value: number) {
        this._rim = value;
    }
    constructor(private _rim: number){}
}