import type { Metadata } from 'next';
import { createPageMetadata, siteUrl } from '@/lib/seo';
import './globals.css';

const initializeTheme = `(function () {
  var dark = false;
  try {
    var saved = localStorage.getItem('asm-theme');
    dark = saved === 'dark' || (saved === null && matchMedia('(prefers-color-scheme: dark)').matches);
  } catch {
    dark = matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.documentElement.classList.toggle('dark', dark);
})();`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...createPageMetadata({
    title: 'Abdullah Sher Muhammad | AI Automation & Business Systems',
    description: 'Practical AI automation, lead follow-up, call handling and connected business systems designed by Abdullah Sher Muhammad, software engineer and founder of Devisgon.',
    path: '/',
  }),
  title: {
    default: 'Abdullah Sher Muhammad | AI Automation & Business Systems',
    template: '%s | Abdullah Sher Muhammad',
  },
  applicationName: 'Abdullah Sher Muhammad',
  authors: [{ name: 'Abdullah Sher Muhammad', url: siteUrl }],
  creator: 'Abdullah Sher Muhammad',
  publisher: 'Abdullah Sher Muhammad',
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: initializeTheme }} /></head>
    <body className="bg-surface font-sans text-ink antialiased">{children}</body>
  </html>;
}
