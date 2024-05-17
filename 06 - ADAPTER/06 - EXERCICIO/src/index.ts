import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreioTransport from "./correios/interfaces/ICorreiosTransport";
import Trasportadora from "./transportadora/Transportadora";


const transport : ICorreioTransport = new Correios;

transport.receiveCorreios();
transport.sendCorreios();