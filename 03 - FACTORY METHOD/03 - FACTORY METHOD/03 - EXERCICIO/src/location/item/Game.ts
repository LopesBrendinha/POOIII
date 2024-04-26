import IItem from "./interface/IItem";

export default class Game implements IItem{
    start(): void {
        this.getDescription();
        console.log("Vamos começar a jogar agora!!");
    }
    getDescription(): void {
        console.log("Eh um game show de bola para jogar");
    }

}