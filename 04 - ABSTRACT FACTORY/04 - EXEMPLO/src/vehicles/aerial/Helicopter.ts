import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Helicoptero: Passageiros embarcados!");
    }
    checkWind(): void {
        console.log("Helicoptero: Vento a 27km, Sudoeste!");
    }

}