import { IUpdateQuality } from "../interfaces/update-quality";
import { Item } from "../model/item";

export class Elixir extends Item implements IUpdateQuality{
    constructor(sellIn: number, quality: number){
        super('Elixir of mongoose', sellIn, quality)
    }
    updateQuality(): void {
        if(this.quality > 0 && this.sellIn >=0){
            this.quality -= 1
        }
        this.sellIn -= 1
    }
}