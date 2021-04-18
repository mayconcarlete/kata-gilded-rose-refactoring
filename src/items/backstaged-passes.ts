import { Item } from '../model/item'
export class BackstagedPasses extends Item {
  constructor (sellIn: number, quality: number) {
    super('Backstaged Passes', sellIn, quality)
  }

  updateQuality (): void {
    this.sellIn > 10 ? this.quality += 1 : this.quality
    this.sellIn > 5 && this.sellIn <= 10 ? this.quality += 2 : this.quality
    this.sellIn <= 5 && this.sellIn >= 0 ? this.quality += 3 : this.quality
    this.quality > 50 ? this.quality = 50 : this.quality
    this.sellIn < 0 ? this.quality = 0 : this.quality
    this.sellIn -= 1
  }
}
