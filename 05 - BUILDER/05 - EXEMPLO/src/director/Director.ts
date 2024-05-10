import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{
    constructor(private builder : IBuilder){}

    constructorSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeat(5);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(1600));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
    }

    constructorTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeat(3);
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.setEngine(new Engine(3900));
        this.builder.addWheel(new Wheel(50));
        this.builder.addWheel(new Wheel(50));
        this.builder.addWheel(new Wheel(50));
        this.builder.addWheel(new Wheel(50));
        
    }
}