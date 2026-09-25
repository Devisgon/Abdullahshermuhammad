export function FormField({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return <label className="flex flex-col gap-2 text-sm font-semibold text-ink [&_input]:min-h-12 [&_input]:w-full [&_input]:rounded [&_input]:border [&_input]:border-[#d9cadf] [&_input]:bg-white [&_input]:px-3 [&_input]:outline-none [&_input:focus]:border-accent [&_select]:min-h-12 [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-[#d9cadf] [&_select]:bg-white [&_select]:px-3 [&_select]:outline-none [&_select:focus]:border-accent [&_textarea]:min-h-28 [&_textarea]:w-full [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-[#d9cadf] [&_textarea]:bg-white [&_textarea]:p-3 [&_textarea]:outline-none [&_textarea:focus]:border-accent">
    <span>{label}</span>
    {children}
  </label>;
}
