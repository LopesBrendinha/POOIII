import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";

declare var process;

let location: Location;
if(process.argv.includes("movie")){
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
    location = new MovieLocation();
}
else if(process.argv.includes("game")){
    location = new GameLocation();
}
else{
    console.log("Selecione o tipo de locacao!")
}
if(location) location.startItem();