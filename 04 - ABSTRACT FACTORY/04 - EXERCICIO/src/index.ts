import Client from "./clients/Client";
import AIqfomeDelivery from "./delivery/AIqfomeDelivery";
import ECompany from "./delivery/ECompany";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentCompany = ECompany.IFOOD;
const type = "food"
let factory: IDeliveryFactory;

switch(currentCompany){
    case ECompany.IFOOD:
        factory = new IFoodDelivery;
        break;
    case ECompany.AIQUEFOME:
        factory = new AIqfomeDelivery;
        break;
    default:
        console.log("Companhia nao definida");
}

const client = new Client(factory);

client.startDelivery("food");