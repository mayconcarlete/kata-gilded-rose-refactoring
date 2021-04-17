import { Elixir } from '../src/items/elixir'

describe('Elixir Item', () => {
  test('Should not allow negative quality in item', () => {
    const elixirItem: Elixir = new Elixir(0, 0)
    elixirItem.updateQuality()
    expect(elixirItem.quality).toBe(0)
    expect(elixirItem.sellIn).toBe(-1)
  })
  test('Should decrease Dexterity quality by two when sellIn expires', () => {
    const elixirItem: Elixir = new Elixir(-1, 1)
    elixirItem.updateQuality()
    expect(elixirItem.quality).toBe(0)
    expect(elixirItem.sellIn).toBe(-2)
  })
})
