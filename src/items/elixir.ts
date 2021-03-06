import { Item } from '../model/item'

export class Elixir extends Item {
  constructor (sellIn: number, quality: number) {
    super('Elixir of mongoose', sellIn, quality)
  }

  updateQuality (): void {
    this.sellIn >= 0 ? this.quality -= 1 : this.quality -= 2
    this.quality < 0 ? this.quality = 0 : this.quality
    this.sellIn -= 1
  }
}
