import Token from "../utils/Token";
import IPaypalPayment from "./interfaces/IPaypalPayment";

export default class Paypal implements IPaypalPayment{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("Token: "+ this.token.token);
        console.log("Enviando pagamento via Paypal");
    }
    paypalReceive(): void {
        console.log("Recebendo pagamento via Paypal");
        
    }

}