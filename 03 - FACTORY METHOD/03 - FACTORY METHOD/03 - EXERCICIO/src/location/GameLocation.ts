import IItem from "./item/interface/IItem";
import Location from "./Location";
import Game from "./item/Game";

export default class GameLocation extends Location{
    protected createItem(): IItem {
        return new Game();
    }
    
}