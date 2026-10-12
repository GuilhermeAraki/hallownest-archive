'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { charmsData } from '@/data/charms';
import { Charm } from '@/types';
import { useExplorationProgress } from '@/hooks/useExplorationProgress';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/ui/SearchInput';
import { AlertTriangle, Heart, CheckCircle } from 'lucide-react';

export function CharmPlanner() {
  const { state, toggleEquipCharm, toggleCharm, toggleFavorite, isFavorite } = useExplorationProgress();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const equippedCharms = charmsData.filter((c) => state.equippedCharms.includes(c.id));
  const usedNotches = equippedCharms.reduce((acc, c) => acc + c.notches, 0);
  const totalNotches = state.totalNotches || 11;
  const isOvercharmed = usedNotches > totalNotches;

  const filteredCharms = charmsData.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Notch Meter & Equipped Loadout Dock */}
      <div className={`rounded-2xl border p-6 transition-all duration-300 ${
        isOvercharmed
          ? 'border-[#E58B86]/60 bg-gradient-to-b from-[#1D2530] to-[#141922] shadow-[0_0_30px_rgba(229,139,134,0.2)]'
          : 'border-white/10 bg-[#141922] shadow-xl'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold tracking-wider text-[#C4A77D] uppercase">
                CHARM BUILD PLANNER
              </span>
              {isOvercharmed && (
                <Badge variant="crimson" className="animate-pulse flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  OVERCHARMED (2x Damage Taken)
                </Badge>
              )}
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#E7EAF0]">
              Equipped Notches: {usedNotches} / {totalNotches}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-[#A3ACB8]">
              {equippedCharms.length} Charms Active
            </span>
          </div>
        </div>

        {/* Notch Slots Indicator */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {Array.from({ length: totalNotches }).map((_, i) => {
            const isFilled = i < usedNotches;
            return (
              <div
                key={i}
                className={`relative h-6 w-6 rounded border transition-all ${
                  isFilled
                    ? isOvercharmed
                      ? 'border-[#E58B86] bg-[#E58B86]/30'
                      : 'border-[#83BFD0] bg-[#83BFD0]/30 shadow-[0_0_8px_#83BFD0]'
                    : 'border-white/10 bg-[#0B0D12]'
                } flex items-center justify-center`}
              >
                <div className="relative h-3 w-3 opacity-80">
                  <Image
                    src="/images/ui/charm-notch.png"
                    alt="Notch"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
          {isOvercharmed && (
            <div className="ml-2 text-xs font-bold text-[#E58B86]">
              +{usedNotches - totalNotches} Over
            </div>
          )}
        </div>

        {/* Equipped Charms Grid Bar */}
        <div className="mt-6 border-t border-white/5 pt-4">
          <span className="text-xs font-medium text-[#A3ACB8] uppercase tracking-wider">
            Current Loadout (Click to Unequip):
          </span>
          {equippedCharms.length === 0 ? (
            <p className="mt-2 text-xs italic text-[#A3ACB8]/60">
              No charms equipped. Select charms from the collection below to forge your build.
            </p>
          ) : (
            <div className="mt-3 flex flex-wrap gap-3">
              {equippedCharms.map((charm) => (
                <button
                  key={charm.id}
                  onClick={() => toggleEquipCharm(charm.id)}
                  className="group relative flex items-center gap-2 rounded-lg border border-[#83BFD0]/40 bg-[#1D2530] px-3 py-2 text-left transition-all hover:border-[#E58B86] hover:bg-[#E58B86]/10"
                  title="Click to unequip"
                >
                  <div className="relative h-8 w-8 shrink-0">
                    <Image
                      src={charm.image}
                      alt={charm.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#E7EAF0] group-hover:text-[#E58B86]">
                      {charm.name}
                    </p>
                    <span className="text-[10px] text-[#83BFD0]">
                      {charm.notches} Notch{charm.notches > 1 ? 'es' : ''}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Charm Library Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="w-full sm:max-w-xs">
          <SearchInput
            value={searchQuery}
            onChangeValue={setSearchQuery}
            placeholder="Search all 40 charms..."
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {['all', 'combat', 'soul', 'movement', 'utility', 'lifeblood'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/50'
                  : 'bg-[#141922] text-[#A3ACB8] hover:text-[#E7EAF0]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Charms Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCharms.map((charm) => {
          const isEquipped = state.equippedCharms.includes(charm.id);
          const isCollected = state.collectedCharms.includes(charm.id);
          const isFav = isFavorite(charm.id);

          return (
            <div
              key={charm.id}
              className={`relative rounded-xl border p-4 transition-all duration-300 flex flex-col justify-between ${
                isEquipped
                  ? 'border-[#83BFD0] bg-[#1D2530]/90 shadow-[0_0_15px_rgba(131,191,208,0.15)]'
                  : 'border-white/10 bg-[#141922]/80 hover:border-white/20'
              }`}
            >
              <div>
                {/* Header with Notches & Favorite */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: charm.notches }).map((_, i) => (
                      <div key={i} className="relative h-3 w-3">
                        <Image
                          src="/images/ui/charm-notch.png"
                          alt="Notch"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                    <span className="text-[10px] text-[#A3ACB8] ml-1">
                      ({charm.notches})
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => toggleCharm(charm.id)}
                      className={`text-xs p-1 rounded transition-colors ${
                        isCollected ? 'text-[#83BFD0]' : 'text-white/20 hover:text-white/60'
                      }`}
                      title={isCollected ? 'Collected' : 'Mark as found'}
                    >
                      <CheckCircle className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => toggleFavorite(charm.id)}
                      className="p-1 text-[#A3ACB8] hover:text-white"
                      title="Favorite"
                    >
                      <Heart className={`h-4 w-4 ${isFav ? 'fill-[#E58B86] text-[#E58B86]' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Charm Icon */}
                <div className="relative my-4 flex justify-center">
                  <div className="relative h-16 w-16">
                    <Image
                      src={charm.image}
                      alt={charm.name}
                      fill
                      className="object-contain filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                </div>

                {/* Charm Title & Details */}
                <h4 className="font-serif text-base font-semibold text-[#E7EAF0]">
                  {charm.name}
                </h4>
                <p className="mt-1.5 text-xs text-[#A3ACB8] line-clamp-3 leading-relaxed">
                  {charm.description}
                </p>

                {/* Location */}
                <p className="mt-3 text-[11px] text-[#C4A77D]/80">
                  <strong className="text-[#C4A77D]">Found:</strong> {charm.location}
                </p>
              </div>

              {/* Equip / Unequip Action Button */}
              <div className="mt-4 pt-3 border-t border-white/5">
                <Button
                  variant={isEquipped ? 'spectral' : 'outline'}
                  size="sm"
                  className="w-full text-xs"
                  onClick={() => toggleEquipCharm(charm.id)}
                >
                  {isEquipped ? 'Unequip' : 'Equip Charm'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
