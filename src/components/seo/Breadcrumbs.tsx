import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { siteUrl } from '@/lib/seo';

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: 'Home', path: '/' }, ...items];
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(({ name, path }, index) => ({
      '@type': 'ListItem', position: index + 1, name, item: new URL(path, siteUrl).href,
    })),
  };

  return <Container className="pt-6">
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {trail.map(({ name, path }, index) => <li key={path} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {index === trail.length - 1
            ? <span aria-current="page">{name}</span>
            : <Link href={path} className="underline hover:text-highlight">{name}</Link>}
        </li>)}
      </ol>
    </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
  </Container>;
}
