import { Check } from 'lucide-react';

const points = ['Focused on your actual business process', 'No software purchase required', 'No obligation to hire me'];

export function AssessmentIntro() {
  return <div>
    <p className="mb-5 text-xs font-extrabold tracking-widest text-highlight">FREE AI OPPORTUNITY ASSESSMENT</p>
    <h1 className="text-[clamp(2.8rem,4.5vw,4.6rem)] leading-[1.08] font-bold tracking-[-0.055em]">Find the work your team <span className="text-highlight">shouldn’t have to repeat.</span></h1>
    <p className="mt-6 text-lg leading-relaxed text-muted">Answer a few questions about the process, tools and timing. I’ll review your answers and look for a practical place to start.</p>
    <div className="mt-9 space-y-4">{points.map(point => <div className="flex items-center gap-3 font-medium" key={point}>
        <Check size={18} className="text-highlight" />
        {point}
      </div>)}</div>
  </div>;
}
