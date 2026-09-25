export function FormCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-edge bg-panel p-6 shadow-[0_15px_45px_#40005b0e] md:p-9 ${className}`}>{children}</div>;
}
