import IDrink from "../products/drink/interfaces/IDrink";
import SoftDrink from "../products/drink/SoftDrink";
import HotDog from "../products/food/HotDog";
import IFood from "../products/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new HotDog();
    }

}