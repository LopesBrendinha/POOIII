export default class Endereco{
    private _rua : string;
    private _numero : number;
    private _cidade : string;
    private _estado : string;

    constructor(rua: string, numero: number, cidade: string, estado: string) {
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }
    
    get rua(): string {
        return this._rua;
    }
    
    get numero(): number {
        return this._numero;
    }

    get cidade(): string {
        return this._cidade;
    }

    get estado(): string {
        return this._estado;
    }

    set rua(value: string) {
        this._rua = value;
    }

    set numero(value: number) {
        this._numero = value;
    }

    set cidade(value: string) {
        this._cidade = value;
    }

    set estado(value: string) {
        this._estado = value;
    }

}