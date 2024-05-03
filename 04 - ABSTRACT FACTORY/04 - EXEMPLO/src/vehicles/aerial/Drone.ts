import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Drone: Pegou a encomenda!");
    }
    checkWind(): void {
        console.log("Drone: Vento a 27km, Sudoeste!");
    }

}