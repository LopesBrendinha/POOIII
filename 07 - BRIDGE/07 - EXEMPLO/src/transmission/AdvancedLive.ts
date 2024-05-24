import IPlataform from "../plataforms/interface/IPlatsform";
import Live from "./Live";

export default class AdvancedLive extends Live{
    constructor(plataform : IPlataform){
        super(plataform);
    }
    subtitles(): void{
        console.log("Legendas Ativadas na transmissão");
    }
    comments() : void{
        console.log("Comentários Liberados!");
    }
}