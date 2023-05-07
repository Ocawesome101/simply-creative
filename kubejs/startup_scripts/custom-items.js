// priority: 0
// hopefully we won't need this very long

onEvent('item.registry', event => {
  // Physics Core item
  event.create('physics_core').texture('simply_creative:item/physics_core').displayName('Physics Core')
  // "rugaS" - used for mundane potions because compatibility issues
  event.create('rugas').texture('simply_creative:item/rugas').displayName('rugaS')
})
