'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { itemsData } from '@/data/items';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/ui/SearchInput';
import { Compass, Sparkles, Swords, Key } from 'lucide-react';

export default function ItemsPage() {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredItems = itemsData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) ||
                          item.description.toLowerCase().includes(search.toLowerCase()) ||
                          item.location.toLowerCase().includes(search.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Vessel Arsenal</Badge>
          <span className="text-xs text-[#A3ACB8]">Abilities, Spells & Blades</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Equipment & Spells
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          The arsenal forged by ancient shamans, nail masters, and Void alchemy. Unlocking these relics alters navigation and combat across the labyrinth.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#141922] p-4">
        <div className="w-full sm:max-w-xs">
          <SearchInput
            value={search}
            onChangeValue={setSearch}
            placeholder="Search equipment & spells..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {['all', 'movement', 'spell', 'nail', 'relic', 'key'].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all ${
                selectedType === t
                  ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/50'
                  : 'bg-[#0B0D12] text-[#A3ACB8] hover:text-[#E7EAF0]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border border-white/10 bg-[#141922] p-5 shadow-lg transition-all duration-300 hover:border-[#83BFD0]/30 hover:bg-[#1D2530]/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <Badge variant={item.type === 'spell' ? 'spectral' : item.type === 'nail' ? 'gold' : 'void'}>
                  {item.type}
                </Badge>
                {item.upgradeFrom && (
                  <span className="text-[10px] text-[#83BFD0] uppercase tracking-wider">
                    Void Evolution
                  </span>
                )}
              </div>

              {/* Item Graphic */}
              <div className="relative my-4 h-24 w-full flex items-center justify-center">
                <div className="relative h-20 w-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-105 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              <h3 className="font-serif text-lg font-bold text-[#E7EAF0]">
                {item.name}
              </h3>

              <p className="mt-1.5 text-xs text-[#A3ACB8] leading-relaxed">
                {item.description}
              </p>

              {/* Effect box */}
              <div className="mt-3 rounded-lg border border-white/5 bg-[#0B0D12] p-2.5 text-xs text-[#83BFD0]">
                <strong className="text-white">Effect:</strong> {item.effect}
              </div>
            </div>

            {/* Location footer */}
            <div className="mt-4 border-t border-white/5 pt-3 text-[11px] text-[#C4A77D]">
              <strong>Acquisition:</strong> {item.location}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
