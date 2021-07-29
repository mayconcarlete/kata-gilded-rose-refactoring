import { AgedBrie } from "src/items/aged-brie";
import { BackstagedPasses } from "src/items/backstaged-passes";
import { Conjured } from "src/items/conjured";
import { Dexterity } from "src/items/dexterity";
import { Elixir } from "src/items/elixir";
import { Sufuras } from "src/items/sufuras";
import { Item } from "src/model/item";

export const items: Item[] = [
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