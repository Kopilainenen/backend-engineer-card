import type { Metadata } from 'next';
import { Manrope, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import './profile-links.css';
const sans = Manrope({ variable: '--font-sans', subsets: ['cyrillic', 'latin'] });
const mono = IBM_Plex_Mono({ variable: '--font-mono', subsets: ['cyrillic', 'latin'], weight: ['400', '500'] });
export const metadata: Metadata = {
  metadataBase: new URL('https://backend-engineer-card.sites.openai.com'),
  title: 'Backend Engineer — Type-safe systems',
  description: 'Цифровая визитка Backend Engineer: TypeScript, Node.js, NestJS, Prisma, GraphQL, Docker, Git и Claude Code.',
  openGraph: { title: 'Backend Engineer', description: 'Type-safe systems. Production-minded.', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: 'Backend Engineer', description: 'Type-safe systems. Production-minded.', images: ['/og.png'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>; }
