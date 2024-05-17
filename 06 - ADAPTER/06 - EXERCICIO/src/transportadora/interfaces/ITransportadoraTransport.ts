import CodigoDeRastreio from "../../utils/CodigoDeRastreio";

export default interface ITransportadoraTransport{
    authCod() : CodigoDeRastreio;
    sendTransportadora() : void;
    receiveTransportadora() : void;
}