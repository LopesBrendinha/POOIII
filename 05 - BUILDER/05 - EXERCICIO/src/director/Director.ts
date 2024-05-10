import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../ingredients/Bread";
import Protein from "../ingredients/Protein";
import Salad from "../ingredients/Salad";
import SanduicheType from "../ingredients/SanduicheType";
import Sauce from "../ingredients/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructorXTudo(){
        this.builder.setSanduicheType(SanduicheType.XTUDO);
        this.builder.setBread(Bread.FRANCES);
        this.builder.setProtein(Protein.HAMBURGUER);
        this.builder.setSalad(Salad.RUCULA);
        this.builder.addSauces(new Sauce("Mostarda"));
        this.builder.addSauces(new Sauce("Maionese"));
        this.builder.addSauces(new Sauce("Molho Verde"));
        this.builder.addSauces(new Sauce("Catchup"));

    }

    constructorHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.BRIOCHE);
        this.builder.setProtein(Protein.VINA);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.addSauces(new Sauce("Mostarda"));
        this.builder.addSauces(new Sauce("Maionese"));
        this.builder.addSauces(new Sauce("Molho Verde"));
        this.builder.addSauces(new Sauce("Barbecue"));
        
    }
}