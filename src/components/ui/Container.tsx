export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-[min(calc(100%-2.5rem),1216px)] md:w-[min(calc(100%-4rem),1216px)] ${className}`}>{children}</div>;
}
