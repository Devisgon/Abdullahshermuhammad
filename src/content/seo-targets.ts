// One primary search intent per landing page. Keep each description aligned with the visible offer.
export type SearchTarget = {
  title: string;
  description: string;
  heading: string;
  summary: string;
  question: string;
  answer: string;
};

export const offerSearchTargets: Record<string, SearchTarget> = {
  'ai-receptionist': {
    title: 'AI Receptionist for Business Calls',
    description: 'Design an AI receptionist for inbound calls: capture enquiries, answer approved questions, qualify callers and hand urgent or complex requests to your team.',
    heading: 'An AI receptionist for a defined call workflow',
    summary: 'An AI receptionist can provide a first response when your team cannot pick up. I design the call flow around the questions you approve, the details your team needs and the point at which a person should take over.',
    question: 'Can it book appointments or transfer urgent calls?',
    answer: 'Those steps can be included when your phone provider, calendar, availability and escalation rules support them. The first version is tested against real call types before you rely on it.',
  },
  'ai-call-agents': {
    title: 'Custom AI Voice Agents for Business',
    description: 'Build a custom AI voice agent for defined business calls, with approved answers, structured call notes, CRM or calendar integration and a clear human transfer.',
    heading: 'Custom AI voice agents with clear boundaries',
    summary: 'A voice agent is useful when one call type follows a repeatable path. The design specifies what it may say, what information it should collect, which tools it can use and when it must transfer the call.',
    question: 'How is a voice agent different from a basic phone menu?',
    answer: 'A voice agent can interpret a caller’s request and collect context through conversation. Its actions still need explicit rules, tested integrations and an escalation path for anything uncertain.',
  },
  'lead-follow-up': {
    title: 'Automated Lead Follow-Up and CRM Integration',
    description: 'Automate lead response and follow-up across forms, calls, email and your CRM. Capture the enquiry, route it, record the next step and keep your team informed.',
    heading: 'Lead follow-up automation connected to your CRM',
    summary: 'A new lead is useful only if it reaches the right person with enough context. I map the source, qualification questions, response timing, CRM record and follow-up rules into one process.',
    question: 'Can this work with our existing CRM?',
    answer: 'Often yes, if the CRM has suitable APIs, webhooks or supported integrations. The workflow should be scoped around your current tools rather than assuming you need to replace them.',
  },
  'ai-automation': {
    title: 'Business Process Automation and Workflow Integration',
    description: 'Connect your CRM, forms, email, calendars and internal tools with business process automation. Reduce duplicate data entry and define reliable handoffs.',
    heading: 'Business process automation for disconnected tools',
    summary: 'Workflow automation moves information from one system to the next using defined triggers, mappings and rules. AI is added only where the process needs interpretation or classification; routine data transfers can stay deterministic.',
    question: 'Where should a business start with workflow automation?',
    answer: 'Choose one repetitive process with a clear trigger, owner and measurable next step. Then check the data sources, exceptions and failure alerts before automating more of the workflow.',
  },
  'ai-chatbot': {
    title: 'AI Customer Support Chatbot Development',
    description: 'Develop a customer support AI chatbot grounded in approved answers, connected to your support workflow and designed to hand uncertain cases to a person.',
    heading: 'A customer support chatbot grounded in your answers',
    summary: 'A support assistant should use the knowledge you approve, explain its limits and pass exceptions to your team. It can help with recurring questions without inventing policy or replacing human judgment.',
    question: 'What happens when the chatbot cannot answer?',
    answer: 'The conversation can be escalated with its context attached. The trigger for escalation is defined during design and tested against uncertain, sensitive and unusual questions.',
  },
  'ai-agents': {
    title: 'Custom AI Agent Development for Business',
    description: 'Build focused AI agents for business tasks with approved tools, defined permissions, action logs and human review where a decision needs judgment.',
    heading: 'Custom AI agents for a specific business task',
    summary: 'An AI agent needs a job, a bounded set of tools and a way to check what it did. I define the permitted actions, input data, output format and human review points before connecting it to a live workflow.',
    question: 'What makes a business AI agent reliable?',
    answer: 'A narrow task, limited permissions, test cases, action logs and a clear handoff make its behavior easier to evaluate. An open-ended prompt alone is not an operating process.',
  },
  'custom-ai-systems': {
    title: 'Custom AI Business Systems and API Integration',
    description: 'Build custom dashboards, portals, APIs and AI integrations when off-the-shelf tools cannot support your business workflow, users or data model.',
    heading: 'Custom business systems around your workflow',
    summary: 'A custom system can provide the missing layer between existing applications: a portal for users, an API for integrations, a dashboard for the team or a backend for specific business rules.',
    question: 'When is custom software the right choice?',
    answer: 'Consider it when the necessary workflow cannot be implemented reliably in your current tools, or when permissions, data ownership and maintenance need more control.',
  },
};

export const industrySearchTargets: Record<string, SearchTarget> = {
  hvac: {
    title: 'AI Call Answering for HVAC Companies',
    description: 'Plan HVAC call answering and lead follow-up for busy service teams. Capture no-heat, no-cool and maintenance enquiries, assess urgency and route the details.',
    heading: 'AI call answering for HVAC service requests',
    summary: 'HVAC calls can have very different next steps: a no-heat request needs a different response from a maintenance enquiry or an installation estimate. A defined intake flow captures the job type, location and urgency.',
    question: 'Can an HVAC call be routed to an on-call technician?',
    answer: 'It can be designed to transfer or alert the right person when your phone system and on-call rules support that. Emergency criteria and fallback contacts must be agreed before launch.',
  },
  roofing: {
    title: 'Roofing Lead Follow-Up Automation',
    description: 'Automate roofing estimate lead response, qualification, appointment requests and CRM updates so enquiries have a clear next step while your team is on site.',
    heading: 'Roofing lead follow-up after the estimate request',
    summary: 'A roofing lead may start with a form, phone call or referral. A connected workflow can capture the property and project details, record the enquiry and prompt the right person to follow up.',
    question: 'Can it follow up after a roofing estimate request?',
    answer: 'Yes, with an approved timing and channel plan. The team should review the wording, exceptions and stop conditions before any follow-up sequence goes live.',
  },
  plumbing: {
    title: 'AI Call Answering for Plumbing Companies',
    description: 'Capture plumbing calls while technicians are on jobs. Collect service type, location and urgency, then route emergencies or schedule the next follow-up.',
    heading: 'Plumbing call answering with urgency rules',
    summary: 'A plumbing enquiry needs enough context for the next person to act. The intake flow can separate urgent requests from routine repairs, capture the location and send the right details to dispatch.',
    question: 'How are urgent plumbing calls handled?',
    answer: 'You define what counts as urgent and who is available to receive it. The system can alert or transfer according to those rules, with a fallback when no one answers.',
  },
  'home-services': {
    title: 'AI Automation for Home Service Companies',
    description: 'Plan call answering, lead qualification, booking requests and CRM workflows for home service teams that work in the field and need reliable handoffs.',
    heading: 'AI automation for home service teams in the field',
    summary: 'Home service businesses often receive calls and form enquiries while the crew is with a customer. A focused workflow can capture the request, qualify the job and deliver the context to the office.',
    question: 'Which home service workflow should be automated first?',
    answer: 'Start with one high-friction handoff, such as missed-call intake or estimate follow-up. Confirm the service area, calendar availability and escalation rules before adding more channels.',
  },
};
