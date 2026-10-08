export function Section({ id, children, className='', bg=''}: { id?:string; children:React.ReactNode; className?:string; bg?:string }) {
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}
export function Eyebrow({ children }: { children:React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] font-semibold uppercase text-cta">
      <span className="w-6 h-[1.5px] bg-gold rounded-full" /> {children}
    </div>
  )
}
export function Pill({ children }: { children:React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-sage text-charcoal shadow-sm">{children}</span>
}
