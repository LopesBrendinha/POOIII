import Payoneer from "../payoneer/Payoneer";
import IPaypalPayment from "../paypal/interfaces/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPaypalPayment{
    constructor(private payonner: Payoneer){
        console.log("Adaptando Payoneer no PayPal");
    }
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payonner.payoneerPayment();
    }
    paypalReceive(): void {
        this.payonner.payoneerReceive();
    }

}