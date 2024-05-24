import IConsole from "../consoles/interfaces/IConsole";
import Play from "./play"

export default class AdvancedPlay extends Play{
    constructor(videoGame : IConsole){
        super(videoGame);
    }
    challenge():void{
        console.log("Modo HardCore Ativo!")
    }
}