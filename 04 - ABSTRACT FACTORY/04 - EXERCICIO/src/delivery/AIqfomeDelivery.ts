import Beer from "../products/drink/Beer";
import IDrink from "../products/drink/interfaces/IDrink";
import Hamburguer from "../products/food/Hamburguer";
import IFood from "../products/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AIqfomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }

}