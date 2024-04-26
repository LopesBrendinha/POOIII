import IVehicle from "./interface/IVehicle";

export default class Car implements IVehicle{
    
    startRoute(): void {
        this.getCargo();
        console.log("\nCarro: Inciando o trajeto...")
    }
    getCargo(): void {
        console.log("Carro: Passageiros embarcados, estamos prontos!");
    }

}