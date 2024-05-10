import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauce from "../ingredients/Sauce";

export default class Sanduiche{
    private _bread: Bread;
    private _protein: Protein;
    private _salad: Salad;
    private _sanduicheType: SanduicheType;
    private _sauces: Sauce[] = [];

    public get sauces(): Sauce[] {
        return this._sauces;
    }
    public set sauce(value: Sauce[]) {
        this._sauces = value;
    }

    public get bread(): Bread {
        return this._bread;
    }
    public set bread(value: Bread) {
        this._bread = value;
    }
    public get protein(): Protein {
        return this._protein;
    }
    public set protein(value: Protein) {
        this._protein = value;
    }
    public get salad(): Salad {
        return this._salad;
    }
    public set salad(value: Salad) {
        this._salad = value;
    }
    public get sanduicheType(): SanduicheType {
        return this._sanduicheType;
    }
    public set sanduicheType(value: SanduicheType) {
        this._sanduicheType = value;
    }

    public addSauces(sauce : Sauce){
        this._sauces.push(sauce);

    }

}