'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Compass, 
  Shield, 
  Map, 
  Users, 
  Sparkles, 
  BookOpen, 
  Mountain, 
  CheckSquare, 
  Menu, 
  X 
} from 'lucide-react';

const NAV_LINKS = [
  { href: '/bosses', label: 'Pantheon', icon: Shield },
  { href: '/map', label: 'Map', icon: Map },
  { href: '/charms', label: 'Charms', icon: Sparkles },
  { href: '/characters', label: 'Characters', icon: Users },
  { href: '/items', label: 'Equipment', icon: Compass },
  { href: '/regions', label: 'Regions', icon: Mountain },
  { href: '/lore', label: 'Lore', icon: BookOpen },
  { href: '/exploration', label: 'Journal', icon: CheckSquare },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0D12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          id="nav-brand-link"
        >
          <div className="relative h-8 w-28 sm:h-9 sm:w-36">
            <Image
              src="/images/backgrounds/title_logo.png"
              alt="Hollow Knight Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden text-xs font-light tracking-widest text-[#83BFD0] sm:inline-block uppercase border-l border-white/20 pl-3">
            Encyclopedia
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#1D2530] text-[#83BFD0] shadow-sm border border-[#83BFD0]/30'
                    : 'text-[#A3ACB8] hover:bg-[#141922] hover:text-[#E7EAF0]'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-[#83BFD0]' : 'text-[#A3ACB8]'}`} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#A3ACB8] hover:bg-[#1D2530] hover:text-[#E7EAF0]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#141922] px-4 py-4 md:hidden">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 rounded-lg p-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#1D2530] text-[#83BFD0] border border-[#83BFD0]/40'
                      : 'text-[#A3ACB8] hover:bg-[#1D2530]/50 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
