import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { AboutStory } from '@/features/about/components/AboutStory';

export const metadata: Metadata = createPageMetadata({ title: 'About Abdullah', description: 'Meet Abdullah Sher Muhammad, software engineer and founder of Devisgon, building AI automation around practical business workflows.', path: '/about/' });
export default function AboutPage() {
  return <main>
    <PageIntro eyebrow="ABOUT ABDULLAH" title="I build AI systems around" highlight="real business processes.">I’m Abdullah Sher Muhammad, a software engineer and founder of Devisgon. My work sits where software engineering, automation and AI integration meet.</PageIntro>
    <AboutStory />
  </main>;
}
