export type BossCategory = 'main' | 'dream' | 'godhome' | 'pantheon_master';

export interface Boss {
  id: string;
  name: string;
  title: string;
  location: string;
  pantheon: string;
  health: number;
  healthAttuned?: number;
  healthAscended?: number;
  healthRadiant?: number;
  nailDamage: number | string;
  image: string;
  description: string;
  hunterNotes: string;
  tactics: string[];
  rewards: string[];
  relatedCharacters?: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
}

export type CharmNotchCost = 1 | 2 | 3 | 4 | 5;

export interface Charm {
  id: string;
  name: string;
  notches: CharmNotchCost;
  image: string;
  description: string;
  location: string;
  acquisitionCost?: string;
  category: 'combat' | 'soul' | 'movement' | 'utility' | 'lifeblood';
  synergies: string[];
}

export interface Character {
  id: string;
  name: string;
  title: string;
  role: 'npc' | 'vendor' | 'dreamer' | 'knight' | 'royalty' | 'warrior';
  location: string;
  image: string;
  quote: string;
  lore: string;
  questlineSummary: string;
}

export interface Region {
  id: string;
  name: string;
  tagline: string;
  bannerImage: string;
  mapImage: string;
  themeColor: string;
  atmosphere: string;
  description: string;
  subAreas: string[];
  bossIds: string[];
  characterIds: string[];
  keyItems: string[];
  loreSnippet: string;
}

export interface GameItem {
  id: string;
  name: string;
  type: 'movement' | 'nail' | 'spell' | 'relic' | 'key' | 'collectible';
  image: string;
  description: string;
  location: string;
  upgradeFrom?: string;
  effect: string;
}

export interface LoreEntry {
  id: string;
  title: string;
  subtitle: string;
  category: 'ancient_history' | 'higher_beings' | 'the_infection' | 'kingdom_fall' | 'vessels_void';
  content: string[];
  tabletInscription?: string;
  relatedEntities: { name: string; url: string }[];
}

export interface MapPoint {
  id: string;
  name: string;
  regionId: string;
  type: 'bench' | 'stag' | 'boss' | 'dreamer' | 'shop' | 'whisper_root' | 'grub' | 'tram' | 'godseeker';
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  description: string;
}

export interface ExplorationState {
  visitedRegions: string[];
  defeatedBosses: string[];
  collectedCharms: string[];
  unlockedItems: string[];
  brokenDreamers: string[];
  equippedCharms: string[];
  totalNotches: number;
  favorites: string[];
  notes: string;
}
