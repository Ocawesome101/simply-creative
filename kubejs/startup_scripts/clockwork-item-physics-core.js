// priority: 0
// hopefully we won't need this very long

// Physics Core item
onEvent('item.registry', event => {
//StartupEvents.registry('item', event => {
  event.create('physics_core').texture('clockwork:item/physics_core').displayName('Physics Core')
})
