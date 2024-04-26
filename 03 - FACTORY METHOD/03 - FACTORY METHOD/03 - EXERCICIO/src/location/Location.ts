import IItem from "./item/interface/IItem";

export default abstract class location{
    startItem() : void{
        const item = this.createItem();
        item.start();
    }

    protected abstract createItem() : IItem;
}