import IDrink from "../../products/drink/interfaces/IDrink";
import IFood from "../../products/food/interfaces/IFood";

export default interface IDeliveryFactory{
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}