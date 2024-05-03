import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../products/drink/interfaces/IDrink";
import IFood from "../products/food/interfaces/IFood";


export default class Client{
    private drink : IDrink;
    private food : IFood;

    constructor(factory:IDeliveryFactory){
        this.drink = factory.createDeliveryDrink();
        this.food = factory.createDeliveryFood();

    }

    startDelivery(x : string):void{
        switch (x){
            case "food":
                this.food.delivery();
                break;
            case "drink":
                this.drink.delivery();
                break;
            default:
                console.log("Infelizmente não tem o que voce quer!");
        }
        
        
    }

}