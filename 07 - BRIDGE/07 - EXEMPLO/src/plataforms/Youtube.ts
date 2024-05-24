import IPlataform from "./interface/IPlatsform";

export default class Youtube implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Youtube: Transmissão iniciada")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Youtube: Configurando broadcasting");
    }
    authToken(): void {
        console.log("Youtube: Autorizando aplicação");
    }

}