import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    delivery(): void {
        this.getIngredients();
        console.log("O seu cachorro quente está pronto para a saida!");
    }
    getIngredients(): void {
        console.log("O seu KingDog tem vina, batata palha e maionese...")
    }

}