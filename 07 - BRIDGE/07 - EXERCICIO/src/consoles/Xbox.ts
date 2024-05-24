import IConsole from "./interfaces/IConsole";

export default class Xbox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("Xbox: O Jogo está pronto para jogar");
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: O Jogo foi configurado para melhor qualidade!");
    }
    authToken(): void {
        console.log("Xbox: O Jogo está rodando!");
    }

}