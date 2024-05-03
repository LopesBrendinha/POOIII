import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    delivery(): void {
        this.getIngredients();
        console.log("Venha pegar sua sukita");
    }
    getIngredients(): void {
        console.log("Essa bebida não contem alcool");
    }

}