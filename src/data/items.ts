import { GameItem } from '@/types';

export const itemsData: GameItem[] = [
  // Movement & Abilities
  {
    id: 'mothwing-cloak',
    name: 'Mothwing Cloak',
    type: 'movement',
    image: '/images/items/mothwing-cloak.png',
    description: 'Cloak spun from mothwings. Allows the bearer to perform a rapid horizontal dash along the ground or mid-air.',
    location: 'Greenpath (Claimed after defeating Hornet)',
    effect: 'Horizontal dash on ground or in air. Refreshes upon landing or wall jump.'
  },
  {
    id: 'mantis-claw',
    name: 'Mantis Claw',
    type: 'movement',
    image: '/images/items/mantis-claw.png',
    description: 'Claw carved from bone mantis hooks. Allows the bearer to cling to vertical walls and leap upward to scale vertical shafts.',
    location: 'Mantis Village, Fungal Wastes',
    effect: 'Wall jump and wall slide mechanics.'
  },
  {
    id: 'crystal-heart',
    name: 'Crystal Heart',
    type: 'movement',
    image: '/images/items/crystal-heart.png',
    description: 'The energy core of an ancient mining golem fashioned around a luminescent crystal. Fires a jet of energy to propel the bearer infinitely forward.',
    location: 'Crystal Peak, deep within the abandoned mining machinery',
    effect: 'Super Dash: Infinite flight in a straight horizontal line until hitting a wall or cancelling.'
  },
  {
    id: 'monarch-wings',
    name: 'Monarch Wings',
    type: 'movement',
    image: '/images/items/monarch-wings.png',
    description: 'Wings of ethereal matter that shimmer in the darkness. Allows the bearer to execute a second leap in mid-air.',
    location: 'Ancient Basin (Guarded by the Broken Vessel)',
    effect: 'Double jump in mid-air.'
  },
  {
    id: 'ismas-tear',
    name: 'Isma’s Tear',
    type: 'movement',
    image: '/images/items/ismas-tear.png',
    description: 'A crystalline droplet formed from the essence of Great Knight Isma. Emits a protective aura that shields the bearer from corrosive acid.',
    location: 'Isma’s Grove, Royal Waterways',
    effect: 'Permanent acid immunity. Allows swimming in all acidic lakes and rivers.'
  },
  {
    id: 'shade-cloak',
    name: 'Shade Cloak',
    type: 'movement',
    image: '/images/items/shade-cloak.png',
    description: 'Cloak formed from the primordial substance of the Abyss. Upgrades the dash, allowing the bearer to pass completely through enemy bodies, attacks, and black Void Gates unharmed.',
    location: 'The Abyss (Bathed in the fountain of living Void beyond the lighthouse)',
    upgradeFrom: 'mothwing-cloak',
    effect: 'Invulnerable shadow dash on a short cooldown; can bypass Void Gates and incoming damage.'
  },

  // Spells
  {
    id: 'vengeful-spirit',
    name: 'Vengeful Spirit',
    type: 'spell',
    image: '/images/items/vengeful-spirit.png',
    description: 'Draw upon Soul to conjure a flying spirit that flies forward, burning foes with arcane energy.',
    location: 'Ancestral Mound, Forgotten Crossroads (Gifted by Snail Shaman)',
    effect: 'Ranged horizontal spell projectile dealing 15 damage.'
  },
  {
    id: 'shade-soul',
    name: 'Shade Soul',
    type: 'spell',
    image: '/images/items/shade-soul.png',
    description: 'Shadow-infused evolution of Vengeful Spirit. Conjures a piercing entity made of Void that passes through walls and hits multiple times.',
    location: 'Soul Sanctum, behind the Elegant Key locked door',
    upgradeFrom: 'vengeful-spirit',
    effect: 'Pierces through obstacles and foes dealing 30 damage.'
  },
  {
    id: 'desolate-dive',
    name: 'Desolate Dive',
    type: 'spell',
    image: '/images/items/desolate-dive.png',
    description: 'Strike the ground with concentrated Soul, producing a damaging shockwave that shatters unstable stone floors.',
    location: 'Soul Sanctum (Acquired from Soul Master)',
    effect: 'Downward dive with shockwaves; shatters breakable floors and gives invulnerability frames.'
  },
  {
    id: 'descending-dark',
    name: 'Descending Dark',
    type: 'spell',
    image: '/images/items/descending-dark.png',
    description: 'Void evolution of Desolate Dive. Slams the ground with immense shadow energy, unleashing multiple devastating shockwaves and generous invulnerability.',
    location: 'Crystallised Mound, Crystal Peak',
    upgradeFrom: 'desolate-dive',
    effect: 'Massive damage (up to 80 damage across waves) with longest invulnerability window in the game.'
  },
  {
    id: 'howling-wraiths',
    name: 'Howling Wraiths',
    type: 'spell',
    image: '/images/items/howling-wraiths.png',
    description: 'Release a torrent of wailing Soul straight into the air above the bearer to blast airborne targets.',
    location: 'Overgrown Mound, Fog Canyon',
    effect: 'Upward blast hitting 3 times for 30 total damage.'
  },
  {
    id: 'abyss-shriek',
    name: 'Abyss Shriek',
    type: 'spell',
    image: '/images/items/abyss-shriek.png',
    description: 'Void evolution of Howling Wraiths. Channels the rage of the Abyss in an apocalyptic upward pillar of darkness.',
    location: 'The Abyss (Cast Howling Wraiths on the pedestal in the lower-left chamber)',
    upgradeFrom: 'howling-wraiths',
    effect: 'Devastating upward multi-hit pillar dealing 80 damage (120 with Shaman Stone).'
  },

  // Nail Upgrades
  {
    id: 'old-nail',
    name: 'Old Nail',
    type: 'nail',
    image: '/images/items/old-nail.png',
    description: 'A traditional blade of Hallownest. Its edge is blunted by centuries of time and neglect.',
    location: 'Default starting weapon',
    effect: 'Base nail damage: 5 per slash.'
  },
  {
    id: 'sharpened-nail',
    name: 'Sharpened Nail',
    type: 'nail',
    image: '/images/items/sharpened-nail.png',
    description: 'Refined by the Nailsmith in the City of Tears to restore a keen cutting edge.',
    location: 'City of Tears (Nailsmith Forge)',
    effect: 'Nail damage: 9 per slash. Cost: 250 Geo.'
  },
  {
    id: 'channeled-nail',
    name: 'Channeled Nail',
    type: 'nail',
    image: '/images/items/channeled-nail.png',
    description: 'Carved with elegant grooves to channel the bearer’s swings with deadly precision.',
    location: 'City of Tears (Nailsmith Forge)',
    effect: 'Nail damage: 13 per slash. Cost: 800 Geo + 1 Pale Ore.'
  },
  {
    id: 'coiled-nail',
    name: 'Coiled Nail',
    type: 'nail',
    image: '/images/items/coiled-nail.png',
    description: 'An exquisite weapon reforged with layers of hardened ore, cutting deep through chitin.',
    location: 'City of Tears (Nailsmith Forge)',
    effect: 'Nail damage: 17 per slash. Cost: 2000 Geo + 2 Pale Ore.'
  },
  {
    id: 'pure-nail',
    name: 'Pure Nail',
    type: 'nail',
    image: '/images/items/pure-nail.png',
    description: 'The pinnacle of blade craft. Flawless in balance and lethal beyond measure.',
    location: 'City of Tears (Nailsmith Forge)',
    effect: 'Nail damage: 21 per slash. Cost: 4000 Geo + 3 Pale Ore.'
  },

  // Key Items & Relics
  {
    id: 'dream-nail',
    name: 'Dream Nail',
    type: 'relic',
    image: '/images/items/dream-nail.png',
    description: 'A mystical blade that can slice the veil between the waking world and dreams. Cuts into minds, whispers, and memories.',
    location: 'Resting Grounds (Gifted by the Seer)',
    effect: 'Reads thoughts of NPCs and enemies, harvests Essence, unlocks Dream Bosses and Godhome.'
  },
  {
    id: 'kings-brand',
    name: 'King’s Brand',
    type: 'key',
    image: '/images/items/kings-brand.png',
    description: 'Hallownest’s highest royal sigil, branded onto the Knight’s shell from the Wyrm’s molted remains.',
    location: 'Cast-off Shell, Kingdom’s Edge (Past Hornet Sentinel)',
    effect: 'Opens the colossal sealed stone gate into the Abyss in the Ancient Basin.'
  },
  {
    id: 'lumafly-lantern',
    name: 'Lumafly Lantern',
    type: 'relic',
    image: '/images/items/lumafly-lantern.png',
    description: 'A glass lantern housing a brilliant lumafly that illuminates the darkest tunnels of Hallownest.',
    location: 'Purchased from Sly in Dirtmouth (1800 Geo)',
    effect: 'Illuminates pitch-black caves such as Crystal Peak chasms, Deepnest, and Stone Sanctuary.'
  },
  {
    id: 'delicate-flower',
    name: 'Delicate Flower',
    type: 'collectible',
    image: '/images/items/delicate-flower.png',
    description: 'A fragile white blossom from a land beyond Hallownest. Shivers with pale light; shatters if the bearer takes a single hit of damage or teleports.',
    location: 'Resting Grounds (Entrusted by the Grey Mourner Ze’mer)',
    effect: 'Can be delivered to the Traitor’s Child’s grave, the Godseeker, or Elderbug.'
  },
  {
    id: 'pale-ore',
    name: 'Pale Ore',
    type: 'relic',
    image: '/images/items/pale-ore.png',
    description: 'Rare luminescent metal used exclusively by the Nailsmith to forge legendary nail improvements.',
    location: 'Found across Hallownest (6 total pieces: Seer, Colosseum, Nosk, Hallownest’s Crown, Grubfather, Deepnest)',
    effect: 'Required material for upgrading from Sharpened to Pure Nail.'
  },
  {
    id: 'godtuner',
    name: 'Godtuner',
    type: 'relic',
    image: '/images/items/godtuner.png',
    description: 'An ornate mechanical tuning fork that vibrates in resonance with mighty gods across the kingdom.',
    location: 'Junk Pit, Royal Waterways (Inside the Godseeker’s cocoon)',
    effect: 'Tracks Godhome pantheon resonance and unlocked bosses for the Hall of Gods.'
  }
];
