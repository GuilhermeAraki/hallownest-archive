import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { regionsData } from '@/data/regions';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Mountain, MapPin, Skull, Compass } from 'lucide-react';

export const metadata = {
  title: 'Regions of Hallownest | Hollow Knight Encyclopedia',
  description: 'Detailed gazetteer of all 12 biomes across the ruined kingdom of Hallownest, including sub-areas, bosses, and environmental lore.'
};

export default function RegionsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="gold">Kingdom Geography</Badge>
          <span className="text-xs text-[#A3ACB8]">The Subterranean Realms</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Regions of Hallownest
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          From the howling bluffs above to the primeval dark of the Abyss below, each biome possesses distinct architecture, hazards, flora, and fallen sentinels.
        </p>
      </div>

      {/* Regions Gazette List */}
      <div className="space-y-8">
        {regionsData.map((region) => (
          <div
            key={region.id}
            id={region.id}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141922] shadow-xl transition-all hover:border-[#83BFD0]/30"
          >
            {/* Authentic Panoramic Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden">
              <Image
                src={region.bannerImage}
                alt={region.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141922] via-[#141922]/30 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <Badge variant="spectral">{region.tagline}</Badge>
                  <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-[#E7EAF0]">
                    {region.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Region Details Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Atmosphere & Description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-3">
                  <p className="text-sm text-[#E7EAF0] leading-relaxed">
                    {region.description}
                  </p>
                  <p className="text-xs italic text-[#A3ACB8] leading-relaxed border-l-2 border-[#83BFD0]/40 pl-3">
                    <strong>Atmosphere:</strong> {region.atmosphere}
                  </p>
                </div>

                {/* Sub-areas Pill list */}
                <div className="md:col-span-4 rounded-xl border border-white/5 bg-[#0B0D12] p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
                    Key Sub-Areas
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#A3ACB8]">
                    {region.subAreas.map((sub, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#83BFD0]" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Lore Tablet Snippet */}
              <blockquote className="rounded-lg border border-white/5 bg-[#0B0D12]/70 p-4 text-xs font-serif italic text-[#A3ACB8] leading-relaxed">
                &ldquo;{region.loreSnippet}&rdquo;
              </blockquote>

              {/* Connected Bosses & Navigation Footer */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-4 text-xs text-[#A3ACB8]">
                <div className="flex items-center gap-2">
                  <Skull className="h-4 w-4 text-[#E58B86]" />
                  <span>
                    <strong>Resident Encounters:</strong> {region.bossIds.join(', ') || 'Peaceful territory'}
                  </span>
                </div>

                <Link href="/map">
                  <Button variant="ghost" size="sm" icon={<MapPin className="h-3.5 w-3.5 text-[#83BFD0]" />}>
                    View on Map
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
