import { IUpdateQuality } from "../interfaces/update-quality"

export class Item implements IUpdateQuality {
  name: string
  sellIn: number
  quality: number
  constructor (name: string, sellIn: number, quality: number) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
  updateQuality(){
    throw new Error('Not Implemented')
  }
}
