import ILandVehicle from "./interfaces/ILandVehicle";

export default class Car implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Carro: Iniciando a Viagem...");
    }
    getCargo(): void {
        console.log("Todos os passageiros emvarcaram no carro!");
    }
    

}