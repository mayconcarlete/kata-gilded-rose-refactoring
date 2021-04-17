import { Dexterity } from '../src/items/dexterity'

describe('+5 Dexterity Item', () => {
  test('Should not return negative quality for +5 Dexterity Vest', () => {
    const dexterityItem: Dexterity = new Dexterity(1, 0)
    dexterityItem.updateQuality()
    expect(dexterityItem.quality).toBe(0)
    expect(dexterityItem.sellIn).toBe(0)
  })
  test('Should degrades  +5 Dexiterity Vest quality twice when sellIn expires', () => {
    const dexterityItem: Dexterity = new Dexterity(-1, 1)
    dexterityItem.updateQuality()
    expect(dexterityItem.quality).toBe(0)
    expect(dexterityItem.sellIn).toBe(-2)
  })
})
