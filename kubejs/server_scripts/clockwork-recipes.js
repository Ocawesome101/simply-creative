// priority: 0

ServerEvents.recipes(event => {
  // Propeller Bearing
  event.shaped(
    Item.of('vs_clockwork:propellor_bearing', 1),
    [ 'T', 'C', 'S' ],
    {
      T: 'create:turntable',
      C: 'create:andesite_casing',
      S: 'create:shaft'
    }
  )

  // Flap Bearing
  event.shaped(
    Item.of('vs_clockwork:flap_bearing', 1),
    [ 'G', 'C', 'S' ],
    {
      G: 'create:golden_sheet',
      C: 'create:andesite_casing',
      S: 'create:shaft'
    },
  )

  // Afterblazer
  event.shaped(
    Item.of('vs_clockwork:afterblazer', 1),
    [ 'F', 'B', 'E' ],
    {
      F: 'create:propeller',
      B: 'create:blaze_burner',
      E: 'create:electron_tube'
    }
  )

  // Reaction Wheel
  event.shaped(
    Item.of('vs_clockwork:reaction_wheel', 1),
    [
      'cCc',
      'CsC',
      'cCc'
    ],
    {
      c: 'minecraft:copper_ingot',
      C: 'minecraft:copper_block',
      s: 'create:shaft'
    }
  )

  // Ballooner
  event.shaped(
    Item.of('vs_clockwork:ballooner', 1),
    [ 'I', 'B', 'C' ],
    {
      I: 'create:iron_sheet',
      B: 'create:blaze_burner',
      C: 'create:copper_casing'
    }
  )

  // Redstone Resistor
  event.shaped(
    Item.of('vs_clockwork:redstone_resistor', 1),
    [
      ' E ',
      'SCS',
      ' R '
    ],
    {
      E: 'create:electron_tube',
      S: 'create:shaft',
      C: 'create:andesite_casing',
      R: 'minecraft:redstone'
    }
  )

  // Command Seat
  event.shaped(
    Item.of('vs_clockwork:command_seat', 1),
    [
      'W  ',
      'WbL',
      'CBC'
    ],
    {
      W: '#minecraft:occludes_vibration_signals',
      b: 'create:brass_ingot',
      L: 'create:linked_controller',
      C: 'create:cogwheel',
      B: 'create:brass_casing'
    }
  )

  // Wing
  event.shaped(
    Item.of('vs_clockwork:wing', 8),
    [
      'Wg',
      'gS'
    ],
    {
      W: '#minecraft:occludes_vibration_signals',
      g: 'minecraft:gold_ingot',
      S: 'create:sturdy_sheet'
    }
  )

  // Wing (from Flap)
  event.shapeless(
    Item.of('vs_clockwork:wing', 1),
    [ 'vs:clockwork:flap' ]
  )

  // Flap (from Wing)
  event.shapeless(
    Item.of('vs_clockwork:flap', 1),
    [ 'vs:clockwork:wing' ]
  )

  // Balloon Casing
  event.createDeploying(
    Item.of('vs_clockwork:balloon_casing', 1),
    [ 'minecraft:wool', 'minecraft:gold_ingot' ]
  )

  // Combustion Engine omitted
})
