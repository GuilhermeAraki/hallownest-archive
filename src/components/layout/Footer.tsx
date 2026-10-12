import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0B0D12] text-[#A3ACB8]">
      {/* Decorative divider */}
      <div className="relative flex justify-center py-4">
        <div className="relative h-4 w-48 opacity-60">
          <Image
            src="/images/ui/divider.png"
            alt="Hallownest Ornament"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand & Project Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg font-medium tracking-wider text-[#E7EAF0]">
                HALLOWNEST DARK EDITORIAL
              </span>
              <span className="rounded border border-[#83BFD0]/30 bg-[#1D2530] px-2 py-0.5 text-[10px] font-semibold text-[#83BFD0]">
                FAN ENCYCLOPEDIA
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#A3ACB8]">
              An interactive, cinematic digital compendium chronicling the ruins, entities, combat arts, and hidden mysteries of the kingdom of Hallownest.
            </p>
            <div className="rounded-md border border-white/5 bg-[#141922] p-3 text-[11px] leading-relaxed text-[#A3ACB8]">
              <strong className="text-[#C4A77D]">Disclaimer:</strong> Hollow Knight is developed and owned by <strong className="text-[#E7EAF0]">Team Cherry</strong>. This unofficial fan-made project is built purely for educational, artistic, and community celebration. Game sprites extracted and cataloged by Sumwan.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#C4A77D] uppercase">
              Hallownest Archive
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/bosses" className="transition-colors hover:text-[#83BFD0]">
                  Pantheon of Gods
                </Link>
              </li>
              <li>
                <Link href="/map" className="transition-colors hover:text-[#83BFD0]">
                  Cartographer’s Map
                </Link>
              </li>
              <li>
                <Link href="/charms" className="transition-colors hover:text-[#83BFD0]">
                  Charms & Build Planner
                </Link>
              </li>
              <li>
                <Link href="/items" className="transition-colors hover:text-[#83BFD0]">
                  Nails & Spells
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-[#C4A77D] uppercase">
              Lore & Exploration
            </h3>
            <ul className="mt-3 space-y-2 text-xs">
              <li>
                <Link href="/characters" className="transition-colors hover:text-[#83BFD0]">
                  Dreamers & Knights
                </Link>
              </li>
              <li>
                <Link href="/regions" className="transition-colors hover:text-[#83BFD0]">
                  Kingdom Regions
                </Link>
              </li>
              <li>
                <Link href="/lore" className="transition-colors hover:text-[#83BFD0]">
                  The Void & Higher Beings
                </Link>
              </li>
              <li>
                <Link href="/exploration" className="transition-colors hover:text-[#83BFD0]">
                  Hunter’s Progress Journal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-white/5 pt-6 text-[11px] text-[#A3ACB8]/70 sm:flex-row">
          <p>© 2026 Hallownest Dark Editorial. Unofficial fan tribute.</p>
          <p className="mt-2 sm:mt-0">Designed for desktop, tablet, and mobile adventurers.</p>
        </div>
      </div>
    </footer>
  );
}
