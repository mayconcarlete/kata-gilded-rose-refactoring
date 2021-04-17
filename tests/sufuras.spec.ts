import { Sufuras } from '../src/items/sufuras'

describe('Sufuras Item', () => {
    test('Should stay with the same quality when sellIn decrease', () => {
        const sufuras:Sufuras = new Sufuras(20, 80)
        sufuras.updateQuality()
        expect(sufuras.sellIn).toBe(19)
        expect(sufuras.quality).toBe(80)
    })
})