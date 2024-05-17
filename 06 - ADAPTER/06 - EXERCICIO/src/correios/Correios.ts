import CodigoDeRastreio from "../utils/CodigoDeRastreio";
import ICorreioTransport from "./interfaces/ICorreiosTransport";

export default class Correios implements ICorreioTransport{
    private codigoDeRastreio : CodigoDeRastreio;
    
    authCod(): CodigoDeRastreio {
        return new CodigoDeRastreio("correios");
    }
    sendCorreios(): void {
        this.codigoDeRastreio = this.authCod();
        console.log("Codigo De Rastreio: "+ this.codigoDeRastreio.codigoDeRastreio);
        console.log("Pedido Sendo Enviado Via Correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo pedido via Correios");
    }

}