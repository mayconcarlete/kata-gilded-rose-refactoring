import { IUpdateQuality } from "../interfaces/update-quality";
import {Item} from '../model/item'
export class BackstagedPasses extends Item implements IUpdateQuality{
    constructor(sellIn: number, quality: number){
        super('Backstaged Passes', sellIn, quality)
    }
    updateQuality(): void {
        this.sellIn > 5 && this.sellIn <= 10 ? this.quality += 2 : this.quality
        this.sellIn -= 1
    }
}