import ICorreioTransport from "../correios/interfaces/ICorreiosTransport";
import Trasportadora from "../transportadora/Transportadora";
import CodigoDeRastreio from "../utils/CodigoDeRastreio";


export default class TransportadoraAdapter implements ICorreioTransport{
    constructor(private transportadora : Trasportadora ){
        console.log("Adaptando a Transportadora nos Correios");
    }
    authCod(): CodigoDeRastreio {
        return new CodigoDeRastreio("Transportadora");
    }

    sendCorreios(): void {
        this.transportadora.sendTransportadora();
    }
    receiveCorreios(): void {
        this.transportadora.receiveTransportadora();
    }

}