import { IUpdateQuality } from '../interfaces/update-quality';
import { Item } from '../model/item'

export class Dexterity extends Item implements IUpdateQuality {
    constructor(sellIn: number, quality: number){
        super('+5 Dexterity Vest', sellIn, quality)
    }
    updateQuality(): void {
        if(this.quality > 0 && this.sellIn >= 0){
            this.quality -=1
        }
        else if(this.quality > 0 && this.sellIn < 0 )
            this.quality -= 2
        if(this.quality < 0) this.quality = 0
        this.sellIn -=1
    }
}