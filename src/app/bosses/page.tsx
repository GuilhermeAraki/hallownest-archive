'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { bossesData } from '@/data/bosses';
import { PantheonCarousel } from '@/features/pantheon/PantheonCarousel';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { SearchInput } from '@/components/ui/SearchInput';
import { Modal } from '@/components/ui/Modal';
import { useExplorationProgress } from '@/hooks/useExplorationProgress';
import { Boss } from '@/types';
import { Shield, Swords, Heart, CheckCircle2, Info } from 'lucide-react';

export default function BossesPage() {
  const [search, setSearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | 'all'>('all');
  const [activeModalBoss, setActiveModalBoss] = useState<Boss | null>(null);
  const { state, toggleBoss, toggleFavorite, isFavorite } = useExplorationProgress();

  const filteredBosses = bossesData.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) ||
                          b.location.toLowerCase().includes(search.toLowerCase()) ||
                          b.pantheon.toLowerCase().includes(search.toLowerCase());
    const matchesDiff = selectedDifficulty === 'all' || b.difficulty === selectedDifficulty;
    return matchesSearch && matchesDiff;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Godhome Archive</Badge>
          <span className="text-xs text-[#A3ACB8]">Hall of Gods Dossier</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Pantheon of Hallownest
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          The supreme test of martial prowess. In the golden heights of Godhome, the Godseeker communes with the mightiest warriors and gods of the ruined realm.
        </p>
      </div>

      {/* Featured Horizontal Carousel */}
      <section>
        <PantheonCarousel />
      </section>

      {/* Full Boss Roster Directory */}
      <section className="space-y-6 border-t border-white/10 pt-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#E7EAF0]">
              Hall of Gods Complete Roster ({filteredBosses.length})
            </h2>
            <p className="text-xs text-[#A3ACB8]">
              Inspect combat stats, health tiers, and tactical guidance.
            </p>
          </div>

          {/* Search & Difficulty Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div className="w-full sm:w-56">
              <SearchInput
                value={search}
                onChangeValue={setSearch}
                placeholder="Filter bosses..."
              />
            </div>
            <div className="flex items-center gap-1">
              {['all', 1, 2, 3, 4, 5].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d as any)}
                  className={`rounded px-2.5 py-1 text-xs font-medium uppercase tracking-wider transition-colors ${
                    selectedDifficulty === d
                      ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/50'
                      : 'text-[#A3ACB8] hover:text-[#E7EAF0]'
                  }`}
                >
                  {d === 'all' ? 'All' : `T${d}`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Boss Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredBosses.map((boss) => {
            const isDefeated = state.defeatedBosses.includes(boss.id);
            const isFav = isFavorite(boss.id);

            return (
              <div
                key={boss.id}
                className="group relative rounded-xl border border-white/10 bg-[#141922] p-5 transition-all duration-300 hover:border-[#83BFD0]/40 hover:bg-[#1D2530]/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <Badge variant="spectral">{boss.pantheon.split('&')[0].trim()}</Badge>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleBoss(boss.id)}
                        className={`p-1 rounded ${
                          isDefeated ? 'text-[#83BFD0]' : 'text-white/20 hover:text-white/60'
                        }`}
                        title={isDefeated ? 'Defeated' : 'Mark defeated'}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => toggleFavorite(boss.id)}
                        className="p-1 text-[#A3ACB8] hover:text-white"
                        title="Favorite"
                      >
                        <Heart className={`h-4 w-4 ${isFav ? 'fill-[#E58B86] text-[#E58B86]' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Boss Statue */}
                  <div className="relative my-4 h-36 w-full">
                    <Image
                      src={boss.image}
                      alt={boss.name}
                      fill
                      className="object-contain transition-transform group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#E7EAF0] group-hover:text-[#83BFD0]">
                    {boss.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[#A3ACB8]">
                    {boss.title}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] text-[#A3ACB8] border-t border-white/5 pt-2">
                    <span>HP: {boss.health}</span>
                    <span>Damage: {boss.nailDamage}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs"
                    onClick={() => setActiveModalBoss(boss)}
                  >
                    View Combat Dossier
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detail Modal */}
      {activeModalBoss && (
        <Modal
          isOpen={!!activeModalBoss}
          onClose={() => setActiveModalBoss(null)}
          title={`${activeModalBoss.name} — ${activeModalBoss.title}`}
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-44 w-44 shrink-0 rounded-lg bg-[#0B0D12] p-2 border border-white/10">
                <Image
                  src={activeModalBoss.image}
                  alt={activeModalBoss.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-[#E7EAF0] leading-relaxed">
                  {activeModalBoss.description}
                </p>
                <blockquote className="border-l-2 border-[#83BFD0] pl-3 font-serif italic text-[#A3ACB8]">
                  &ldquo;{activeModalBoss.hunterNotes}&rdquo;
                </blockquote>
                <p className="text-[11px] text-[#C4A77D]">
                  <strong>Location:</strong> {activeModalBoss.location}
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B0D12] p-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#83BFD0] flex items-center gap-1.5">
                <Swords className="h-4 w-4" />
                Proven Combat Tactics
              </h4>
              <ul className="mt-2 space-y-2 text-xs text-[#A3ACB8]">
                {activeModalBoss.tactics.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#83BFD0] font-mono">&rsaquo;</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
