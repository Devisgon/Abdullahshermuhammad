import { siteUrl } from '@/lib/seo';

const identity = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#abdullah`,
      name: 'Abdullah Sher Muhammad',
      url: siteUrl,
      jobTitle: 'Software engineer and founder of Devisgon',
      homeLocation: { '@type': 'Place', name: 'Okara, Pakistan' },
      worksFor: { '@type': 'Organization', name: 'Devisgon', url: 'https://devisgon.com' },
      sameAs: ['https://www.linkedin.com/in/abdullahshermuhammad/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: 'Abdullah Sher Muhammad',
      url: siteUrl,
      inLanguage: 'en',
      publisher: { '@id': `${siteUrl}/#abdullah` },
    },
  ],
};

export function IdentitySchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(identity).replace(/</g, '\\u003c') }} />;
}
