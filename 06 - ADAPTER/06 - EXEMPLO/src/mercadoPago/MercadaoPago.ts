import Token from "../utils/Token";
import IMercadoPagoPayment from "./interfaces/IMercadoPagoPayment";


export default class MercadoPago implements IMercadoPagoPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    mercadoPagoPayment(): void {
        this.token = this.authToken();
        console.log("Token: "+ this.token.token);
        console.log("Enviando pagamento via Mercado Pago");
    }
    mercadoPagoReceive(): void {
        console.log("Recebendo pagamento via Mercado Pago");
        
    }

}