import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { bossesData } from '@/data/bosses';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Swords, ArrowLeft, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return bossesData.map((b) => ({
    id: b.id,
  }));
}

export default async function BossDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const boss = bossesData.find((b) => b.id === id);

  if (!boss) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back button */}
      <div>
        <Link href="/bosses">
          <Button variant="ghost" size="sm" icon={<ArrowLeft className="h-4 w-4" />}>
            Back to Pantheon Roster
          </Button>
        </Link>
      </div>

      {/* Main Boss Dossier Card */}
      <div className="rounded-2xl border border-white/10 bg-[#141922] p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-white/10 pb-8">
          {/* Statue Visual */}
          <div className="relative h-64 w-64 shrink-0 rounded-2xl bg-gradient-to-b from-[#1D2530] to-[#0B0D12] p-4 border border-white/10 flex items-center justify-center">
            <div className="relative h-56 w-56">
              <Image
                src={boss.image}
                alt={boss.name}
                fill
                className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </div>

          {/* Header Info */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <Badge variant="spectral">{boss.pantheon.split('&')[0].trim()}</Badge>
              <span className="text-xs text-[#A3ACB8]">Tier {boss.difficulty} Challenge</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#E7EAF0]">
              {boss.name}
            </h1>
            <p className="font-serif italic text-base text-[#C4A77D]">
              {boss.title}
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#A3ACB8]">
              <MapPin className="h-3.5 w-3.5 text-[#83BFD0]" />
              <span>{boss.location}</span>
            </div>
          </div>
        </div>

        {/* Combat Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-lg border border-white/5 bg-[#0B0D12] p-3 text-center">
            <span className="text-[10px] uppercase text-[#A3ACB8]">Attuned HP</span>
            <p className="font-serif text-xl font-bold text-[#E7EAF0]">{boss.healthAttuned ?? boss.health}</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0B0D12] p-3 text-center">
            <span className="text-[10px] uppercase text-[#83BFD0]">Ascended HP</span>
            <p className="font-serif text-xl font-bold text-[#83BFD0]">{boss.healthAscended ?? '—'}</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0B0D12] p-3 text-center">
            <span className="text-[10px] uppercase text-[#C4A77D]">Radiant</span>
            <p className="font-serif text-xl font-bold text-[#C4A77D]">Instant Kill</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-[#0B0D12] p-3 text-center">
            <span className="text-[10px] uppercase text-[#E58B86]">Damage</span>
            <p className="font-serif text-xl font-bold text-[#E58B86]">{boss.nailDamage} Mask{Number(boss.nailDamage) > 1 ? 's' : ''}</p>
          </div>
        </div>

        {/* Hunter's Notes */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
            Hunter’s Journal Excerpt
          </h2>
          <p className="text-sm text-[#E7EAF0] leading-relaxed">
            {boss.description}
          </p>
          <blockquote className="border-l-2 border-[#83BFD0]/50 pl-4 font-serif italic text-xs leading-relaxed text-[#A3ACB8]">
            &ldquo;{boss.hunterNotes}&rdquo;
          </blockquote>
        </div>

        {/* Tactical Guidance */}
        <div className="rounded-xl border border-white/10 bg-[#0B0D12] p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#83BFD0]">
            <Swords className="h-4 w-4" />
            Tactical Combat Guide
          </div>
          <ul className="space-y-2 text-xs text-[#A3ACB8] leading-relaxed">
            {boss.tactics.map((t, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#83BFD0] font-mono">&rsaquo;</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rewards */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A3ACB8]">
          <div>
            <strong className="text-[#C4A77D]">Conquest Rewards:</strong> {boss.rewards.join(', ')}
          </div>
          <Link href="/exploration">
            <Button variant="outline" size="sm">
              Track in Journal
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
