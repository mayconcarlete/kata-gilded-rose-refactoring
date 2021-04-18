import {GildedRose} from './gilded-rose'
import { AgedBrie } from './items/aged-brie'
import { BackstagedPasses } from './items/backstaged-passes'
import { Conjured } from './items/conjured'
import { Dexterity } from './items/dexterity'
import { Elixir } from './items/elixir'
import { Sufuras } from './items/sufuras'
import { Item } from './model/item'

const items:Item[] = [
    new Dexterity(10,20),
    new AgedBrie(2,0),
    new Elixir(5,7),
    new Sufuras(0, 80),
    new Sufuras(-1, 80),
    new BackstagedPasses(15,20),
    new BackstagedPasses(10,49),
    new BackstagedPasses(5,49),
    new Conjured(3,6)
]
  
const gildedRose:GildedRose = new GildedRose(items)
gildedRose.updateQuality()
gildedRose.updateQuality()
gildedRose.items.forEach(item => console.log(`name: ${item.name} sellIn: ${item.sellIn} quality: ${item.quality}`))
