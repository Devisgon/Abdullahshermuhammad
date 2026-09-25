export function FormField({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  return <label className="flex flex-col gap-2 text-sm font-semibold text-ink [&_input]:min-h-12 [&_input]:w-full [&_input]:rounded [&_input]:border [&_input]:border-edge-strong [&_input]:bg-input [&_input]:text-ink [&_input]:placeholder:text-muted [&_input]:px-3 [&_input]:outline-none [&_input:focus]:border-highlight [&_select]:min-h-12 [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-edge-strong [&_select]:bg-input [&_select]:text-ink [&_select]:px-3 [&_select]:outline-none [&_select:focus]:border-highlight [&_textarea]:min-h-28 [&_textarea]:w-full [&_textarea]:rounded [&_textarea]:border [&_textarea]:border-edge-strong [&_textarea]:bg-input [&_textarea]:text-ink [&_textarea]:placeholder:text-muted [&_textarea]:p-3 [&_textarea]:outline-none [&_textarea:focus]:border-highlight">
    <span>{label}</span>
    {children}
  </label>;
}
