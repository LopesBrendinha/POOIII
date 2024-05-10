import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./director/director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder();
const director :  Director = new Director(builder);

director.constructorSedanCar();
const sedan: Vehicle = builder.getVehicle();
console.log("Contruindo Sedan...");
console.log("Tipo: " + sedan.veihcleType);
console.log("Potencia: " + sedan.engine.power);
console.log("Numero de Bancos: " + sedan.seats);
console.log("Tipo de transmissão: " + sedan.transmission);