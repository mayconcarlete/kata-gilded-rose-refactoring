import { BackstagedPasses } from '../src/items/backstaged-passes'

describe('Backstage Passes Item', () => {
  test('Should Backstage Passes increase quality by 1 when sellIn is greater than 10', () => {
    const backstagedPasses: BackstagedPasses = new BackstagedPasses(13, 10)
    backstagedPasses.updateQuality()
    expect(backstagedPasses.sellIn).toBe(12)
    expect(backstagedPasses.quality).toBe(11)
  })
  test('should Backstage Passes increase quality by 2 when sellIn is less than 10 and more than 5', () => {
    const backstagedPasses: BackstagedPasses = new BackstagedPasses(9, 10)
    backstagedPasses.updateQuality()
    expect(backstagedPasses.sellIn).toBe(8)
    expect(backstagedPasses.quality).toBe(12)
  })
  test('Should Backstaged Passes increase quality by 5 when sellIn is less than 6', () => {
    const backstagedPasses: BackstagedPasses = new BackstagedPasses(5, 10)
    backstagedPasses.updateQuality()
    expect(backstagedPasses.sellIn).toBe(4)
    expect(backstagedPasses.quality).toBe(13)
  })
  test('Should not allow Backstaged Passes quality over than 50', () => {
    const backstagedPasses: BackstagedPasses = new BackstagedPasses(1, 49)
    backstagedPasses.updateQuality()
    expect(backstagedPasses.sellIn).toBe(0)
    expect(backstagedPasses.quality).toBe(50)
  })
  test('Should change Backstaged Passes quality to 0 when sellIn expires', () => {
    const backstagedPasses: BackstagedPasses = new BackstagedPasses(-1, 50)
    backstagedPasses.updateQuality()
    expect(backstagedPasses.sellIn).toBe(-2)
    expect(backstagedPasses.quality).toBe(0)
  })
})
