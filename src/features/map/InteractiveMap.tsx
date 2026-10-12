'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { mapPointsData } from '@/data/map-points';
import { regionsData } from '@/data/regions';
import { MapPoint } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { List, Map as MapIcon } from 'lucide-react';

const PIN_ICONS: Record<string, string> = {
  bench: '/icons/pin-bench.png',
  stag: '/icons/pin-stag.png',
  boss: '/icons/pin-black-egg.png',
  dreamer: '/icons/pin-teacher.png',
  shop: '/icons/pin-shop-sly.png',
  godseeker: '/icons/pin-godseeker.png',
  whisper_root: '/icons/pin-dream-tree.png',
  grub: '/icons/pin-grub.png',
  tram: '/icons/pin-tram.png'
};

export function InteractiveMap() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);
  const [viewMode, setViewMode] = useState<'spatial' | 'accessible-list'>('spatial');

  const filteredPoints = mapPointsData.filter((point) => {
    const matchesRegion = selectedRegionId === 'all' || point.regionId === selectedRegionId;
    const matchesType = selectedType === 'all' || point.type === selectedType;
    return matchesRegion && matchesType;
  });

  const activeRegion = regionsData.find((r) => r.id === selectedRegionId);

  return (
    <div className="w-full space-y-6">
      {/* Top Filter Bar */}
      <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141922] p-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Region Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
            Region:
          </span>
          <select
            value={selectedRegionId}
            onChange={(e) => setSelectedRegionId(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#0B0D12] px-3 py-1.5 text-xs text-[#E7EAF0] focus:border-[#83BFD0] focus:outline-none"
          >
            <option value="all">Entire Hallownest Realm</option>
            {regionsData.map((reg) => (
              <option key={reg.id} value={reg.id}>
                {reg.name}
              </option>
            ))}
          </select>

          {/* Type Filter */}
          <div className="hidden sm:flex items-center gap-1.5 ml-3">
            {['all', 'bench', 'stag', 'boss', 'dreamer', 'shop'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`rounded px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors ${
                  selectedType === t
                    ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/40'
                    : 'text-[#A3ACB8] hover:text-[#E7EAF0] hover:bg-[#1D2530]/50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === 'spatial' ? 'spectral' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('spatial')}
            icon={<MapIcon className="h-3.5 w-3.5" />}
          >
            Spatial Map
          </Button>
          <Button
            variant={viewMode === 'accessible-list' ? 'spectral' : 'ghost'}
            size="sm"
            onClick={() => setViewMode('accessible-list')}
            icon={<List className="h-3.5 w-3.5" />}
          >
            POI Directory
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === 'spatial' ? (
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D12] shadow-2xl">
          {/* Map canvas banner */}
          <div className="relative min-h-[500px] sm:min-h-[640px] w-full flex items-center justify-center p-4">
            {/* Background art: Region banner or Voidheart panorama */}
            <div className="absolute inset-0 opacity-20 filter grayscale contrast-125">
              <Image
                src={activeRegion?.bannerImage || '/images/backgrounds/voidheart_bg.png'}
                alt="Map Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Subtle Cartography Coordinate Grid Lines */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#83BFD0_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />

            {/* Plotted Pins */}
            <div className="relative h-[480px] sm:h-[600px] w-full max-w-5xl">
              {filteredPoints.map((point) => {
                const isSelected = activePoint?.id === point.id;
                const iconPath = PIN_ICONS[point.type] || '/icons/pin-knight.png';

                return (
                  <button
                    key={point.id}
                    onClick={() => setActivePoint(point)}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1.5 transition-all duration-300 ${
                      isSelected
                        ? 'scale-125 bg-[#83BFD0] ring-4 ring-[#83BFD0]/30 shadow-[0_0_20px_#83BFD0]'
                        : 'bg-[#141922]/90 border border-white/20 hover:scale-110 hover:border-[#83BFD0]'
                    }`}
                    aria-label={point.name}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={iconPath}
                        alt={point.type}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pin Detail Card */}
            {activePoint && (
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md rounded-xl border border-[#83BFD0]/40 bg-[#141922]/95 p-5 shadow-2xl backdrop-blur-md transition-all">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="spectral">{activePoint.type}</Badge>
                      <span className="text-[10px] text-[#A3ACB8] uppercase tracking-wider">
                        {activePoint.regionId.replace('-', ' ')}
                      </span>
                    </div>
                    <h4 className="mt-1 font-serif text-lg font-bold text-[#E7EAF0]">
                      {activePoint.name}
                    </h4>
                  </div>
                  <button
                    onClick={() => setActivePoint(null)}
                    className="text-[#A3ACB8] hover:text-white"
                  >
                    &times;
                  </button>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-[#A3ACB8]">
                  {activePoint.description}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[#A3ACB8]/70">
                  <span>Coordinates: {activePoint.x}%, {activePoint.y}%</span>
                  <span className="text-[#83BFD0]">Cartographer Verified</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Accessible List / Directory View */
        <div className="rounded-xl border border-white/10 bg-[#141922] p-6 shadow-xl">
          <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="font-serif text-lg font-semibold text-[#E7EAF0]">
              Waypoints & Points of Interest Directory ({filteredPoints.length})
            </h3>
            <span className="text-xs text-[#A3ACB8]">Spatial Access Alternative</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPoints.map((point) => (
              <div
                key={point.id}
                className="rounded-lg border border-white/5 bg-[#0B0D12] p-4 transition-colors hover:border-[#83BFD0]/30"
              >
                <div className="flex items-center justify-between">
                  <Badge variant="spectral">{point.type}</Badge>
                  <span className="text-[10px] uppercase text-[#A3ACB8]">
                    {point.regionId.replace('-', ' ')}
                  </span>
                </div>
                <h4 className="mt-2 text-sm font-semibold text-[#E7EAF0]">
                  {point.name}
                </h4>
                <p className="mt-1 text-xs text-[#A3ACB8] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
