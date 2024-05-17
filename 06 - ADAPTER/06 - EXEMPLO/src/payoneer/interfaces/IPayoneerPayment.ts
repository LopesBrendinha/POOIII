import Token from "../../utils/Token";

export default interface IPayoneer{
    authToken() : Token;
    payoneerPayment() : void;
    payoneerReceive() : void;
}