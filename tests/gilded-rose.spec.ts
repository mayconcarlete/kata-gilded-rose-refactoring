import { Item, GildedRose } from '../src/gilded-rose'

describe('Gilded Rose', function () {
  test('should foo', function () {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)])
    const items: Item[] = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })
  test('Should not return negative quality for +5 Dexterity Vest', () => {
    const guildedRose: GildedRose = new GildedRose([new Item('+5 Dexterity Vest', 1, 0)])
    const items: Item[] = guildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
  })
})
