import SanduicheBuilder from "./builders/SanduicheBuilder";
import Director from "./director/Director";
import Sanduiche from "./food/Sanduiche";

const builder : SanduicheBuilder = new SanduicheBuilder();
const director :  Director = new Director(builder);

director.constructorHotDog();
const hotDog: Sanduiche = builder.getSanduiche();
console.log("Fazendo um HotDog...");
console.log("Isso é: " + hotDog.sanduicheType);
console.log("Tem de saladinha: " + hotDog.salad);
console.log("Esse é o pão: " + hotDog.bread);
console.log("Tem de carninha: " + hotDog.protein);
console.log("Molhos: ");
hotDog.sauces.forEach(element => {
    console.log(element.flavor);
});