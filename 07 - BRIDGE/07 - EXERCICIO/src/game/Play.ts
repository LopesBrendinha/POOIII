import IConsole from "../consoles/interfaces/IConsole";
import IGame from "./interfaces/IGame";

export default class Play implements IGame{
    constructor(private videoGame : IConsole){
        this.videoGame = videoGame;
    }
    playing(): void {
        console.log("Iniciando o Joguinho");
    }
    result(): void {
        console.log("=========Game Over=========");
    }

}