import IPlataform from "./interface/IPlatsform";

export default class Facebook implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Facebook: Transmissão iniciada")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Facebook: Configurando broadcasting");
    }
    authToken(): void {
        console.log("Facebook: Autorizando aplicação");
    }

}