import { Item, GildedRose } from '../src/gilded-rose'

describe('Gilded Rose', function () {
  test('should foo', function () {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)])
    const items: Item[] = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
  })
})
