import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Vehicle{
    private _veihcleType: VehicleType;
    private _seats: number;
    private _engine: Engine;
    private _transmission: Transmission;
    private _wheels: Wheel[] = [];

    public get wheels(): Wheel[] {
        return this._wheels;
    }
    public set wheels(value: Wheel[]) {
        this._wheels = value;
    }
    public get veihcleType(): VehicleType {
        return this._veihcleType;
    }
    public set veihcleType(value: VehicleType) {
        this._veihcleType = value;
    }
    public get seats(): number {
        return this._seats;
    }
    public set seats(value: number) {
        this._seats = value;
    }
    public get engine(): Engine {
        return this._engine;
    }
    public set engine(value: Engine) {
        this._engine = value;
    }
    public get transmission(): Transmission {
        return this._transmission;
    }
    public set transmission(value: Transmission) {
        this._transmission = value;
    }

    public addWheel(wheel : Wheel){
        this.wheels.push(wheel);
    }
}