# Hallownest &bull; Hollow Knight Fan Encyclopedia

An immersive, fan-made interactive encyclopedia and compendium exploring the gothic depths, lost kingdoms, silent gods, and dark mysteries of Team Cherry’s *Hollow Knight*.

Built with the **Hallownest Dark Editorial** design system, Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, and Motion.

---

## ✦ Key Features

1. **Pantheon of Gods (Godhome Showcase)**
   - Interactive horizontal carousel and dedicated dossiers for all 29 Pantheon bosses.
   - Comprehensive metrics: Attuned HP, Ascended HP, Radiant 1-Hit mechanics, Mask damage, Hunter’s Journal lore, and tactical combat advice.
   - Per-boss conquest status tracking and favorites.

2. **Cartographer’s Interactive Map**
   - Spatial map featuring coordinate-verified waypoints across Hallownest.
   - Categorized filters for benches, stag stations, boss sanctums, dreamers, whisper roots, and merchants.
   - Dual-view interface: interactive spatial map and accessible POI directory.

3. **Charms & Notch Loadout Planner**
   - Full collection of all 40 charms with notch costs, locations, synergies, and categories.
   - Dynamic 11-notch loadout builder with instant **Overcharmed** warning state (2x damage taken).

4. **Characters, Royalty & Dreamers**
   - In-depth profiles of Hornet, Quirrel, the Three Dreamers (Monomon, Lurien, Herrah), the Pale King, the White Lady, and the Five Great Knights.

5. **Arsenal & Relics**
   - Complete guides for movement abilities (Mothwing Cloak, Mantis Claw, Monarch Wings, Shade Cloak), Spells (Vengeful Spirit, Desolate Dive, Howling Wraiths and Shade upgrades), Nails, and Key Relics.

6. **Hallownest Gazette (Biomes & Regions)**
   - Curated exploration of all 12 iconic regions from Dirtmouth to the Abyss, complete with environmental banners, sub-areas, and resident threats.

7. **Ancient Tablets & Mythology**
   - Transcribed ancient tablets, lore chapters detailing the Wyrm’s metamorphosis, the Radiance’s Infection, and the Void.

8. **Hunter’s Journal Exploration Tracker**
   - LocalStorage-persisted exploration manager: track visited regions, defeated bosses, collected charms, and broken Dreamer seals.
   - Zero login or account required.
   - JSON export and import for seamless cross-device portability.

---

## 🎨 Design System: Hallownest Dark Editorial

- **Color Palette**:
  - Void Canvas: `#0B0D12`
  - Hallownest Slate: `#141922`
  - Deep Chasm: `#1D2530`
  - Spectral Cyan: `#83BFD0`
  - Pale Ore: `#E7EAF0`
  - Lumafly Gold: `#C4A77D`
  - Grimm Scarlet / Overcharm: `#E58B86`
- **Typography**:
  - Headings & Lore: `Cormorant Garamond` (editorial serif)
  - UI & Analytics: `Inter` (sans-serif)
- **Asset Architecture**:
  - `public/images/backgrounds/`: Atmospheric backdrops and titles.
  - `public/images/bosses/`: Transparent Hunter’s Journal boss portraits.
  - `public/images/characters/`: NPCs, Dreamers, and Royals.
  - `public/images/charms/`: 40 distinct game charm sprites.
  - `public/images/items/`: Spells, movement abilities, and nails.
  - `public/images/regions/`: Regional landscape banners.
  - `public/images/ui/`: Crests, notches, and seals.
  - `public/icons/`: Map waypoint pins.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.4.0 (Turbopack, App Router)
- **Library**: React 19.3.0
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage with JSON backup/restore (optional Supabase synchronization ready)


---

## ⚖️ Legal & Attribution

*Hollow Knight* is developed and owned by **Team Cherry**. This is an unofficial, non-commercial fan-created compendium and encyclopedia made under fair use. All game sprites and extracted assets are credited to Team Cherry and the community extraction archives curated by Sumwan.
