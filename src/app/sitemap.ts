import type { MetadataRoute } from 'next';
import { industries } from '@/content/industries';
import { offerPaths } from '@/content/offers';
import { siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

const pages = [
  '/', '/about/', '/assessment/', '/book-call/', '/case-studies/',
  '/contact/', '/faq/', '/industries/', '/partners/', '/pricing/',
  '/privacy/', '/services/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...pages,
    ...offerPaths.map(slug => `/${slug}/`),
    ...Object.keys(industries).map(slug => `/industries/${slug}/`),
  ];

  return paths.map(path => ({ url: new URL(path, siteUrl).toString() }));
}
