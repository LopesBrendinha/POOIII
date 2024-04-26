import IItem from "./item/interface/IItem";
import Location from "./Location";
import Movie from "./item/Movie";

export default class MovieLocation extends Location{
    protected createItem(): IItem {
        return new Movie();
    }
    
}