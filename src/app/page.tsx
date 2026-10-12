import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PantheonCarousel } from '@/features/pantheon/PantheonCarousel';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Shield, 
  Map as MapIcon, 
  Sparkles, 
  BookOpen, 
  Compass, 
  ChevronRight,
  ArrowRight,
  Mountain,
  Users
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] w-full flex items-center justify-center overflow-hidden border-b border-white/10">
        {/* Layer 1: Voidheart atmospheric backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/backgrounds/voidheart_bg.png"
            alt="Voidheart Background"
            fill
            className="object-cover object-center filter brightness-90 contrast-110"
            priority
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-[#0B0D12]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/50 to-[#0B0D12]" />
        </div>

        {/* Ambient spectral glow effect */}
        <div className="pointer-events-none absolute top-1/4 h-96 w-96 rounded-full bg-[#83BFD0]/10 blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 space-y-6 pt-12">
          {/* Top Seal Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#141922]/80 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#83BFD0] animate-pulse" />
            <span className="text-xs font-medium tracking-widest text-[#83BFD0] uppercase">
              Hallownest Dark Editorial
            </span>
          </div>

          {/* Authentic Logo */}
          <div className="relative mx-auto h-28 sm:h-36 md:h-44 w-72 sm:w-96 md:w-[480px]">
            <Image
              src="/images/backgrounds/title_logo.png"
              alt="Hollow Knight Title"
              fill
              className="object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
              priority
            />
          </div>

          {/* Cinematic Subtitle */}
          <p className="mx-auto max-w-2xl font-serif text-lg sm:text-2xl font-light text-[#E7EAF0] leading-relaxed">
            An interactive compendium into the gothic depths, lost kingdoms, silent gods, and dark mysteries of Hallownest.
          </p>

          <p className="mx-auto max-w-xl text-xs sm:text-sm text-[#A3ACB8] leading-relaxed">
            Explore authentic boss dossiers of the Pantheon, inspect all 40 charms with interactive loadout planning, chart regional maps, and track your personal journey without registration.
          </p>

          {/* Calls to Action */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link href="/bosses">
              <Button size="lg" variant="spectral" icon={<Shield className="h-4 w-4" />}>
                Pantheon of Gods
              </Button>
            </Link>
            <Link href="/map">
              <Button size="lg" variant="gold" icon={<MapIcon className="h-4 w-4" />}>
                Interactive Map
              </Button>
            </Link>
            <Link href="/charms">
              <Button size="lg" variant="outline" icon={<Sparkles className="h-4 w-4" />}>
                Charm Planner
              </Button>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
            <div>
              <p className="font-serif text-2xl font-bold text-[#E7EAF0]">29</p>
              <p className="text-[11px] uppercase tracking-wider text-[#A3ACB8]">Godhome Bosses</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#83BFD0]">40</p>
              <p className="text-[11px] uppercase tracking-wider text-[#A3ACB8]">Charms & Combos</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#C4A77D]">12</p>
              <p className="text-[11px] uppercase tracking-wider text-[#A3ACB8]">Ancient Regions</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-[#E7EAF0]">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-[#A3ACB8]">Free & Open</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE PANTHEON CAROUSEL SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <Badge variant="spectral">Featured Arena</Badge>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#E7EAF0]">
              The Pantheon of Hallownest
            </h2>
            <p className="mt-1 text-sm text-[#A3ACB8]">
              Direct horizontal carousel inspects each divine warrior with authentic Godhome stats, Hunter notes, and combat tactics.
            </p>
          </div>
          <Link href="/bosses">
            <Button variant="ghost" size="sm" icon={<ArrowRight className="h-4 w-4" />}>
              Full Boss Directory
            </Button>
          </Link>
        </div>

        {/* Flagship Carousel */}
        <PantheonCarousel />
      </section>

      {/* 3. EXPLORATION SECTIONS GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <Badge variant="gold">Archive Navigation</Badge>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#E7EAF0]">
            Pillars of the Encyclopedia
          </h2>
          <p className="mt-1 text-sm text-[#A3ACB8]">
            Curated deep-dives across all dimensions of Team Cherry’s masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card: Map */}
          <Link href="/map" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="spectral">Spatial POI</Badge>
                  <MapIcon className="h-5 w-5 text-[#83BFD0] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#83BFD0]">
                  Cartographer’s Interactive Map
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  Interactive region map plotting benches, stag stations, Dreamer sanctums, whisper roots, and merchant locations with verified coordinates.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#83BFD0] font-medium">
                <span>Open Cartographer’s Desk</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card: Charms */}
          <Link href="/charms" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="gold">Loadout Planner</Badge>
                  <Sparkles className="h-5 w-5 text-[#C4A77D] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#C4A77D]">
                  Charms & Notch Builder
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  Complete database of all 40 charms with notch costs, locations, synergies, and an interactive builder with overcharming warnings.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#C4A77D] font-medium">
                <span>Assemble Charm Build</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card: Characters */}
          <Link href="/characters" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="spectral">Entities</Badge>
                  <Users className="h-5 w-5 text-[#83BFD0] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#83BFD0]">
                  Characters & Dreamers
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  Profiles of Hornet, Quirrel, the Three Dreamers, the Pale King, the White Lady, and the Five Great Knights.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#83BFD0] font-medium">
                <span>View Character Rosters</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card: Equipment */}
          <Link href="/items" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="spectral">Arsenal</Badge>
                  <Compass className="h-5 w-5 text-[#83BFD0] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#83BFD0]">
                  Equipment, Spells & Nails
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  From Mothwing Cloak to Shade Cloak, Vengeful Spirit to Abyss Shriek, and the journey from Old Nail to Pure Nail.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#83BFD0] font-medium">
                <span>Inspect Equipment</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card: Regions */}
          <Link href="/regions" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="gold">Geography</Badge>
                  <Mountain className="h-5 w-5 text-[#C4A77D] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#C4A77D]">
                  Regions of Hallownest
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  Biomes ranging from the weeping spires of City of Tears to the lush moss of Greenpath and the pitch black of Deepnest.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#C4A77D] font-medium">
                <span>Explore All 12 Biomes</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>

          {/* Card: Lore */}
          <Link href="/lore" className="group">
            <Card variant="interactive" className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <Badge variant="spectral">Mythos</Badge>
                  <BookOpen className="h-5 w-5 text-[#83BFD0] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-[#E7EAF0] group-hover:text-[#83BFD0]">
                  Lore & Tablet Inscriptions
                </h3>
                <p className="mt-2 text-xs text-[#A3ACB8] leading-relaxed">
                  Transcriptions of ancient stone tablets and canonical breakdowns of the Wyrm, the Void, and the tragic Infection.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs text-[#83BFD0] font-medium">
                <span>Read Ancient Tablets</span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* 4. ANCIENT LORE TABLET CALLOUT */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-[#C4A77D]/30 bg-gradient-to-b from-[#1D2530] to-[#141922] p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
          {/* Subtle seal watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
            <div className="relative h-96 w-96">
              <Image
                src="/images/ui/seal-of-binding.png"
                alt="Seal of Binding"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <span className="text-[11px] font-semibold tracking-widest text-[#C4A77D] uppercase">
            ANCIENT TABLET OF KING’S PASS
          </span>
          <h3 className="mt-3 font-serif text-xl sm:text-3xl italic text-[#E7EAF0] leading-relaxed">
            &ldquo;Higher beings, these words are for you alone. Your great strength marks you amongst us. Focus your soul and you shall achieve feats of which others can only dream.&rdquo;
          </h3>
          <p className="mt-4 text-xs text-[#A3ACB8]">
            Carved upon the entrance threshold leading into the kingdom of Hallownest.
          </p>
          <div className="mt-6">
            <Link href="/lore">
              <Button variant="gold" size="sm">
                Explore The Complete Mythology
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
