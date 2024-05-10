import Engine from "../../components/Engine";
import Transmission from "../../components/Transmission";
import VehicleType from "../../components/VehicleType";
import Wheel from "../../components/Wheel";
import Veihcle from "../../products/Vehicle";

export default interface IBuilder{
    reset() : void;
    getVehicle() : Veihcle;
    addWheel(wheel: Wheel);
    setVehicleType(value: VehicleType);
    setSeat(seats: Number);
    setEngine(engine: Engine);
    setTransmission(transmission: Transmission);

}