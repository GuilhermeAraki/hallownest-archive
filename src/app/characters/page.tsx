'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { charactersData } from '@/data/characters';
import { Badge } from '@/components/ui/Badge';
import { SearchInput } from '@/components/ui/SearchInput';
import { Users, Quote } from 'lucide-react';

export default function CharactersPage() {
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');

  const filteredCharacters = charactersData.filter((char) => {
    const matchesSearch = char.name.toLowerCase().includes(search.toLowerCase()) ||
                          char.title.toLowerCase().includes(search.toLowerCase()) ||
                          char.location.toLowerCase().includes(search.toLowerCase());
    const matchesRole = selectedRole === 'all' || char.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Hallownest Population</Badge>
          <span className="text-xs text-[#A3ACB8]">Denizens of the Deep</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Characters & Dreamers
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          From the divine monarch who forged the kingdom to the wandering scholars and mournful knights who witnessed its decline.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#141922] p-4">
        <div className="w-full sm:max-w-xs">
          <SearchInput
            value={search}
            onChangeValue={setSearch}
            placeholder="Search characters..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {['all', 'royalty', 'dreamer', 'knight', 'warrior', 'npc'].map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider transition-all ${
                selectedRole === role
                  ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/50'
                  : 'bg-[#0B0D12] text-[#A3ACB8] hover:text-[#E7EAF0]'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Character Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            className="group rounded-xl border border-white/10 bg-[#141922] p-6 shadow-lg transition-all duration-300 hover:border-[#83BFD0]/30 hover:bg-[#1D2530]/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <Badge variant={char.role === 'royalty' || char.role === 'knight' ? 'gold' : 'spectral'}>
                  {char.role}
                </Badge>
                <span className="text-[11px] text-[#A3ACB8]">
                  {char.location}
                </span>
              </div>

              {/* Character Portrait */}
              <div className="relative my-4 h-36 w-full">
                <Image
                  src={char.image}
                  alt={char.name}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#E7EAF0]">
                {char.name}
              </h3>
              <p className="font-serif italic text-xs text-[#C4A77D]">
                {char.title}
              </p>

              {/* Quote */}
              <blockquote className="mt-3 border-l-2 border-[#83BFD0]/40 pl-3 text-xs italic text-[#A3ACB8] leading-relaxed">
                &ldquo;{char.quote}&rdquo;
              </blockquote>

              {/* Lore summary */}
              <p className="mt-3 text-xs text-[#E7EAF0]/90 leading-relaxed">
                {char.lore}
              </p>
            </div>

            {/* Questline note */}
            <div className="mt-4 border-t border-white/5 pt-3 text-[11px] text-[#A3ACB8]">
              <strong className="text-[#83BFD0]">Journey:</strong> {char.questlineSummary}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
