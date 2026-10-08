export default function Snapshot(){
  const items = [
    ['20 Weeks','5-Month Program'],
    ['4 Sessions / Week','One-on-One'],
    ['40 Minutes','Each Live Session'],
    ['Online','Worldwide'],
    ['Certificate','Upon Completion'],
  ]
  return (
    <section className="py-10 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {items.map(([k,v])=>(
            <div key={k} className="bg-white rounded-[16px] border border-sage/60 p-5 text-center shadow-card">
              <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-cta">{v}</p>
              <p className="mt-1 font-bold text-forest">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
