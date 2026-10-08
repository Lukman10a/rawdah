export default function TrustStrip(){
  const items = [
    ['20 Weeks','Structured Memorization Journey'],
    ['4 Sessions / Week','Live One-on-One Instruction'],
    ['40 Minutes','Focused Individual Sessions'],
    ['Worldwide','Online Learning'],
  ]
  return (
    <section className="bg-white border-y border-sage/60">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
          <p className="text-xs tracking-[0.16em] uppercase font-semibold text-forest whitespace-nowrap">Built for serious Qur’an learning</p>
          <div className="hidden lg:block h-6 w-px bg-sage" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
            {items.map(([k,v])=>(
              <div key={k} className="flex gap-3 items-start">
                <span className="mt-0.5 w-7 h-7 rounded-full bg-sage grid place-items-center text-cta text-xs">✓</span>
                <div>
                  <p className="text-sm font-semibold text-forest leading-none">{k}</p>
                  <p className="text-xs text-charcoal/60 mt-1">{v}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
