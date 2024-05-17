import MercadoPago from "../mercadoPago/MercadaoPago";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class MercadoPagoAdapter implements IPaypalPayment{
    constructor(private mecadoPago: MercadoPago){
        console.log("Adaptando Payoneer no PayPal");
    }
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mecadoPago.mercadoPagoPayment();
    }
    paypalReceive(): void {
        this.mecadoPago.mercadoPagoReceive();
    }

}