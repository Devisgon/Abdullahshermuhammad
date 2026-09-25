import { Container } from '@/components/ui/Container';
import { SectionIntro } from '@/components/ui/SectionIntro';

export function WorkflowComparison() {
  return <section className="py-20 md:py-28">
    <Container>
      <SectionIntro eyebrow="A SAMPLE WORKFLOW" title="What changes after" highlight="the lead comes in?" />
      <div className="grid overflow-hidden rounded-lg border border-[#e6dce8] md:grid-cols-2">
        <div className="flex flex-col bg-white p-8 md:p-11">
          <span className="text-xs font-extrabold tracking-widest text-accent">TODAY</span>
          <h3 className="mt-8 text-2xl font-bold">A new enquiry arrives.</h3>
          <p className="mt-4 flex-1 leading-relaxed text-muted">Someone sees it later, copies details into the CRM, sends a response and tries to remember the next follow-up.</p>
          <p className="mt-10 border-t border-[#e8ddec] pt-5 text-sm font-bold text-brand">Inbox → Person → CRM → Calendar</p>
        </div>
        <div className="flex flex-col bg-[#f0e8f2] p-8 md:p-11">
          <span className="text-xs font-extrabold tracking-widest text-accent">WITH A CONNECTED WORKFLOW</span>
          <h3 className="mt-8 text-2xl font-bold">The next step is already moving.</h3>
          <p className="mt-4 flex-1 leading-relaxed text-muted">The enquiry is captured, classified against your rules, logged, answered and routed to the right person when needed.</p>
          <p className="mt-10 border-t border-[#d5c4da] pt-5 text-sm font-bold text-brand">Enquiry → Rules + AI → CRM + Response + Handoff</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-muted">Illustrative workflow. The actual steps and tools are defined around your business.</p>
    </Container>
  </section>;
}
