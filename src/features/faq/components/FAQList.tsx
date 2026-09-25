import { Container } from '@/components/ui/Container';
import { Callout } from '@/components/ui/Callout';

const questions = [
  ['Is this just another chatbot?', 'No. A chatbot can be one part of a workflow. The useful system also defines data, actions, integrations and where a person takes over.'],
  ['Do I need to replace my CRM?', 'Usually not. I first look at whether your current CRM can support the process through its APIs, workflows or existing integrations.'],
  ['Can AI answer phone calls and book appointments?', 'It can handle defined call types and connect to a calendar when your phone, scheduling tools and business rules support it. We test the handoff carefully.'],
  ['Will AI make decisions without my team?', 'Only decisions you explicitly approve for the workflow. Uncertain, sensitive or high-value cases can be routed to a person.'],
  ['How quickly can something be built?', 'A contained first version can be quicker than a custom platform, but the timeline depends on access, integrations, edge cases and testing.'],
  ['How much does automation cost?', 'The free assessment is a first conversation. Implementation is quoted against a defined scope, integrations and support needs.'],
  ['Do you work with agencies?', 'Yes. I can lead technical delivery through Devisgon while your agency owns its client relationship.'],
  ['What happens after the assessment?', 'Your answers are saved for review. I use them to identify a practical starting point and follow up using the email you provided.'],
];

export function FAQList() {
  return <section className="pb-24">
    <Container>
      <div className="max-w-[900px] divide-y divide-[#e8ddec] border-y border-[#e8ddec]">{questions.map(([question, answer]) => <details key={question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold marker:hidden">
            {question}
            <span aria-hidden="true" className="text-2xl text-accent group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-[780px] pt-4 leading-relaxed text-muted">{answer}</p>
        </details>)}</div>
      <Callout title="Still have a question about your process?" description="Tell me where the work gets stuck." cta="Ask Abdullah about my workflow" />
    </Container>
  </section>;
}
