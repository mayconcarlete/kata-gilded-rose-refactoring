import {AgedBrie} from '../src/items/aged-brie'

describe('Aged Brie Item', () => {
    test('ensure Aged Brie increase quality the older it gets', () => {
        const agedBrie:AgedBrie = new AgedBrie(10 ,49)
        agedBrie.updateQuality()
        expect(agedBrie.quality).toBe(50)
        expect(agedBrie.sellIn).toBe(9)
    })
})