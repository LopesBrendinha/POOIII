import Token from "../utils/Token";
import IPayoneer from "./interfaces/IPayoneerPayment";

export default class Payoneer implements IPayoneer{
    private token : Token;

    authToken(): Token {
        return new Token();
    }
    payoneerPayment(): void {
        this.token = this.authToken();
        console.log("Token: "+ this.token.token);
        console.log("Enviando pagamento via Payoneer");
    }
    payoneerReceive(): void {
        console.log("Recebendo pagamento via Payoneer");
        
    }

}