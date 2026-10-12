import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { loreData } from '@/data/lore';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, Scroll, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Lore & Mythos | Hollow Knight Encyclopedia',
  description: 'In-depth canonical lore, tablet transcriptions, and history of Hallownest, the Wyrm, the Void, and the Infection.'
};

export default function LorePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2">
          <Badge variant="spectral">Sacred Archives</Badge>
          <span className="text-xs text-[#A3ACB8]">The Chronicles of Hallownest</span>
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
          Lore & Ancient Tablets
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-[#A3ACB8] leading-relaxed">
          The tragic history etched into stone across centuries of rule, rebellion, and supernatural containment.
        </p>
      </div>

      {/* Decorative Brand Header */}
      <div className="relative rounded-2xl border border-white/10 bg-[#141922] p-8 text-center overflow-hidden">
        <div className="relative mx-auto h-20 w-56 opacity-80">
          <Image
            src="/images/backgrounds/title_logo.png"
            alt="Hallownest Title"
            fill
            className="object-contain"
          />
        </div>
        <p className="mt-4 font-serif italic text-base sm:text-lg text-[#E7EAF0]">
          &ldquo;Our civilization was promised eternity. Yet the kingdom sleepeth, and only the stones remember.&rdquo;
        </p>
      </div>

      {/* Lore Chapters */}
      <div className="space-y-10">
        {loreData.map((chapter) => (
          <article
            key={chapter.id}
            id={chapter.id}
            className="rounded-2xl border border-white/10 bg-[#141922] p-6 sm:p-8 space-y-6 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between">
                <Badge variant="gold">{chapter.category.replace('_', ' ')}</Badge>
                <Scroll className="h-4 w-4 text-[#C4A77D]" />
              </div>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-[#E7EAF0]">
                {chapter.title}
              </h2>
              <p className="font-serif italic text-sm text-[#83BFD0]">
                {chapter.subtitle}
              </p>
            </div>

            {/* Tablet Inscription Callout */}
            {chapter.tabletInscription && (
              <div className="relative rounded-xl border border-[#83BFD0]/30 bg-[#0B0D12] p-5 shadow-inner">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#83BFD0]">
                  Stone Tablet Transcribed
                </span>
                <p className="mt-2 font-serif italic text-sm text-[#E7EAF0] leading-relaxed">
                  &ldquo;{chapter.tabletInscription}&rdquo;
                </p>
              </div>
            )}

            {/* Narrative Content */}
            <div className="space-y-3 text-sm text-[#A3ACB8] leading-relaxed">
              {chapter.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Cross-reference links */}
            <div className="border-t border-white/5 pt-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C4A77D]">
                Related Entries:
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {chapter.relatedEntities.map((ent, i) => (
                  <Link
                    key={i}
                    href={ent.url}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0B0D12] px-3 py-1.5 text-xs text-[#E7EAF0] transition-colors hover:border-[#83BFD0] hover:text-[#83BFD0]"
                  >
                    <span>{ent.name}</span>
                    <ExternalLink className="h-3 w-3 text-[#A3ACB8]" />
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
