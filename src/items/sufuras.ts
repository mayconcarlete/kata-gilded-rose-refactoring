import { Item } from '../model/item'

export class Sufuras extends Item {
  constructor (sellIn: number, quality: number) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  updateQuality (): void {
    this.sellIn -= 1
  }
}
