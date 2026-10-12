import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hollow Knight | Hallownest Dark Editorial Encyclopedia',
  description: 'An immersive interactive encyclopedia of Hallownest. Explore bosses of the Pantheon, characters, interactive map, charm builds, lore, and progress tracking.',
  keywords: ['Hollow Knight', 'Hallownest', 'Pantheon', 'Charms', 'Godhome', 'Hunter Journal', 'Team Cherry'],
  authors: [{ name: 'Hollow Knight Community' }],
  metadataBase: new URL('https://hallownest-encyclopedia.local'),
  openGraph: {
    title: 'Hollow Knight | Hallownest Dark Editorial',
    description: 'Cinematic interactive compendium exploring the ancient bugs and forgotten realms of Hallownest.',
    siteName: 'Hallownest Dark Editorial',
    images: [
      {
        url: '/images/backgrounds/voidheart_bg.png',
        width: 1200,
        height: 630,
        alt: 'Hallownest Dark Editorial'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0D12] text-[#E7EAF0] antialiased selection:bg-[#83BFD0] selection:text-[#0B0D12]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
