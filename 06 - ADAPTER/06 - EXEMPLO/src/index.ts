import MercadoPagoAdapter from "./adapters/MercadoPagoAdapter";
import PayonnerAdapter from "./adapters/PayoneerAdapter";
import MercadoPago from "./mercadoPago/MercadaoPago";
import Payoneer from "./payoneer/Payoneer";
import IPaypalPayment from "./paypal/interfaces/IPaypalPayment";

const payment : IPaypalPayment = new MercadoPagoAdapter(new MercadoPago);

payment.paypalPayment();
payment.paypalReceive();