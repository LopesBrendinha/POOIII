import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    delivery(): void {
        this.getIngredients();
        console.log("Venha pegar sua cerveja");
    }
    getIngredients(): void {
        console.log("Essa bebida contem alcool");
    }

}