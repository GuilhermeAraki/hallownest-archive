import { LoreEntry } from '@/types';

export const loreData: LoreEntry[] = [
  {
    id: 'higher-beings',
    title: 'Higher Beings and Ancient Gods',
    subtitle: 'The divine wills that shaped the subterranean realms',
    category: 'higher_beings',
    tabletInscription: 'Higher beings, these words are for you alone. Your great strength marks you amongst us. Focus your soul and you shall achieve feats of which others can only dream.',
    content: [
      'Hallownest is not a simple natural ecosystem; its very stones, fauna, and flora are dictated by the wills of colossal divine entities known as Higher Beings.',
      'The Pale King, a Wyrm who shed his titanic form at Kingdom’s Edge to be reborn as a beacon bug, bestowed minds, sapience, and civilization upon the native insects through his pale light.',
      'The White Lady, a root-like god of bountiful fertility, united with the Wyrm to establish the royal court, binding her unruly growth in the Queen’s Gardens out of later remorse.',
      'The Radiance, an ancient sun moth embodying pure light and dream essence, was worshipped by the Moth Tribe long before the Wyrm arrived. Her jealousy and rage over being forgotten catalyzed the great ruin of the kingdom.',
      'Unn, the ancient slug deity of Greenpath, dreamed the emerald moss caverns into existence, though her power waned as the Pale King expanded his domain.',
      'The Void, the black substance pooled in the Abyss beneath the earth, represents the antithesis of light and will—eventually given unified focus through the Knight to become the Shade Lord.'
    ],
    relatedEntities: [
      { name: 'The Pale King', url: '/characters/the-pale-king' },
      { name: 'The Radiance', url: '/bosses/the-radiance' },
      { name: 'The White Lady', url: '/characters/the-white-lady' }
    ]
  },
  {
    id: 'the-infection',
    title: 'The Infection and the Dream Realm',
    subtitle: 'The return of the forgotten light and the fall of reason',
    category: 'the_infection',
    tabletInscription: 'The light that blinds... the light that burns... it seeped into our dreams when we dared to close our eyes.',
    content: [
      'The Infection began not as a physical poison, but as an insidious golden resonance within the dreams of Hallownest bugs.',
      'Those who succumbed experienced euphoric dreams of warmth, strength, and community, but woke with swollen bodies, orange glowing eyes, and stripped free will.',
      'The Soul Sanctum scholars sought to counter the disease by hoarding the Soul of commoners, but only succeeded in degenerating into bloated abominations.',
      'The Mantis Tribe resisted through sheer iron discipline and stubborn cultural pride, though the fourth lord and his followers succumbed voluntarily for the promise of raw strength.'
    ],
    relatedEntities: [
      { name: 'Soul Master', url: '/bosses/soul-master' },
      { name: 'Traitor Lord', url: '/bosses/traitor-lord' },
      { name: 'The Radiance', url: '/bosses/the-radiance' }
    ]
  },
  {
    id: 'vessels-and-void',
    title: 'The Vessels, the Abyss, and the Hollow Seal',
    subtitle: 'Children born of God and Void, forged to contain an eternity',
    category: 'vessels_void',
    tabletInscription: 'No mind to think. No will to break. No voice to cry suffering. Born of God and Void. You shall seal the blinding light that plagues their dreams. You are the Vessel. You are the Hollow Knight.',
    content: [
      'Faced with the extinction of his kingdom, the Pale King formulated a ruthless plan: create an empty shell imbued with the Void to trap the Radiance within itself.',
      'Countless eggs produced by the Pale King and the White Lady were deposited directly into the Abyss, where the Void seeped into the unborn embryos, extinguishing their individual souls.',
      'Only one Vessel—the Hollow Knight—was chosen after climbing out of the chasm, while countless thousands of siblings tumbled backward into the dark.',
      'Yet the chosen Vessel was not truly empty. An idea instilled—a subtle bond of affection and pride between father and child—provided a fatal chink in its hollow armor, allowing the Radiance to erode its mind over centuries.'
    ],
    relatedEntities: [
      { name: 'The Hollow Knight', url: '/bosses/the-hollow-knight' },
      { name: 'Pure Vessel', url: '/bosses/pure-vessel' },
      { name: 'The Knight', url: '/characters/the-knight' }
    ]
  },
  {
    id: 'three-dreamers',
    title: 'The Three Dreamers and the Seal of Binding',
    subtitle: 'Lurien, Monomon, and Herrah—the eternal wardens',
    category: 'ancient_history',
    tabletInscription: 'To preserve Hallownest’s eternal peace, the three pledged their eternal slumber. Their masks guard the seal; only the dream-blade can wake the silent watcher.',
    content: [
      'Even with the Radiance trapped inside the Hollow Knight, the Pale King knew a secondary physical seal was necessary.',
      'The Temple of the Black Egg was sealed by the physical slumbers of three prominent figures who consented to sleep forever in the Dream Realm:',
      'Lurien the Watcher, who oversaw the City of Tears from his celestial spire, gave his sleep freely out of utter devotion to his sovereign.',
      'Monomon the Teacher, archivist of Fog Canyon, recognized that stagnation would lead to decay. She agreed to sleep, but hid a key with her apprentice Quirrel so the seal could eventually be challenged.',
      'Herrah the Beast, matriarch of Deepnest, bargained shrewdly: in exchange for her eternal sleep, the King had to grant her a royal child of noble blood, siring Hornet.'
    ],
    relatedEntities: [
      { name: 'Lurien the Watcher', url: '/characters/lurien-the-watcher' },
      { name: 'Monomon the Teacher', url: '/characters/monomon-the-teacher' },
      { name: 'Herrah the Beast', url: '/characters/herrah-the-beast' }
    ]
  },
  {
    id: 'five-great-knights',
    title: 'The Five Great Knights of Hallownest',
    subtitle: 'Champions of the Pale King who defended the golden age',
    category: 'kingdom_fall',
    tabletInscription: 'Five stood before the throne. Steel, compassion, armor, ferocity, and mournful light. Their names are carved into the heart of the capital.',
    content: [
      'During the height of Hallownest, five legendary warriors stood as the sworn champions of the White Court:',
      'Ogrim (Dung Defender): The ever-cheerful, loyal champion who stayed at his post in the waterways centuries after his kingdom dissolved.',
      'Hegemol: The colossal protector whose formidable armor turned aside every weapon; stolen while he slept by a maggot.',
      'Dryya: The fierce protector of the Queen, who died in a mountain of mantis corpses defending the White Lady.',
      'Isma: The gentle knight whose botanical grace became a spring of protective acid-defying tears.',
      'Ze’mer: The mysterious Grey Mourner who came from a distant realm and wept for her lost mantis lover.'
    ],
    relatedEntities: [
      { name: 'Ogrim (Dung Defender)', url: '/bosses/dung-defender' },
      { name: 'Ze’mer (The Grey Mourner)', url: '/characters/ze-mer-grey-mourner' },
      { name: 'Isma', url: '/characters/isma' }
    ]
  }
];
