import { AgedBrie } from '../src/items/aged-brie'

describe('Aged Brie Item', () => {
  test('Should quality of Aged Brie increase the older it gets', () => {
    const agedBrie: AgedBrie = new AgedBrie(10 ,49)
    agedBrie.updateQuality()
    expect(agedBrie.quality).toBe(50)
    expect(agedBrie.sellIn).toBe(9)
  })
  test('Should stop increase Aged Brie quality when it gets 50', () => {
    const agedBrie: AgedBrie = new AgedBrie(10,50)
    agedBrie.updateQuality()
    expect(agedBrie.quality).toBe(50)
    expect(agedBrie.sellIn).toBe(9)
  })
})
