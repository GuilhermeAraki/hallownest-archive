import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="relative h-28 w-28 opacity-60 mb-4">
        <Image
          src="/images/ui/seal-of-binding.png"
          alt="Seal of Binding"
          fill
          className="object-contain"
        />
      </div>

      <span className="text-xs font-semibold uppercase tracking-widest text-[#E58B86]">
        404 &bull; Lost in the Abyss
      </span>

      <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-[#E7EAF0]">
        Uncharted Void
      </h1>

      <p className="mt-3 max-w-md text-sm text-[#A3ACB8] leading-relaxed">
        The chamber you seek has collapsed into darkness, or the cartographer has not yet recorded its tunnels.
      </p>

      <div className="mt-6">
        <Link href="/">
          <Button variant="spectral" icon={<Compass className="h-4 w-4" />}>
            Return to Dirtmouth
          </Button>
        </Link>
      </div>
    </div>
  );
}
