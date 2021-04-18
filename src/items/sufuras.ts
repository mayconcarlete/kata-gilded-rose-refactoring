import { IUpdateQuality } from '../interfaces/update-quality'
import { Item } from '../model/item'

export class Sufuras extends Item implements IUpdateQuality {
  constructor (sellIn: number, quality: number) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality)
  }

  updateQuality (): void {
    this.sellIn -= 1
  }
}
