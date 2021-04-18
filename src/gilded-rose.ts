import { IUpdateQuality } from './interfaces/update-quality'
import { Item } from './model/item'

export class GildedRose implements IUpdateQuality {
  items: Item[]
  constructor (items: Item[]) {
    this.items = items
  }

  updateQuality (): void {
    this.items.forEach(item => item.updateQuality())
  }
}
