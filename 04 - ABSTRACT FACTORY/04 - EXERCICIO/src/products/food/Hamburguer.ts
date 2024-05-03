import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood{
    delivery(): void {
        this.getIngredients();
        console.log("O seu hambuguer está pronto para a saida!");
    }
    getIngredients(): void {
        console.log("O seu BigBobs tem carne, alface, queijo e molho especial...")
    }

}