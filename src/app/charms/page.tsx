import React from 'react';
import { CharmPlanner } from '@/features/charms/CharmPlanner';
import { Badge } from '@/components/ui/Badge';

export const metadata = {
  title: 'Charms & Build Planner | Hollow Knight Encyclopedia',
  description: 'Inspect all 40 charms of Hallownest, plan custom notch builds, calculate synergies, and avoid overcharming penalties.'
};

export default function CharmsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Salubra’s Collection</Badge>
          <span className="text-xs text-[#A3ACB8]">Notch Management & Synergies</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Charms & Build Planner
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          Charms are mystical curios containing the wishes, memories, and blessings of ancient bugs. Equip charms into limited notch slots to enhance nail arts, spell potency, speed, and survivability.
        </p>
      </div>

      {/* Main Charm Planner Feature */}
      <CharmPlanner />
    </div>
  );
}
