import { MapPoint } from '@/types';

export const mapPointsData: MapPoint[] = [
  // Benches
  {
    id: 'bench-dirtmouth',
    name: 'Dirtmouth Bench',
    regionId: 'dirtmouth',
    type: 'bench',
    x: 48,
    y: 12,
    description: 'The iconic bench next to Elderbug, listening to the desolate wind and the singing well.'
  },
  {
    id: 'bench-crossroads-hotspring',
    name: 'Crossroads Hot Spring Bench',
    regionId: 'forgotten-crossroads',
    type: 'bench',
    x: 52,
    y: 28,
    description: 'Steaming hot spring water that replenishes Soul alongside a resting bench.'
  },
  {
    id: 'bench-greenpath-waterfall',
    name: 'Greenpath Waterfall Bench',
    regionId: 'greenpath',
    type: 'bench',
    x: 24,
    y: 32,
    description: 'Surrounded by lush moss vines and dripping emerald waters.'
  },
  {
    id: 'bench-city-spire',
    name: 'City of Tears Spire Bench',
    regionId: 'city-of-tears',
    type: 'bench',
    x: 58,
    y: 52,
    description: 'Sitting beside a massive bay window with Quirrel while the eternal rain falls outside.'
  },
  {
    id: 'bench-mantis-village',
    name: 'Mantis Village Bench',
    regionId: 'fungal-wastes',
    type: 'bench',
    x: 38,
    y: 58,
    description: 'Guarded by bowed Mantis warriors after proving your worth to the Mantis Lords.'
  },
  {
    id: 'bench-deepnest-hotspring',
    name: 'Deepnest Hot Spring Bench',
    regionId: 'deepnest',
    type: 'bench',
    x: 18,
    y: 68,
    description: 'A brief oasis of light and warmth in the pitch black horror of Deepnest.'
  },

  // Stag Stations
  {
    id: 'stag-dirtmouth',
    name: 'Dirtmouth Stag Station',
    regionId: 'dirtmouth',
    type: 'stag',
    x: 55,
    y: 13,
    description: 'The first stag station, ringing the bell summons the Last Stag to carry travelers across the ancient kingdom.'
  },
  {
    id: 'stag-crossroads',
    name: 'Crossroads Stag Station',
    regionId: 'forgotten-crossroads',
    type: 'stag',
    x: 60,
    y: 26,
    description: 'Central transit hub connecting to the capital.'
  },
  {
    id: 'stag-greenpath',
    name: 'Greenpath Stag Station',
    regionId: 'greenpath',
    type: 'stag',
    x: 20,
    y: 26,
    description: 'Carved directly into moss-covered roots near the Stone Sanctuary.'
  },
  {
    id: 'stag-queens-station',
    name: 'Queen’s Station',
    regionId: 'fungal-wastes',
    type: 'stag',
    x: 32,
    y: 44,
    description: 'Monumental transit hub bridging the Fungal Wastes and Fog Canyon.'
  },
  {
    id: 'stag-city-storerooms',
    name: 'City Storerooms Stag Station',
    regionId: 'city-of-tears',
    type: 'stag',
    x: 54,
    y: 46,
    description: 'Western entrance into the capital towers.'
  },
  {
    id: 'stag-kings-station',
    name: 'King’s Station',
    regionId: 'city-of-tears',
    type: 'stag',
    x: 68,
    y: 56,
    description: 'The grandest royal stag station in Hallownest, connecting to Kingdom’s Edge and the Waterways.'
  },
  {
    id: 'stag-resting-grounds',
    name: 'Resting Grounds Stag Station',
    regionId: 'resting-grounds',
    type: 'stag',
    x: 74,
    y: 34,
    description: 'Solemn bell tower adjacent to the Seer and the catacombs.'
  },
  {
    id: 'stag-distant-village',
    name: 'Distant Village Stag Station',
    regionId: 'deepnest',
    type: 'stag',
    x: 10,
    y: 62,
    description: 'The furthest outpost of the Stag network in the web-woven heights of Deepnest.'
  },

  // Dreamers & Bosses
  {
    id: 'dreamer-monomon',
    name: 'Monomon the Teacher (Archives)',
    regionId: 'forgotten-crossroads',
    type: 'dreamer',
    x: 26,
    y: 40,
    description: 'Slumbering in her luminous liquid tank within the Teacher’s Archives.'
  },
  {
    id: 'dreamer-lurien',
    name: 'Lurien the Watcher (Spire)',
    regionId: 'city-of-tears',
    type: 'dreamer',
    x: 62,
    y: 48,
    description: 'Slumbering in his bed atop the Watcher’s Spire guarded by six armored knights.'
  },
  {
    id: 'dreamer-herrah',
    name: 'Herrah the Beast (Beast’s Den)',
    regionId: 'deepnest',
    type: 'dreamer',
    x: 8,
    y: 56,
    description: 'Entombed in silk webbing within the heart of the spider lair.'
  },
  {
    id: 'boss-black-egg',
    name: 'Temple of the Black Egg (The Hollow Knight)',
    regionId: 'forgotten-crossroads',
    type: 'boss',
    x: 48,
    y: 22,
    description: 'The colossal chained black shell sealed by the masks of the three Dreamers.'
  },
  {
    id: 'boss-mantis-throne',
    name: 'Mantis Lords Throne',
    regionId: 'fungal-wastes',
    type: 'boss',
    x: 36,
    y: 62,
    description: 'The three Mantis Lords seated on high bone thrones overlooking the pit into Deepnest.'
  },
  {
    id: 'boss-soul-sanctum',
    name: 'Soul Master (Soul Sanctum)',
    regionId: 'city-of-tears',
    type: 'boss',
    x: 52,
    y: 42,
    description: 'Grand laboratory where scholars hoarded life essence.'
  },
  {
    id: 'boss-colosseum',
    name: 'Colosseum of Fools',
    regionId: 'kingdoms-edge',
    type: 'boss',
    x: 78,
    y: 24,
    description: 'Hanging corpse of an ancient creature converted into a gladiatorial arena for the entertainment of ghosts.'
  },

  // Shops & NPCs
  {
    id: 'shop-sly',
    name: 'Sly’s General Store',
    regionId: 'dirtmouth',
    type: 'shop',
    x: 50,
    y: 11,
    description: 'Sells Mask Shards, Vessel Fragments, Simple Keys, and lumafly lanterns.'
  },
  {
    id: 'shop-cornifer',
    name: 'Iselda & Cornifer’s Cartography Shop',
    regionId: 'dirtmouth',
    type: 'shop',
    x: 52,
    y: 12,
    description: 'Supplies quills, Wayward Compass, map pins, and area charts.'
  },
  {
    id: 'shop-salubra',
    name: 'Salubra’s Charm Emporium',
    regionId: 'forgotten-crossroads',
    type: 'shop',
    x: 64,
    y: 30,
    description: 'Offers charms, extra charm notches, and Salubra’s Blessing.'
  },
  {
    id: 'shop-nailsmith',
    name: 'The Nailsmith’s Forge',
    regionId: 'city-of-tears',
    type: 'shop',
    x: 44,
    y: 54,
    description: 'The solitary blacksmith on the western edge of the City, reforging your nail with Pale Ore.'
  },
  {
    id: 'shop-lemm',
    name: 'Relic Seeker Lemm',
    regionId: 'city-of-tears',
    type: 'shop',
    x: 54,
    y: 52,
    description: 'Trades ancient Hallownest Seals, King’s Idols, and Arcane Eggs for thousands of Geo.'
  },
  {
    id: 'godseeker-junkpit',
    name: 'Godseeker (Junk Pit)',
    regionId: 'royal-waterways',
    type: 'godseeker',
    x: 42,
    y: 66,
    description: 'Mysterious golden-masked entity sleeping in the garbage heaps of the waterways. Dream-nail her to enter Godhome.'
  }
];
