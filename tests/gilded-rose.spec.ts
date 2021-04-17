import { Item, GildedRose } from '../src/gilded-rose'

describe('Gilded Rose', function () {
  describe('+5 Decterity Item', () => {
    test('Should not return negative quality for +5 Dexterity Vest', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('+5 Dexterity Vest', 1, 0)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
      expect(items[0].sellIn).toBe(0)
    })

    test('Should degrades  +5 Dexiterity Vest quality twice when sellIn is negative', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('+5 Dexterity Vest', 0, 2)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(-1)
      expect(items[0].quality).toBe(0)
    })
  })
  describe('Elixir of the Mongoose', () => {
    test('Should not return negative quality for Elixir of the Mongoose', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 0)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].quality).toBe(0)
      expect(items[0].sellIn).toBe(4)
    })

    test('Should decrease Elixir by two when sellIn is negative', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Elixir of the Mongoose', 0, 2)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(-1)
      expect(items[0].quality).toBe(0)
    })
  })
  describe('Sulfuras, Hand of Ragnors', () => {
    test('Should not change Sulfuras, Hand of Ragnaros quality when time decrease', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 1, 80)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].quality).toBe(80)
    })
  })
  describe('Age Brie cheese', () => {
    test('Should increase quality for Aged Brie when a day pass', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Aged Brie', 1, 1)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].quality).toBe(2)
      expect(items[0].sellIn).toBe(0)
    })
    test('Should ensure Age brie not pass quality of 50 when day pass', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Aged Brie', 1, 49)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(50)
    })
  })
  describe('Backstage Passes', () => {
    test('Should increase Backstage Passes quality by two if remain days are between 6 and 10', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].quality).toBe(2)
    })
    test('Ensure Backstage Passes quality will not pass 50', () => {
      const gildedRose:GildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49)])
      const items:Item[] = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(0)
      expect(items[0].quality).toBe(50)
    })
    test('Should increase Backstage Passes quality by three if sellIn are between 0 and 5', () => {
      const gildedRose: GildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)])
      const items: Item[] = gildedRose.updateQuality()
      expect(items[0].sellIn).toBe(4)
      expect(items[0].quality).toBe(3)
    })
    test('Should quality be zero when sellIn maturity over', () => {
      const giledRose: GildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)])
      const items: Item[] = giledRose.updateQuality()
      expect(items[0].sellIn).toBe(-1)
      expect(items[0].quality).toBe(0)
    })
  })
})
