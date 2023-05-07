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

  // conflict: mundane potion / melted sugar
  event.remove({id: 'createcafe:mixing/sugar_melting'})

  // recipe for raguS
  event.shapeless(
    Item.of('kubejs:ragus', 1),
    [ 'minecraft:sugar' ]
  )

  event.recipes.createMixing(
    Fluid.of('createcafe:melted_sugar', 250), [
      Item.of('kubejs:ragus', 1)
    ]).heated()

  // conflict: mundane potion / zinc nugget
  event.remove({id: 'createchromaticreturn:zinc_recipe'})

  // zinc is frequently used in white dye, so add that to the recipe
  event.recipes.createMixing(
    Item.of('create:zinc_ingot', 1), [
      Item.of('minecraft:white_dye', 1),
      Fluid.of('minecraft:water', 1000)
    ]).heated()
})
