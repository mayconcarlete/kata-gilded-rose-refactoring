import {BackstagedPasses} from '../src/items/backstaged-passes'

describe('Backstage Passes Item', () => {
    test('should Backstage Passes increase quality by 2 when sellIn is less than 10 and more than 5', () => {
        const backstagedPasses: BackstagedPasses = new BackstagedPasses(9, 10)
        backstagedPasses.updateQuality()
        expect(backstagedPasses.sellIn).toBe(8)
        expect(backstagedPasses.quality).toBe(12)
    })
})