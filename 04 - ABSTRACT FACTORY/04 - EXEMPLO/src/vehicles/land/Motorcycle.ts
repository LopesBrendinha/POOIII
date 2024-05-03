import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a Viagem...");
    }
    getCargo(): void {
        console.log("A encomenda já foi pega!");
    }
    

}