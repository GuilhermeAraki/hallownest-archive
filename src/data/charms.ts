import { Charm } from '@/types';

export const charmsData: Charm[] = [
  {
    id: 'wayward-compass',
    name: 'Wayward Compass',
    notches: 1,
    image: '/images/charms/wayward-compass---charm_sprite_03.png',
    description: 'Whispers its bearer’s location on the map. Essential for travelers navigating the twisting labyrinth of Hallownest.',
    location: 'Purchased from Iselda in Dirtmouth',
    acquisitionCost: '220 Geo',
    category: 'utility',
    synergies: ['Never gets lost in uncharted tunnels']
  },
  {
    id: 'gathering-swarm',
    name: 'Gathering Swarm',
    notches: 1,
    image: '/images/charms/gathering-swarm---charm_sprite_02.png',
    description: 'A swarm of tiny bugs follows the bearer and gathers fallen Geo from every crevice and platform.',
    location: 'Purchased from Sly in Dirtmouth',
    acquisitionCost: '300 Geo',
    category: 'utility',
    synergies: ['Greatly speeds up Geo collection across all biomes']
  },
  {
    id: 'stalwart-shell',
    name: 'Stalwart Shell',
    notches: 2,
    image: '/images/charms/stalwart-shell---_0006_charm_stalwart_shell.png',
    description: 'Builds resilience. When taking damage, the bearer remains invulnerable for longer, allowing for counter-attacks.',
    location: 'Purchased from Sly in Dirtmouth',
    acquisitionCost: '200 Geo',
    category: 'combat',
    synergies: ['Thorns of Agony', 'Quick Slash', 'Fury of the Fallen']
  },
  {
    id: 'soul-catcher',
    name: 'Soul Catcher',
    notches: 2,
    image: '/images/charms/soul-catcher---_0001_charm_more_soul.png',
    description: 'Used by shamans to draw more Soul from the world around them. Increases the amount of Soul gained when striking foes with the nail.',
    location: 'Found in the Ancestral Mound after defeating the Elder Baldur',
    category: 'soul',
    synergies: ['Soul Eater', 'Spell Twister', 'Shaman Stone']
  },
  {
    id: 'shaman-stone',
    name: 'Shaman Stone',
    notches: 3,
    image: '/images/charms/shaman-stone---_0002_charm_spell_damage_up.png',
    description: 'Said to contain the knowledge of past generations of shaman. Increases the power and area-of-effect of spells.',
    location: 'Purchased from Salubra in Forgotten Crossroads',
    acquisitionCost: '220 Geo',
    category: 'soul',
    synergies: ['Flukenest', 'Spell Twister', 'Soul Catcher']
  },
  {
    id: 'soul-eater',
    name: 'Soul Eater',
    notches: 4,
    image: '/images/charms/soul-eater---charm_soul_up_large.png',
    description: 'Forgotten shaman artifact, used to draw immense Soul from still-living creatures. Greatly increases the amount of Soul gained from strikes.',
    location: 'Hidden behind a breakable floor in the Resting Grounds crypts',
    category: 'soul',
    synergies: ['Soul Catcher', 'Spell Twister', 'Shaman Stone']
  },
  {
    id: 'dashmaster',
    name: 'Dashmaster',
    notches: 2,
    image: '/images/charms/dashmaster---_0011_charm_generic_03.png',
    description: 'Bears the likeness of an eccentric bug. The bearer will be able to dash more frequently and dash downwards.',
    location: 'Beneath a statue near the Mantis Village in Fungal Wastes',
    category: 'movement',
    synergies: ['Sprintmaster', 'Sharp Shadow']
  },
  {
    id: 'sprintmaster',
    name: 'Sprintmaster',
    notches: 1,
    image: '/images/charms/sprintmaster---charm_grimm_sprint_master.png',
    description: 'Bears the likeness of a strange bug known only as the Sprintmaster. Increases the running speed of the bearer.',
    location: 'Purchased from Sly in Dirtmouth after returning the Shopkeeper’s Key',
    acquisitionCost: '400 Geo',
    category: 'movement',
    synergies: ['Dashmaster', 'Sharp Shadow']
  },
  {
    id: 'grubsong',
    name: 'Grubsong',
    notches: 1,
    image: '/images/charms/grubsong---charm_grub_mid.png',
    description: 'Contains the gratitude of freed grubs. Gain Soul every time the bearer takes damage.',
    location: 'Awarded by the Grubfather after rescuing 10 Grubs',
    category: 'soul',
    synergies: ['Weaversong', 'Grubberfly’s Elegy', 'Deep Focus']
  },
  {
    id: 'grubberflys-elegy',
    name: 'Grubberfly’s Elegy',
    notches: 3,
    image: '/images/charms/grubberfly_s-elegy---charm_grub_blade.png',
    description: 'Contains the divine gratitude of grubs transitioning into adulthood. At full health, the nail fires holy beams of pure light.',
    location: 'Awarded by Grubfather after rescuing all 46 Grubs',
    category: 'combat',
    synergies: ['Mark of Pride', 'Fury of the Fallen', 'Quick Slash']
  },
  {
    id: 'fragile-strength',
    name: 'Fragile Strength',
    notches: 3,
    image: '/images/charms/fragile-strength---_0002_charm_glass_attack_up.png',
    description: 'Greatly increases the damage of the bearer’s nail by 50%. Fragile: breaks upon death unless made Unbreakable by Divine.',
    location: 'Purchased from Leg Eater in Fungal Wastes',
    acquisitionCost: '600 Geo (15,000 Geo to Divine for Unbreakable)',
    category: 'combat',
    synergies: ['Quick Slash', 'Mark of Pride', 'Fury of the Fallen']
  },
  {
    id: 'fragile-heart',
    name: 'Fragile Heart',
    notches: 2,
    image: '/images/charms/fragile-heart---_0002_charm_glass_heal.png',
    description: 'Increases the health of the bearer by 2 masks. Fragile: breaks upon death unless upgraded to Unbreakable Heart.',
    location: 'Purchased from Leg Eater in Fungal Wastes',
    acquisitionCost: '350 Geo (12,000 Geo to Divine)',
    category: 'utility',
    synergies: ['Joni’s Blessing', 'Lifeblood Core']
  },
  {
    id: 'fragile-greed',
    name: 'Fragile Greed',
    notches: 2,
    image: '/images/charms/fragile-greed---_0003_charm_glass_geo.png',
    description: 'Causes defeated enemies to drop 20% more Geo. Fragile: breaks upon death.',
    location: 'Purchased from Leg Eater in Fungal Wastes',
    acquisitionCost: '250 Geo (9,000 Geo to Divine)',
    category: 'utility',
    synergies: ['Gathering Swarm']
  },
  {
    id: 'spell-twister',
    name: 'Spell Twister',
    notches: 2,
    image: '/images/charms/spell-twister---charm_magic_cost_down.png',
    description: 'Reflecting the secret magic of the Soul Sanctum, reduces the Soul cost required to cast all spells from 33 to 24.',
    location: 'Secret chamber at top of Soul Sanctum before Soul Master',
    category: 'soul',
    synergies: ['Shaman Stone', 'Soul Catcher', 'Soul Eater']
  },
  {
    id: 'steady-body',
    name: 'Steady Body',
    notches: 1,
    image: '/images/charms/steady-body---_0006_charm_no_recoil.png',
    description: 'Keeps its bearer completely steady when striking with a nail. Eliminates all recoil and knockback upon hitting targets.',
    location: 'Purchased from Salubra in Forgotten Crossroads',
    acquisitionCost: '120 Geo',
    category: 'combat',
    synergies: ['Quick Slash', 'Mark of Pride']
  },
  {
    id: 'heavy-blow',
    name: 'Heavy Blow',
    notches: 2,
    image: '/images/charms/heavy-blow---_0008_charm_nail_damage_up.png',
    description: 'Formed from the hardened shell of a fierce warrior. Increases the knockback dealt to enemies and reduces stagger thresholds.',
    location: 'Purchased from Sly in Dirtmouth with Shopkeeper’s Key',
    acquisitionCost: '350 Geo',
    category: 'combat',
    synergies: ['Mark of Pride', 'Long Nail']
  },
  {
    id: 'quick-slash',
    name: 'Quick Slash',
    notches: 3,
    image: '/images/charms/quick-slash---_0003_charm_nail_slash_speed_up.png',
    description: 'Born from imperfect, discarded nails. Allows the bearer to slash with devastating speed, cutting cooldown between attacks.',
    location: 'Hidden deep in Kingdom’s Edge near the Ancient Nailsmith’s corpse',
    category: 'combat',
    synergies: ['Fragile Strength', 'Mark of Pride', 'Steady Body']
  },
  {
    id: 'longnail',
    name: 'Longnail',
    notches: 2,
    image: '/images/charms/long-nail---_0007_charm_greed.png',
    description: 'Increases the range of the bearer’s nail by 15%, allowing strikes from further away.',
    location: 'Purchased from Salubra in Forgotten Crossroads',
    acquisitionCost: '300 Geo',
    category: 'combat',
    synergies: ['Mark of Pride (stacks to +40% reach)']
  },
  {
    id: 'mark-of-pride',
    name: 'Mark of Pride',
    notches: 3,
    image: '/images/charms/mark-of-pride---char_mantis.png',
    description: 'Freely given by the Mantis Tribe to those they respect. Greatly increases the reach of the bearer’s nail by 25%.',
    location: 'Treasure chamber in Mantis Village after defeating Mantis Lords',
    category: 'combat',
    synergies: ['Longnail', 'Quick Slash', 'Grubberfly’s Elegy']
  },
  {
    id: 'fury-of-the-fallen',
    name: 'Fury of the Fallen',
    notches: 2,
    image: '/images/charms/fury-of-the-fallen---_0005_charm_fury.png',
    description: 'Embodies the fury and heroism of those who stand on the brink of death. When at 1 HP, nail damage increases by 75%.',
    location: 'King’s Pass, behind a hidden spike cavern',
    category: 'combat',
    synergies: ['Grubberfly’s Elegy (fires red fury beams)', 'Fragile Strength']
  },
  {
    id: 'thorns-of-agony',
    name: 'Thorns of Agony',
    notches: 1,
    image: '/images/charms/thorns-of-agony---_0000_charm_thorn_counter.png',
    description: 'Senses the pain of its bearer and lashes out at the world around them with thorny black tendrils.',
    location: 'Greenpath, behind a briar labyrinth maze',
    category: 'combat',
    synergies: ['Stalwart Shell', 'Baldur Shell']
  },
  {
    id: 'baldur-shell',
    name: 'Baldur Shell',
    notches: 2,
    image: '/images/charms/baldur-shell---charm_blocker.png',
    description: 'Protects its bearer with a hard shell while focusing Soul. Absorbs up to 4 hits before cracking.',
    location: 'Howling Cliffs, inside an Elder Baldur’s cavern',
    category: 'utility',
    synergies: ['Spore Shroom', 'Shape of Unn', 'Quick Focus']
  },
  {
    id: 'flukenest',
    name: 'Flukenest',
    notches: 3,
    image: '/images/charms/flukenest---charm_fluke.png',
    description: 'Living charm born in the gut of Flukemarm. Transforms Vengeful Spirit and Shade Soul into a volley of squirming baby flukes.',
    location: 'Dropped upon defeating Flukemarm in Royal Waterways',
    category: 'soul',
    synergies: ['Defender’s Crest (toxic explosive fluke)', 'Shaman Stone']
  },
  {
    id: 'defenders-crest',
    name: 'Defender’s Crest',
    notches: 1,
    image: '/images/charms/defender_s-crest---charm_dung_def.png',
    description: 'Unique charm bearing the scent of the Royal Waterways. Emits a noxious cloud of toxic gas that damages foes.',
    location: 'Awarded upon defeating Dung Defender in Royal Waterways',
    category: 'utility',
    synergies: ['Spore Shroom', 'Flukenest', 'Glowing Womb']
  },
  {
    id: 'glowing-womb',
    name: 'Glowing Womb',
    notches: 2,
    image: '/images/charms/glowing-womb---_0009_charm_hatchling.png',
    description: 'Drains the bearer’s Soul to spawn loyal hatchlings that charge into foes and explode on contact.',
    location: 'Hidden chamber in Forgotten Crossroads above False Knight',
    category: 'utility',
    synergies: ['Defender’s Crest (exploding dung hatchlings)', 'Fury of the Fallen']
  },
  {
    id: 'quick-focus',
    name: 'Quick Focus',
    notches: 3,
    image: '/images/charms/quick-focus---_0005_charm_fast_focus.png',
    description: 'A charm that gathers Soul at accelerated speeds. Doubles the speed of focusing Soul to heal masks.',
    location: 'Purchased from Salubra in Forgotten Crossroads',
    acquisitionCost: '800 Geo',
    category: 'utility',
    synergies: ['Deep Focus', 'Shape of Unn']
  },
  {
    id: 'deep-focus',
    name: 'Deep Focus',
    notches: 4,
    image: '/images/charms/deep-focus---charm_crystal.png',
    description: 'Naturally formed within a crystal hollow. Focusing Soul is slower, but heals 2 masks instead of 1.',
    location: 'Crystal Peak, behind a dark breakable crystal wall',
    category: 'utility',
    synergies: ['Quick Focus', 'Spore Shroom', 'Shape of Unn']
  },
  {
    id: 'lifeblood-heart',
    name: 'Lifeblood Heart',
    notches: 2,
    image: '/images/charms/lifeblood-heart---_0010_charm_bluehealth.png',
    description: 'Contains a living core of Lifeblood. When resting, the bearer gains 2 temporary blue health masks.',
    location: 'Purchased from Salubra in Forgotten Crossroads',
    acquisitionCost: '250 Geo',
    category: 'lifeblood',
    synergies: ['Lifeblood Core', 'Joni’s Blessing']
  },
  {
    id: 'lifeblood-core',
    name: 'Lifeblood Core',
    notches: 3,
    image: '/images/charms/lifeblood-core---_0007_charm_blue_health_large.png',
    description: 'Deep abyss artifact soaked in pure Lifeblood. Grants 4 temporary blue masks upon resting.',
    location: 'The Abyss, behind the sealed 14-Lifeblood door',
    category: 'lifeblood',
    synergies: ['Lifeblood Heart', 'Joni’s Blessing']
  },
  {
    id: 'jonis-blessing',
    name: 'Joni’s Blessing',
    notches: 4,
    image: '/images/charms/joni_s-blessing---charm_blue_health_convert.png',
    description: 'Blessed by the gentle heretic Joni. Converts all masks into Lifeblood masks and adds 40% more health, but prevents healing.',
    location: 'Joni’s Repose in Howling Cliffs',
    category: 'lifeblood',
    synergies: ['Hiveblood', 'Lifeblood Core']
  },
  {
    id: 'hiveblood',
    name: 'Hiveblood',
    notches: 4,
    image: '/images/charms/hiveblood---charm_hive.png',
    description: 'Golden clump of crystallised nectar from the Hive. Passively regenerates the last damaged mask over 10 seconds without Soul.',
    location: 'Awarded upon defeating Hive Knight in The Hive',
    category: 'utility',
    synergies: ['Joni’s Blessing', 'Path of Pain survival']
  },
  {
    id: 'spore-shroom',
    name: 'Spore Shroom',
    notches: 1,
    image: '/images/charms/spore-shroom---charm_fungus.png',
    description: 'Living fungal parasite. When focusing Soul, emits a cloud of poisonous spores and allows the bearer to read ancient lore tablets.',
    location: 'Fungal Wastes near Queen’s Station pool',
    category: 'utility',
    synergies: ['Defender’s Crest', 'Shape of Unn', 'Deep Focus']
  },
  {
    id: 'sharp-shadow',
    name: 'Sharp Shadow',
    notches: 2,
    image: '/images/charms/sharp-shadow---charm_shade_impact.png',
    description: 'Contains a forbidden spell that transforms the shadow into deadly blades. Dashing with Shade Cloak damages enemies.',
    location: 'Deepnest, behind a Shade Gate near the Mantis Traitor camp',
    category: 'movement',
    synergies: ['Dashmaster (boosts shadow damage by 50%)']
  },
  {
    id: 'shape-of-unn',
    name: 'Shape of Unn',
    notches: 2,
    image: '/images/charms/shape-of-unn---charm_slug.png',
    description: 'Reveals the true form of the slug god Unn. Allows the bearer to crawl along the ground while focusing Soul to slip past attacks.',
    location: 'Presented by Unn in the Lake of Unn after obtaining Isma’s Tear',
    category: 'movement',
    synergies: ['Quick Focus', 'Spore Shroom']
  },
  {
    id: 'dreamshield',
    name: 'Dreamshield',
    notches: 3,
    image: '/images/charms/dreamshield---charm_grimm_markoth_shield.png',
    description: 'Shield forged from pale dreams. Conjures a rotating spectral shield that blocks enemy projectiles and slices nearby foes.',
    location: 'Resting Grounds beneath the Seer’s room',
    category: 'utility',
    synergies: ['Dream Wielder', 'Mark of Pride']
  },
  {
    id: 'weaversong',
    name: 'Weaversong',
    notches: 2,
    image: '/images/charms/weaversong---charm_grimm_silkweaver.png',
    description: 'Silken lullaby woven by the Weavers. Summons tiny spiderlings that dart across the arena to attack enemies.',
    location: 'Weaver’s Den in Deepnest',
    category: 'utility',
    synergies: ['Grubsong (spiderlings collect Soul!)', 'Sprintmaster']
  },
  {
    id: 'nailmasters-glory',
    name: 'Nailmaster’s Glory',
    notches: 1,
    image: '/images/charms/nailmaster_s-glory---_0004_charm_charge_time_up.png',
    description: 'Contains the passion and mastery of the three Nailmasters. Reduces the charging time of Great Slash, Dash Slash, and Cyclone Slash.',
    location: 'Awarded by Sly in Dirtmouth after learning all three Nail Arts',
    category: 'combat',
    synergies: ['Steady Body', 'Mark of Pride']
  },
  {
    id: 'carefree-melody',
    name: 'Carefree Melody',
    notches: 3,
    image: '/images/charms/carefree-melody---charm_grimmkin_05.png',
    description: 'Token commemorating a friendship forged in defiance of the ritual. Has an escalating chance to completely block incoming hits.',
    location: 'Given by Nymm in Dirtmouth after banishing the Grimm Troupe',
    category: 'utility',
    synergies: ['Stalwart Shell']
  },
  {
    id: 'grimmchild',
    name: 'Grimmchild',
    notches: 2,
    image: '/images/charms/grimmchild---charm_grimmkin_01.png',
    description: 'Worn by those who take part in the Grimm Troupe Ritual. Summons a companion that spits scarlet fireballs at foes.',
    location: 'Gifted by Troupe Master Grimm upon lighting the Nightmare Lantern',
    category: 'utility',
    synergies: ['Upgrades through 4 stages by harvesting scarlet flames']
  },
  {
    id: 'kingsoul',
    name: 'Kingsoul / Void Heart',
    notches: 5,
    image: '/images/charms/void-heart---charm_black.png',
    description: 'Holy charm symbolizing the union between higher beings. Transforms into Void Heart in the Abyss (0 notches), unifying the Void under the bearer’s will.',
    location: 'Half from the White Lady, half from the Pale King in the White Palace',
    category: 'soul',
    synergies: ['Allows access to the true endings and the Radiance encounter']
  }
];
