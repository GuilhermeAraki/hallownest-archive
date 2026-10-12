import React from 'react';
import { InteractiveMap } from '@/features/map/InteractiveMap';
import { Badge } from '@/components/ui/Badge';
import { Map as MapIcon, Compass } from 'lucide-react';

export const metadata = {
  title: 'Interactive Map of Hallownest | Hollow Knight Encyclopedia',
  description: 'Interactive map of Hallownest with region selectors, benches, stag stations, Dreamer sanctums, and point-of-interest coordinates.'
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="gold">Cartographer’s Guild</Badge>
          <span className="text-xs text-[#A3ACB8]">Cornifer & Iselda’s Regional Charts</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Interactive Map of Hallownest
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          Navigate the subterranean expanse from the desolate wind of Dirtmouth down to the primordial dark of the Abyss. Inspect resting benches, transit stagways, boss arenas, and Dreamer memorials.
        </p>
      </div>

      {/* Main Interactive Map Component */}
      <InteractiveMap />
    </div>
  );
}
