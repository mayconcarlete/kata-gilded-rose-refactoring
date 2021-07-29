import { GildedRose } from './gilded-rose'
import {items} from 'src/data/items'


const gildedRose: GildedRose = new GildedRose(items)
gildedRose.updateQuality()
gildedRose.updateQuality()
gildedRose.items.forEach(item => console.log(`name: ${item.name} sellIn: ${item.sellIn} quality: ${item.quality}`))
