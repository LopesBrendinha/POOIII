import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation: O Jogo está pronto para jogar");
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: O Jogo foi configurado para melhor qualidade!");
    }
    authToken(): void {
        console.log("PlayStation: O Jogo está rodando!");
    }

}