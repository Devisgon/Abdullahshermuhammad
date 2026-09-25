import { Phone, ArrowRight, Workflow, MessagesSquare, Bot, PanelsTopLeft } from 'lucide-react';

export const homeServices = [
  { icon: Phone, title: 'AI receptionist', description: 'Answer defined calls, capture intent, qualify enquiries and pass the right ones to your team.', href: '/ai-receptionist', label: 'Explore call handling' },
  { icon: ArrowRight, title: 'Lead follow-up', description: 'Respond to new enquiries, update your CRM and keep follow-up moving on your rules.', href: '/lead-follow-up', label: 'Explore lead follow-up' },
  { icon: Workflow, title: 'Workflow automation', description: 'Connect forms, email, calendars, spreadsheets, databases and the software you already use.', href: '/ai-automation', label: 'Explore automation' },
  { icon: MessagesSquare, title: 'Customer support AI', description: 'Answer approved questions and hand complex or sensitive conversations to a person.', href: '/ai-chatbot', label: 'Explore support AI' },
  { icon: Bot, title: 'Focused AI agents', description: 'Give an agent a defined task, approved tools, clear limits and a human handoff.', href: '/ai-agents', label: 'Explore AI agents' },
  { icon: PanelsTopLeft, title: 'Custom business systems', description: 'Build an API, dashboard or app when your workflow needs more than a no-code tool.', href: '/custom-ai-systems', label: 'Explore custom systems' },
];

export const servicePaths = ['ai-receptionist', 'lead-follow-up', 'ai-automation', 'ai-chatbot', 'ai-agents', 'custom-ai-systems', 'ai-call-agents'];
