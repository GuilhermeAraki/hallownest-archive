'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { bossesData } from '@/data/bosses';
import { Boss } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { useExplorationProgress } from '@/hooks/useExplorationProgress';
import { ChevronLeft, ChevronRight, Heart, CheckCircle2, Swords, ExternalLink } from 'lucide-react';

export function PantheonCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedBoss: Boss = bossesData[selectedIndex] || bossesData[0];
  const { state, toggleBoss, toggleFavorite, isFavorite } = useExplorationProgress();
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const isDefeated = state.defeatedBosses.includes(selectedBoss.id);
  const isFav = isFavorite(selectedBoss.id);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : bossesData.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < bossesData.length - 1 ? prev + 1 : 0));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    const container = carouselContainerRef.current;
    if (container) {
      const activeElement = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0B0D12]/95 p-4 sm:p-8 overflow-hidden shadow-2xl">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#83BFD0]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#C4A77D]/5 blur-3xl" />

      {/* Header bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold tracking-widest text-[#83BFD0] uppercase">
              HALL OF GODS &bull; PANTHEON
            </span>
            <Badge variant="spectral">{selectedBoss.pantheon.split('&')[0].trim()}</Badge>
          </div>
          <h2 className="mt-1 font-serif text-3xl sm:text-4xl font-bold tracking-wide text-[#E7EAF0]">
            {selectedBoss.name}
          </h2>
          <p className="font-serif italic text-sm text-[#A3ACB8]">
            {selectedBoss.title}
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2">
          <Link href={`/bosses/${selectedBoss.id}`}>
            <Button variant="ghost" size="sm" icon={<ExternalLink className="h-3.5 w-3.5" />}>
              Dossier
            </Button>
          </Link>

          <Button
            variant={isDefeated ? 'spectral' : 'outline'}
            size="sm"
            onClick={() => toggleBoss(selectedBoss.id)}
            icon={<CheckCircle2 className={`h-4 w-4 ${isDefeated ? 'text-[#83BFD0]' : 'text-[#A3ACB8]'}`} />}
          >
            {isDefeated ? 'Defeated' : 'Mark Defeated'}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleFavorite(selectedBoss.id)}
            aria-label="Toggle favorite"
          >
            <Heart className={`h-4 w-4 ${isFav ? 'fill-[#E58B86] text-[#E58B86]' : 'text-[#A3ACB8]'}`} />
          </Button>
        </div>
      </div>

      {/* Main Showcase Stage */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left / Center: Statue Presentation */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px] rounded-xl border border-white/5 bg-gradient-to-b from-[#141922]/50 to-[#0B0D12] p-6 overflow-hidden">
          {/* Subtle godmaster halo watermark */}
          <div className="pointer-events-none absolute h-72 w-72 rounded-full border border-white/5 opacity-30" />
          <div className="pointer-events-none absolute h-96 w-96 rounded-full border border-dashed border-[#83BFD0]/10" />

          {/* Boss Image */}
          <div className="relative h-72 sm:h-80 w-64 sm:w-72 transition-transform duration-500 hover:scale-105">
            <Image
              src={selectedBoss.image}
              alt={selectedBoss.name}
              fill
              className="object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>

          {/* Difficulty Rating */}
          <div className="mt-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#1D2530]/80 px-4 py-1 backdrop-blur-sm">
            <span className="text-[11px] font-medium text-[#A3ACB8] uppercase tracking-wider mr-1">
              Challenge
            </span>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < selectedBoss.difficulty ? 'bg-[#83BFD0] shadow-[0_0_8px_#83BFD0]' : 'bg-white/15'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right: Boss Combat dossier */}
        <div className="lg:col-span-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
              Hunter’s Inspection
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#E7EAF0]">
              {selectedBoss.description}
            </p>
            <blockquote className="mt-3 border-l-2 border-[#83BFD0]/50 pl-3.5 font-serif italic text-xs leading-relaxed text-[#A3ACB8]">
              &ldquo;{selectedBoss.hunterNotes}&rdquo;
            </blockquote>
          </div>

          {/* Health & Combat Statistics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-lg border border-white/5 bg-[#141922] p-3 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#A3ACB8]">Attuned HP</span>
              <p className="font-serif text-lg font-semibold text-[#E7EAF0]">{selectedBoss.healthAttuned ?? selectedBoss.health}</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-[#141922] p-3 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#83BFD0]">Ascended HP</span>
              <p className="font-serif text-lg font-semibold text-[#83BFD0]">{selectedBoss.healthAscended ?? '—'}</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-[#141922] p-3 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#C4A77D]">Radiant</span>
              <p className="font-serif text-lg font-semibold text-[#C4A77D]">1-Hit Kill</p>
            </div>
            <div className="rounded-lg border border-white/5 bg-[#141922] p-3 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#E58B86]">Damage</span>
              <p className="font-serif text-lg font-semibold text-[#E58B86]">{selectedBoss.nailDamage} Mask{Number(selectedBoss.nailDamage) > 1 ? 's' : ''}</p>
            </div>
          </div>

          {/* Tactics */}
          <div className="rounded-xl border border-white/10 bg-[#141922]/70 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#83BFD0]">
              <Swords className="h-4 w-4" />
              Combat Tactics
            </div>
            <ul className="mt-2.5 space-y-2 text-xs text-[#A3ACB8] leading-relaxed">
              {selectedBoss.tactics.map((tactic, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#83BFD0] font-mono">&rsaquo;</span>
                  <span>{tactic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Thumbnails */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#A3ACB8]">
            Pantheon of Hallownest Lineup ({selectedIndex + 1} of {bossesData.length})
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              id="pantheon-prev-btn"
              className="rounded-full border border-white/10 bg-[#141922] p-2 text-[#A3ACB8] hover:border-[#83BFD0] hover:text-[#83BFD0] transition-colors"
              aria-label="Previous boss"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              id="pantheon-next-btn"
              className="rounded-full border border-white/10 bg-[#141922] p-2 text-[#A3ACB8] hover:border-[#83BFD0] hover:text-[#83BFD0] transition-colors"
              aria-label="Next boss"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel Scroll Track */}
        <div
          ref={carouselContainerRef}
          className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 scrollbar-none scroll-smooth"
        >
          {bossesData.map((boss, idx) => {
            const isCurrent = idx === selectedIndex;
            const bossDefeated = state.defeatedBosses.includes(boss.id);

            return (
              <button
                key={boss.id}
                data-index={idx}
                onClick={() => setSelectedIndex(idx)}
                className={`group relative flex-shrink-0 w-28 sm:w-32 rounded-xl p-2.5 text-center transition-all ${
                  isCurrent
                    ? 'border border-[#83BFD0] bg-[#1D2530] shadow-[0_0_15px_rgba(131,191,208,0.25)]'
                    : 'border border-white/5 bg-[#141922]/70 hover:border-white/20 hover:bg-[#1D2530]/50'
                }`}
              >
                {bossDefeated && (
                  <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#83BFD0]" />
                )}

                <div className="relative h-20 w-full mb-1.5">
                  <Image
                    src={boss.image}
                    alt={boss.name}
                    fill
                    className={`object-contain transition-transform group-hover:scale-105 ${
                      isCurrent ? 'filter brightness-110' : 'opacity-70 group-hover:opacity-100'
                    }`}
                  />
                </div>

                <p className="truncate text-xs font-medium text-[#E7EAF0]">
                  {boss.name}
                </p>
                <p className="text-[10px] text-[#A3ACB8]/70">
                  Tier {boss.difficulty}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
