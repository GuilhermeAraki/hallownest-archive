import { Character } from '@/types';

export const charactersData: Character[] = [
  {
    id: 'the-knight',
    name: 'The Knight',
    title: 'The Ghost of Hallownest',
    role: 'warrior',
    location: 'Wandering Hallownest',
    image: '/images/characters/the-knight-pure.png',
    quote: '...',
    lore: 'A discarded vessel originating from the dark depths of the Abyss. Drawn back to Hallownest by the resonance of a dying kingdom, carrying an old nail and a hollow mask.',
    questlineSummary: 'Ascend from King’s Pass, conquer the ruins, unbind the three Dreamers, reclaim the Void Heart from the Abyss, and choose the fate of Hallownest.'
  },
  {
    id: 'hornet',
    name: 'Hornet',
    title: 'Protector of Hallownest & Daughter of Hallownest',
    role: 'warrior',
    location: 'Greenpath, City of Tears, Kingdom’s Edge',
    image: '/images/bosses/hornet.png',
    quote: 'I know what you are. I know the choice you face. Tread carefully, little ghost.',
    lore: 'Offspring of the Pale King and Herrah the Beast, born as part of the bargain to secure Herrah as an eternal Dreamer. Skilled with needle and thread, she guards the seals against unworthy claimants.',
    questlineSummary: 'Challenges the Knight in Greenpath and Kingdom’s Edge, provides crucial guidance at the Black Egg, and intervenes in the final duel against the Hollow Knight.'
  },
  {
    id: 'the-pale-king',
    name: 'The Pale King',
    title: 'Wyrm God of Hallownest',
    role: 'royalty',
    location: 'White Palace (Dream Realm)',
    image: '/images/characters/the-pale-king.png',
    quote: 'No cost too great. No mind to think. No will to break.',
    lore: 'A colossal ancient Wyrm who shed his titanic form at Cast-off Shell to be reborn in the diminutive likeness of a beacon bug, bestowing intellect and free thought upon the bugs of Hallownest.',
    questlineSummary: 'Ruled from the White Palace until the infection returned. Desperately forged thousands of vessels from Void and Godhood, hiding the palace within dreams when all hope failed.'
  },
  {
    id: 'the-white-lady',
    name: 'The White Lady',
    title: 'Queen of Hallownest',
    role: 'royalty',
    location: 'Queen’s Gardens',
    image: '/images/characters/white-lady.png',
    quote: 'I have bound myself here so my rampant breeding might not overflow this sacred sanctuary.',
    lore: 'A Higher Being of plant-like nature and queen to the Pale King. Consumed by guilt over the sacrifice of the vessel children, she bound her vast limbs in the heart of the Queen’s Gardens.',
    questlineSummary: 'Bestows the first half of the Kingsoul charm upon the Knight and recognizes the Knight as the true vessel who can surpass the Hollow Knight.'
  },
  {
    id: 'lurien-the-watcher',
    name: 'Lurien the Watcher',
    title: 'Dreamer of the Spire',
    role: 'dreamer',
    location: 'Watcher’s Spire, City of Tears',
    image: '/images/characters/lurien.png',
    quote: 'For the King, I watch. For the kingdom, I sleep.',
    lore: 'The loyal recluse of the City of Tears who governed and monitored the metropolis from high atop his celestial telescope. Slept voluntarily to seal the Black Egg out of pure loyalty.',
    questlineSummary: 'Protected by the six Watcher Knights at the peak of his spire. Slumbers silently in his bed until the Knight cuts the veil with the Dream Nail.'
  },
  {
    id: 'monomon-the-teacher',
    name: 'Monomon the Teacher',
    title: 'Dreamer of the Archives',
    role: 'dreamer',
    location: 'Teacher’s Archives, Fog Canyon',
    image: '/images/characters/monomon.png',
    quote: 'The seal must break. A choice must be made.',
    lore: 'Chief archivist and intellectual of Hallownest. Unlike the other Dreamers, Monomon foresaw that the seal would inevitably decay and entrusted Quirrel with her mask as a fail-safe key.',
    questlineSummary: 'Awaits the Knight in her preservation tank in Fog Canyon. Aided by Quirrel, who shatters her protective shield in the climax of the Uumuu encounter.'
  },
  {
    id: 'herrah-the-beast',
    name: 'Herrah the Beast',
    title: 'Dreamer of Deepnest',
    role: 'dreamer',
    location: 'Beast’s Den, Distant Village',
    image: '/images/characters/herrah.png',
    quote: 'A child for a seal... a daughter to inherit our blood.',
    lore: 'Queen of the spider tribe of Deepnest. Refused to bend the knee to the Pale King until he agreed to sire a royal child with her—the birth of Hornet.',
    questlineSummary: 'Resting deep within the spider-silk cocoons of the Beast’s Den. Her seal is defended by the treacherous Distant Villagers and Stalking Devouts.'
  },
  {
    id: 'quirrel',
    name: 'Quirrel',
    title: 'Inquisitive Scholar',
    role: 'npc',
    location: 'Dirtmouth, Greenpath, City of Tears, Blue Lake',
    image: '/images/characters/the-knight-pure.png',
    quote: 'To see this ancient kingdom in all its ruin and glory... I feel blessed to have wandered it.',
    lore: 'Former assistant to Monomon the Teacher. Left Hallownest to wander the wastes beyond, losing his memory until the calling of the kingdom summoned him back with Monomon’s mask.',
    questlineSummary: 'Accompanies the Knight at benches across Hallownest, strikes Uumuu to shatter its acid shield, and finally rests peacefully at the shore of the Blue Lake.'
  },
  {
    id: 'zote-the-mighty',
    name: 'Zote the Mighty',
    title: 'A Knight of Great Renown',
    role: 'warrior',
    location: 'Greenpath, Deepnest, Colosseum of Fools, Dirtmouth',
    image: '/images/characters/zote-the-mighty.png',
    quote: 'Always steal the glory. Never pay for drinks. Rule 1 of the 57 Precepts of Zote.',
    lore: 'A delusional traveler from beyond Hallownest carrying a carved wooden nail named "Life Ender". Constantly blunders into peril yet loudly proclaims himself the greatest warrior alive.',
    questlineSummary: 'Rescued from a Vengefly King and Deepnest spiders, defeated effortlessly in the Colosseum, and spends his days in Dirtmouth reciting his 57 Precepts to an entranced Bretta.'
  },
  {
    id: 'ogrim-dung-defender',
    name: 'Ogrim (Dung Defender)',
    title: 'The Loyal Knight',
    role: 'knight',
    location: 'Royal Waterways',
    image: '/images/bosses/dung-defender.png',
    quote: 'Isma... Dryya... Hegemol... Ze’mer... do you watch from above? Our kingdom still stands in our hearts!',
    lore: 'The most boisterous and steadfast of the Pale King’s Five Great Knights. Even after the kingdom fell and his comrades perished, he remains at his post in the waterways.',
    questlineSummary: 'Duels the Knight in honorable battle, recognizes the Knight’s noble demeanor, sculpts dung statues of the Five Great Knights, and sleeps peacefully dreaming of the White Court.'
  },
  {
    id: 'hegemol',
    name: 'Hegemol',
    title: 'The Great Champion',
    role: 'knight',
    location: 'Hallownest History / Crossroads',
    image: '/images/characters/hegemol.png',
    quote: 'Known for his towering humor and an armor that turned aside all blades.',
    lore: 'One of the Five Great Knights celebrated for his immense stature, kindness, and invincible shell. His armor was stolen while he slept by a desperate maggot who became the False Knight.',
    questlineSummary: 'Immortalized in stone statues at the entrance of the City of Tears and in Ogrim’s waterway shrine.'
  },
  {
    id: 'dryya',
    name: 'Dryya',
    title: 'The Fierce Protector',
    role: 'knight',
    location: 'Queen’s Gardens',
    image: '/images/characters/dryya.png',
    quote: 'She guarded the Queen with razor fangs and unyielding ferocity.',
    lore: 'The fiercest and most agile of the Five Great Knights. Personally escorted the White Lady to her refuge in the Queen’s Gardens.',
    questlineSummary: 'Her armored corpse rests surrounded by dozens of slaughtered traitor mantises directly outside the White Lady’s inner chamber.'
  },
  {
    id: 'ze-mer-grey-mourner',
    name: 'Ze’mer (The Grey Mourner)',
    title: 'The Mournful Knight',
    role: 'knight',
    location: 'Resting Grounds',
    image: '/images/characters/ze-mer.png',
    quote: 'Wai, che’! Le’mer, carry this delicate petal to che’s beloved in the far gardens...',
    lore: 'A mysterious knight who arrived from a distant land beyond Hallownest and fell in love with the daughter of the Mantis Traitor Lord.',
    questlineSummary: 'Gives the Knight the legendary Delicate Flower quest: transport the fragile bloom across Hallownest to the Traitor’s Child’s grave without taking damage or riding the Stag.'
  },
  {
    id: 'isma',
    name: 'Isma',
    title: 'The Gentle Knight',
    role: 'knight',
    location: 'Isma’s Grove, Royal Waterways',
    image: '/images/characters/isma.png',
    quote: 'Her compassion was a spring that fed the deepest groves.',
    lore: 'The gentlest of the Five Great Knights, whose physical body dissolved after death into a wondrous living tree in the waterways, bearing acidic immunity for those worthy.',
    questlineSummary: 'Her grove holds Isma’s Tear, granting the Knight permanent immunity to acidic waters across Hallownest.'
  },
  {
    id: 'the-hunter',
    name: 'The Hunter',
    title: 'Master of the Journal',
    role: 'npc',
    location: 'Greenpath',
    image: '/images/characters/the-hunter.png',
    quote: 'To hunt is to know the beast. To kill is to become the predator.',
    lore: 'A solitary predator hidden in a moss-covered burrow in Greenpath. Tests travelers to see if they possess the true spirit of a hunter.',
    questlineSummary: 'Bestows the Hunter’s Journal upon the Knight and awards the Hunter’s Mark once every creature in Hallownest is cataloged and conquered.'
  }
];
