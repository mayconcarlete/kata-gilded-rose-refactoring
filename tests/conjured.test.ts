import { Conjured } from '../src/items/conjured'
describe('Conjured item', () => {
  test('Should decrease quality by one when sellIn decrease but is bigger than 0', () => {
    const conjured: Conjured = new Conjured(1, 1)
    conjured.updateQuality()
    expect(conjured.sellIn).toBe(0)
    expect(conjured.quality).toBe(0)
  })
  test('Should decrease by 2 when sellIn is less than 0', () => {
    const conjured: Conjured = new Conjured(-1, 2)
    conjured.updateQuality()
    expect(conjured.sellIn).toBe(-2)
    expect(conjured.quality).toBe(0)
  })
  test('Should now allow quality negative', () => {
    const conjured: Conjured = new Conjured(-1, 0)
    conjured.updateQuality()
    expect(conjured.sellIn).toBe(-2)
    expect(conjured.quality).toBe(0)
  })
})
