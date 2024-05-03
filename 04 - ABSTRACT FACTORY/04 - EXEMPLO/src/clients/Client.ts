import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client{
    private vehicle : ILandVehicle;
    private aircraft : IAircraft;

    constructor(factory:ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();

    }

    startRoute(x : string):void{
        switch (x){
            case "aerial":
                this.aircraft.startRoute();
                break;
            case "land":
                this.vehicle.startRoute();
                break;

        }
        
        
    }

}