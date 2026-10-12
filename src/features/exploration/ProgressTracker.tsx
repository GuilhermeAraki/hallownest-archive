'use client';

import React, { useState } from 'react';
import { useExplorationProgress } from '@/hooks/useExplorationProgress';
import { regionsData } from '@/data/regions';
import { bossesData } from '@/data/bosses';
import { charmsData } from '@/data/charms';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { 
  CheckSquare, 
  Download, 
  Upload, 
  RotateCcw, 
  Trophy, 
  Compass, 
  Sparkles, 
  Moon,
  CheckCircle2
} from 'lucide-react';

export function ProgressTracker() {
  const {
    state,
    isLoaded,
    toggleRegion,
    toggleBoss,
    toggleCharm,
    toggleDreamer,
    resetAll,
    exportJSON,
    importJSON
  } = useExplorationProgress();

  const [importInput, setImportInput] = useState('');
  const [showImportBox, setShowImportBox] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  if (!isLoaded) {
    return (
      <div className="flex h-64 items-center justify-center text-sm text-[#A3ACB8]">
        Awakening Hunter’s Journal from deep slumber...
      </div>
    );
  }

  // Calculate percentages
  const regionPct = Math.round((state.visitedRegions.length / regionsData.length) * 100);
  const bossPct = Math.round((state.defeatedBosses.length / bossesData.length) * 100);
  const charmPct = Math.round((state.collectedCharms.length / charmsData.length) * 100);
  const dreamersCount = state.brokenDreamers.length;

  const handleExport = () => {
    const dataStr = exportJSON();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `hallownest-journal-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setStatusMessage('Journal data exported successfully.');
  };

  const handleImport = () => {
    const success = importJSON(importInput);
    if (success) {
      setStatusMessage('Journal data restored.');
      setShowImportBox(false);
      setImportInput('');
    } else {
      setStatusMessage('Invalid journal JSON format.');
    }
  };

  return (
    <div className="space-y-10">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Regions */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#83BFD0]">
              Regions Discovered
            </span>
            <Compass className="h-4 w-4 text-[#83BFD0]" />
          </div>
          <p className="mt-2 font-serif text-3xl font-bold text-[#E7EAF0]">
            {state.visitedRegions.length} <span className="text-sm font-normal text-[#A3ACB8]">/ {regionsData.length}</span>
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-[#0B0D12]">
            <div
              className="h-full rounded-full bg-[#83BFD0] transition-all duration-500"
              style={{ width: `${regionPct}%` }}
            />
          </div>
        </div>

        {/* Bosses */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
              Bosses Vanquished
            </span>
            <Trophy className="h-4 w-4 text-[#C4A77D]" />
          </div>
          <p className="mt-2 font-serif text-3xl font-bold text-[#E7EAF0]">
            {state.defeatedBosses.length} <span className="text-sm font-normal text-[#A3ACB8]">/ {bossesData.length}</span>
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-[#0B0D12]">
            <div
              className="h-full rounded-full bg-[#C4A77D] transition-all duration-500"
              style={{ width: `${bossPct}%` }}
            />
          </div>
        </div>

        {/* Charms */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#83BFD0]">
              Charms Collected
            </span>
            <Sparkles className="h-4 w-4 text-[#83BFD0]" />
          </div>
          <p className="mt-2 font-serif text-3xl font-bold text-[#E7EAF0]">
            {state.collectedCharms.length} <span className="text-sm font-normal text-[#A3ACB8]">/ {charmsData.length}</span>
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-[#0B0D12]">
            <div
              className="h-full rounded-full bg-[#83BFD0] transition-all duration-500"
              style={{ width: `${charmPct}%` }}
            />
          </div>
        </div>

        {/* Dreamers */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-5 shadow-lg">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E58B86]">
              Dreamer Seals
            </span>
            <Moon className="h-4 w-4 text-[#E58B86]" />
          </div>
          <p className="mt-2 font-serif text-3xl font-bold text-[#E7EAF0]">
            {dreamersCount} <span className="text-sm font-normal text-[#A3ACB8]">/ 3</span>
          </p>
          <div className="mt-3 h-1.5 w-full rounded-full bg-[#0B0D12]">
            <div
              className="h-full rounded-full bg-[#E58B86] transition-all duration-500"
              style={{ width: `${(dreamersCount / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Dreamers Quick Action Section */}
      <div className="rounded-xl border border-white/10 bg-[#141922] p-6 shadow-xl">
        <h3 className="font-serif text-lg font-semibold text-[#E7EAF0]">
          The Three Dreamer Seals of the Black Egg
        </h3>
        <p className="text-xs text-[#A3ACB8] mt-1">
          Click each dreamer once unsealed to track your progress toward opening the Temple of the Black Egg.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: 'monomon', name: 'Monomon the Teacher', location: 'Teacher’s Archives (Fog Canyon)' },
            { id: 'lurien', name: 'Lurien the Watcher', location: 'Watcher’s Spire (City of Tears)' },
            { id: 'herrah', name: 'Herrah the Beast', location: 'Beast’s Den (Deepnest)' }
          ].map((dreamer) => {
            const isBroken = state.brokenDreamers.includes(dreamer.id);
            return (
              <button
                key={dreamer.id}
                onClick={() => toggleDreamer(dreamer.id)}
                className={`rounded-lg border p-4 text-left transition-all ${
                  isBroken
                    ? 'border-[#83BFD0] bg-[#1D2530] shadow-[0_0_15px_rgba(131,191,208,0.2)]'
                    : 'border-white/10 bg-[#0B0D12] hover:border-white/25'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Badge variant={isBroken ? 'spectral' : 'void'}>
                    {isBroken ? 'Seal Broken' : 'Slumbering'}
                  </Badge>
                  <CheckCircle2 className={`h-4 w-4 ${isBroken ? 'text-[#83BFD0]' : 'text-white/20'}`} />
                </div>
                <h4 className="mt-2 text-sm font-semibold text-[#E7EAF0]">
                  {dreamer.name}
                </h4>
                <p className="mt-1 text-xs text-[#A3ACB8]">
                  {dreamer.location}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bosses Checklist */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-6 shadow-xl">
          <h3 className="font-serif text-lg font-semibold text-[#E7EAF0] mb-4">
            Pantheon & Boss Conquests
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {bossesData.map((boss) => {
              const isDefeated = state.defeatedBosses.includes(boss.id);
              return (
                <button
                  key={boss.id}
                  onClick={() => toggleBoss(boss.id)}
                  className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 text-xs transition-colors ${
                    isDefeated
                      ? 'border-[#C4A77D]/40 bg-[#1D2530] text-[#E7EAF0]'
                      : 'border-white/5 bg-[#0B0D12] text-[#A3ACB8] hover:border-white/15'
                  }`}
                >
                  <span className="font-medium">{boss.name}</span>
                  <CheckSquare className={`h-4 w-4 ${isDefeated ? 'text-[#C4A77D]' : 'text-white/20'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Regions Checklist */}
        <div className="rounded-xl border border-white/10 bg-[#141922] p-6 shadow-xl">
          <h3 className="font-serif text-lg font-semibold text-[#E7EAF0] mb-4">
            Hallownest Regions Explored
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
            {regionsData.map((region) => {
              const isVisited = state.visitedRegions.includes(region.id);
              return (
                <button
                  key={region.id}
                  onClick={() => toggleRegion(region.id)}
                  className={`w-full flex items-center justify-between rounded-lg border px-3 py-2 text-xs transition-colors ${
                    isVisited
                      ? 'border-[#83BFD0]/40 bg-[#1D2530] text-[#E7EAF0]'
                      : 'border-white/5 bg-[#0B0D12] text-[#A3ACB8] hover:border-white/15'
                  }`}
                >
                  <span className="font-medium">{region.name}</span>
                  <CheckSquare className={`h-4 w-4 ${isVisited ? 'text-[#83BFD0]' : 'text-white/20'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Backup & Storage Actions */}
      <div className="rounded-xl border border-white/10 bg-[#141922] p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-base font-semibold text-[#E7EAF0]">
              Journal Backup & Data Portability
            </h3>
            <p className="text-xs text-[#A3ACB8] mt-1">
              Your progress is saved securely in your browser’s local storage. Export a JSON backup to keep your achievements safe across devices.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExport}
              icon={<Download className="h-3.5 w-3.5" />}
            >
              Export JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowImportBox(!showImportBox)}
              icon={<Upload className="h-3.5 w-3.5" />}
            >
              Import JSON
            </Button>
            <Button
              variant="void"
              size="sm"
              onClick={() => {
                if (window.confirm('Reset all exploration progress and start a fresh journey?')) {
                  resetAll();
                }
              }}
              icon={<RotateCcw className="h-3.5 w-3.5 text-[#E58B86]" />}
            >
              Reset
            </Button>
          </div>
        </div>

        {/* Feedback Message */}
        {statusMessage && (
          <p className="mt-3 text-xs text-[#83BFD0] animate-fade-in font-medium">
            {statusMessage}
          </p>
        )}

        {/* Import Dialog Box */}
        {showImportBox && (
          <div className="mt-4 border-t border-white/10 pt-4">
            <label className="block text-xs font-medium text-[#A3ACB8] mb-1">
              Paste your journal JSON data below:
            </label>
            <textarea
              value={importInput}
              onChange={(e) => setImportInput(e.target.value)}
              rows={4}
              className="w-full rounded-lg border border-white/10 bg-[#0B0D12] p-3 text-xs text-[#E7EAF0] focus:border-[#83BFD0] focus:outline-none font-mono"
              placeholder="{ 'visitedRegions': [...], 'defeatedBosses': [...] }"
            />
            <div className="mt-2 flex justify-end gap-2">
              <Button size="sm" variant="spectral" onClick={handleImport}>
                Apply Import
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
