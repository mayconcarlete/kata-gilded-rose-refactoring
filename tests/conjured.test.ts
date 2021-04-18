import {Conjured} from '../src/items/conjured'
describe('Conjured item', () => {
    test('Should decrease quality by one when sellIn decrease but is bigger than 0', () => {
        const conjured:Conjured = new Conjured(1, 1)
        conjured.updateQuality()
        expect(conjured.sellIn).toBe(0)
        expect(conjured.quality).toBe(0)
    })
})