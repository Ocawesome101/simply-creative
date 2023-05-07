// fix conflicting recipes

onEvent("recipes", event => {
  // conflict: crushing charcoal
  event.remove({id: 'createchromaticreturn:carbon_powder_recipe'})
  event.remove({id: 'industrializedcreate:industrial_diamond/crushed_charcoal'})

  event.recipes.createCrushing([
    Item.of('minecraft:charcoal', 1).withChance(0.25),
    Item.of('industrializedcreate:coal_dust', 1).withChance(0.5),
    Item.of('createchromaticreturn:carbon_powder', 1).withChance(0.25)
  ], 'minecraft:charcoal')
})
