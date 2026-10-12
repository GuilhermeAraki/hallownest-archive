import React from 'react';
import { ProgressTracker } from '@/features/exploration/ProgressTracker';
import { Badge } from '@/components/ui/Badge';
import { CheckSquare } from 'lucide-react';

export const metadata = {
  title: 'Hunter’s Progress Journal | Hollow Knight Encyclopedia',
  description: 'Track your personal Hollow Knight completion: vanquished bosses, discovered regions, collected charms, broken seals, and JSON backups.'
};

export default function ExplorationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Personal Exploration</Badge>
          <span className="text-xs text-[#A3ACB8]">Anonymous Local Storage</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Hunter’s Progress Journal
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          Record your conquests through Hallownest. Mark defeated bosses, track discovered regions, count your charm collection, and monitor the three Dreamer seals. No account or database required.
        </p>
      </div>

      {/* Main Tracker Feature */}
      <ProgressTracker />
    </div>
  );
}
