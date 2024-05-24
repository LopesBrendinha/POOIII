import IPlataform from "../plataforms/interface/IPlatsform";
import ITransmission from "./interfaces/ITransmission";

export default class Live implements ITransmission{
    constructor(private plataform: IPlataform){
        this.plataform = plataform;
    }
    broadcasting(): void {
        console.log("Iniciando a transmissão!")
    }
    result(): void {
        console.log("***********NO AR*************")
    }

}