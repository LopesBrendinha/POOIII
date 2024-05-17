
import CodigoDeRastreio from "../utils/CodigoDeRastreio";
import ITransportadoraTransport from "./interfaces/ITransportadoraTransport";

export default class Trasportadora implements ITransportadoraTransport{
    private codigoDeRastreio : CodigoDeRastreio;
    
    authCod(): CodigoDeRastreio {
        return new CodigoDeRastreio("Transportadora");
    }
    sendTransportadora(): void {
        this.codigoDeRastreio = this.authCod();
        console.log("Codigo De Rastreio: "+ this.codigoDeRastreio.codigoDeRastreio);
        console.log("Pedido Sendo Enviado Via Transportadora");
    }
    receiveTransportadora(): void {
        console.log("Recebendo pedido via Transportadora");
    }

}