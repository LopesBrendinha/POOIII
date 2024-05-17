export default class CodigoDeRastreio{
    private _codigoDeRastreio: string = "";

    public get codigoDeRastreio(): string {
        return this._codigoDeRastreio;
    }

    constructor( transport: string){
        if(transport == "correios"){
            this._codigoDeRastreio = "CO123456789BR";
        }
        else{
            this._codigoDeRastreio = "TRANS123456789BR";
        }
    }

    
}