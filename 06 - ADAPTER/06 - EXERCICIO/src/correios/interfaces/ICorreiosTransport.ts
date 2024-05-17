import CodigoDeRastreio from "../../utils/CodigoDeRastreio";

export default interface ICorreioTransport{
    authCod() : CodigoDeRastreio;
    sendCorreios() : void;
    receiveCorreios() : void;
}