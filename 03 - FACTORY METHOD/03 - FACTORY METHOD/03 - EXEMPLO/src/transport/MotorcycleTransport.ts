import Transport from "./Transport";
import IVehicles from "./vehicles/interface/IVehicle";
import Motorcycle from "./vehicles/Motorcycle";

export default class MotorcycleTransport extends Transport{
    protected createTransport(): IVehicles {
        return new Motorcycle();
    }

}