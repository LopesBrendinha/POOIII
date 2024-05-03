import Client from "./clients/Client";
import ECompany from "./transport/ECompany";
import InDriveTransport from "./transport/InDriveTransport";
import ITransportFactory from "./transport/interfaces/ITransportFactory";
import NineNineTransport from "./transport/NineNineTransport";
import UberTransport from "./transport/UberTransport";

const currentCompany = ECompany.UBER;
const type = "land"
let factory: ITransportFactory;

switch(currentCompany){
    case ECompany.UBER:
        factory = new UberTransport;
        break;
    case ECompany.NINENINE:
        factory = new NineNineTransport;
        break;
    case ECompany.INDRIVE:
        factory = new InDriveTransport;
        break;
    default:
        console.log("Companhia nao definida");
}

const client = new Client(factory);

client.startRoute(type);