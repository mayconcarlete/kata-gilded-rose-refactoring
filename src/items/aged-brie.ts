import { IUpdateQuality } from '../interfaces/update-quality'
import { Item } from '../model/item'

export class AgedBrie extends Item implements IUpdateQuality {
  constructor (sellIn: number, quality: number) {
    super('Aged Brie', sellIn, quality)
  }

  updateQuality (): void {
    this.quality < 50 ? this.quality += 1 : this.quality
    this.sellIn -= 1
  }
}
