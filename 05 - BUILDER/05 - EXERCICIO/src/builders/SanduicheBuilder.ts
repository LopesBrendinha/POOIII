import Sanduiche from "../food/Sanduiche";
import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauce from "../ingredients/Sauce";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder{
    private sanduiche = new Sanduiche();
    reset(): void {
        this.sanduiche = this.sanduiche;
    }
    getSanduiche(): Sanduiche {
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }
    setSanduicheType(value: SanduicheType) {
        this.sanduiche.sanduicheType = value;
    }
    setBread(bread: Bread) {
        this.sanduiche.bread = bread;
    }
    setProtein(protein: Protein) {
        this.sanduiche.protein = protein;
    }
    setSalad(salad: Salad) {
        this.sanduiche.salad = salad;
    }
    addSauces(sauce: Sauce) {
        this.sanduiche.addSauces(sauce);
    }

}