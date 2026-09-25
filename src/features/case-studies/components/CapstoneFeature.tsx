import { Container } from '@/components/ui/Container';
import { Callout } from '@/components/ui/Callout';

const details = [
  ['THE PROCESS', 'Student emails arrive across topics such as exams, finance, registration and technical support.'],
  ['THE SYSTEM', 'Gmail ingestion and workflow orchestration, FastAPI services, Supabase data storage and AI-assisted classification.'],
  ['HUMAN CONTROL', 'Department staff handle the actual response and exceptions; the system supports sorting and routing.'],
  ['STATUS', 'Academic build in progress. No production performance claims.'],
];

export function CapstoneFeature() {
  return <section className="pb-24">
    <Container>
      <article className="grid gap-10 rounded-lg border border-[#e7dbe9] bg-white p-8 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-xs font-extrabold tracking-widest text-accent">UNIVERSITY CAPSTONE · IN DEVELOPMENT</p>
          <h2 className="mt-6 text-3xl leading-tight font-bold tracking-tight md:text-4xl">Smart Query Routing & Email Automation System</h2>
          <p className="mt-6 leading-relaxed text-muted">A university communication platform designed to classify incoming student email queries, route them to the responsible department and give staff a role-based view of the work.</p>
        </div>
        <div>{details.map(([label, detail]) => <div key={label} className="border-b border-[#e8ddec] py-4 first:pt-0">
            <strong className="text-xs tracking-widest text-accent">{label}</strong>
            <p className="mt-2 leading-relaxed text-muted">{detail}</p>
          </div>)}</div>
      </article>
      <Callout title="Have a similar routing or response problem?" description="Show me where incoming work gets stuck and which teams need to receive it." cta="Show me your process" />
    </Container>
  </section>;
}
