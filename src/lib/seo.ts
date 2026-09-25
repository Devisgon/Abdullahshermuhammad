import type { Metadata } from 'next';

export const siteUrl = 'https://abdullahshermuhammad.me';
export const siteName = 'Abdullah Sher Muhammad';
export const socialImage = `${siteUrl}/images/og-image.png`;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const url = new URL(path, siteUrl).toString();
  const socialTitle = path === '/' ? title : `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName,
      title: socialTitle,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: `${siteName} — AI automation and business systems`, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [{ url: socialImage, alt: `${siteName} — AI automation and business systems` }],
    },
  };
}
