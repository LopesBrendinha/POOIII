import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Vamos começar a assistir agora!!");
    }
    getDescription(): void {
        console.log("Eh um filme show de bola para assistir");
    }

}