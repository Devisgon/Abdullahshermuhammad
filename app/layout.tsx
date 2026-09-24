import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: { default: 'Abdullah Sher Muhammad | AI Automation & Business Systems', template: '%s | Abdullah Sher Muhammad' }, description: 'Practical AI automation, lead follow-up, call handling and connected business systems designed by Abdullah Sher Muhammad, software engineer and founder of Devisgon.', icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' } };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
