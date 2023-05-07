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

  // conflict: mundane potion
  // TODO: is there a more consistent way to remove this? this feels fragile
  event.remove({id: 'create:potion_mixing_vanilla_5'})

  event.recipes.createMixing(
    Fluid.of('minecraft:mundane_potion', 1000), [
      Item.of('kubejs:rugas', 1),
      Fluid.of('minecraft:water', 1000)
    ]).heated()
  )
})
