import type { Metadata } from 'next';
import Script from 'next/script';
import { siteUrl } from '@/lib/seo';
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
  title: {
    default: 'AI Automation Consultant for Service Businesses | Abdullah Sher Muhammad',
    template: '%s | Abdullah Sher Muhammad',
  },
  applicationName: 'Abdullah Sher Muhammad',
  authors: [{ name: 'Abdullah Sher Muhammad', url: siteUrl }],
  creator: 'Abdullah Sher Muhammad',
  publisher: 'Abdullah Sher Muhammad',
  icons: { icon: '/abdullah-sher-muhammad-icon.webp', shortcut: '/abdullah-sher-muhammad-icon.webp' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <meta name="msvalidate.01" content="7395FE97494B8D13871BB0B96853B25C" />
      <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6JJSES919J');` }} />
    </head>
    <body className="bg-surface font-sans text-ink antialiased">
      {children}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6JJSES919J" strategy="afterInteractive" />
      <Script id="microsoft-clarity" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window,document,"clarity","script","ynz12z6v87");`}
      </Script>
    </body>
  </html>;
}
