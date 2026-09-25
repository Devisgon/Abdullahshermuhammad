import { ArrowRight, Check, MessageSquare, Phone, Workflow } from 'lucide-react';
import type { OfferPage } from '@/content/offers';

const visuals = {
  calls: { tag: 'INBOUND CALL / EXAMPLE', main: 'New service enquiry', items: ['Call answered', 'Service and location captured', 'Urgency checked', 'Team notified'] },
  lead: { tag: 'LEAD TIMELINE / EXAMPLE', main: 'Website enquiry received', items: ['Source identified', 'First reply sent', 'CRM updated', 'Follow-up scheduled'] },
  flow: { tag: 'CONNECTED WORKFLOW / EXAMPLE', main: 'Form received', items: ['Data validated', 'Record synchronized', 'Relevant message sent', 'Owner notified'] },
  support: { tag: 'SUPPORT / EXAMPLE', main: 'Customer asks a question', items: ['Approved answer found', 'Response drafted', 'Policy checked', 'Human handoff if needed'] },
  agents: { tag: 'AGENT TASK / EXAMPLE', main: 'Email arrives', items: ['Context retrieved', 'Category assigned', 'Action proposed', 'Human reviews exception'] },
  system: { tag: 'BUSINESS SYSTEM / EXAMPLE', main: 'Request enters portal', items: ['Access checked', 'Data stored', 'Workflow triggered', 'Dashboard updated'] },
};

export function OfferVisual({ kind }: { kind: OfferPage['visual'] }) {
  const visual = visuals[kind];
  const Icon = kind === 'calls' ? Phone : kind === 'support' ? MessageSquare : Workflow;
  return <div className="overflow-hidden rounded-lg border border-[#dfd0e3] bg-white shadow-[0_24px_60px_#40005b17]" aria-label={`Illustrative ${kind} workflow`}>
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e8ddec] bg-[#f5eff7] p-5 text-[10px] font-bold tracking-wider text-brand">
      <span aria-hidden="true" className="flex gap-1">
        <i className="size-2 rounded-full bg-accent" />
        <i className="size-2 rounded-full bg-[#c9a2d3]" />
        <i className="size-2 rounded-full bg-[#c9a2d3]" />
      </span>
      {visual.tag}
      <span>ILLUSTRATION</span>
    </div>
    <div className="p-6 md:p-8">
      <div className="mb-5 flex items-center gap-4 rounded bg-brand p-5 text-white">
        <Icon size={24} />
        <div>
          <small className="block text-[#eadcec]">TRIGGER / 09:41</small>
          <strong>{visual.main}</strong>
        </div>
      </div>
      {visual.items.map((item, index) => <div key={item} className="flex items-center gap-4 border-b border-[#e8ddec] py-4">
        <span className="text-xs font-bold text-accent">0{index + 1}</span>
        <span className="flex-1 text-sm font-medium">{item}</span>
        <Check size={16} className="text-accent" />
      </div>)}
    </div>
    <div className="flex items-center justify-between bg-[#f5eff7] px-6 py-4 text-xs font-semibold text-brand">Designed around your actual process. <ArrowRight size={16} /></div>
  </div>;
}
