export function ContactIntro({ review = false }: { review?: boolean }) {
  const points = review
    ? ['Identify the bottleneck.', 'Map a safe first version.', 'Decide whether a build makes sense.']
    : ['I review your workflow.', 'I identify a practical first step.', 'We discuss a scope if there is a fit.'];
  return <div>
    <p className="mb-5 text-xs font-extrabold tracking-widest text-highlight">{review ? '15-MINUTE AUTOMATION REVIEW' : 'START A CONVERSATION'}</p>
    <h1 className="text-[clamp(2.8rem,4.5vw,4.6rem)] leading-[1.08] font-bold tracking-[-0.055em]">{review ? <>Bring one workflow. Leave with <span className="text-highlight">a clearer plan.</span></> : <>Tell me what is still being done <span className="text-highlight">manually.</span></>}</h1>
    <p className="mt-6 text-lg leading-relaxed text-muted">{review ? 'We’ll look at what starts the process, where information goes and where a person needs to stay in control.' : 'Give me the short version. I’ll tell you whether it looks automatable and what I would start with.'}</p>
    <div className="mt-9 border-t border-edge">{points.map((point, index) => <div key={point} className="border-b border-edge py-4 text-sm font-bold text-link">0{index + 1} / {point}</div>)}</div>
    {review && <p className="mt-5 text-sm text-muted">Use the form to request a review. It does not reserve a calendar time.</p>}
  </div>;
}
