import IPlataform from "./interface/IPlatsform";

export default class Twitch implements IPlataform{
    constructor(){
        this.configureRMTP();
        console.log("Twitch: Transmissão iniciada")
    }
    configureRMTP(): void {
        this.authToken();
        console.log("Twitch: Configurando broadcasting");
    }
    authToken(): void {
        console.log("Twitch: Autorizando aplicação");
    }

}