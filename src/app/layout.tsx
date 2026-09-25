import type { Metadata } from 'next';
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
  title: {
    default: 'Abdullah Sher Muhammad | AI Automation & Business Systems',
    template: '%s | Abdullah Sher Muhammad',
  },
  description: 'Practical AI automation, lead follow-up, call handling and connected business systems designed by Abdullah Sher Muhammad, software engineer and founder of Devisgon.',
  icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: initializeTheme }} /></head>
    <body className="bg-surface font-sans text-ink antialiased">{children}</body>
  </html>;
}
