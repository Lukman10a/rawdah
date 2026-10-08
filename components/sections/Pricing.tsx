import { Eyebrow } from '@/components/ui/Section'

export default function Pricing(){
  return (
    <section id="pricing" className="py-14 lg:py-16 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[640px] mx-auto">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">Choose Your Payment Plan</h2>
          <p className="mt-2 text-sm text-charcoal/60">4 one-on-one sessions per week • 40 minutes each • 20 weeks</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-5 max-w-[880px] mx-auto">
          {/* Full */}
          <div className="relative bg-white rounded-[20px] border-2 border-cta p-6 shadow-soft">
            <span className="absolute -top-3 left-6 bg-gold text-forest text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">Recommended — Save $25</span>
            <h3 className="font-semibold text-forest">Full Payment</h3>
            <p className="mt-2"><span className="text-[40px] font-extrabold tracking-tight text-forest">$500</span> <span className="text-sm text-charcoal/50">one-time • 20-week program</span></p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {['20 weeks','4 one-on-one sessions per week','40-minute sessions','Course materials','Telegram support','Certificate upon completion'].map(x=>(
                <li key={x} className="flex gap-2.5 items-center"><span className="w-5 h-5 rounded-full bg-sage grid place-items-center text-[10px] text-cta">✓</span>{x}</li>
              ))}
            </ul>
            <a href="#enroll" className="mt-6 flex bg-cta hover:bg-ctaHover text-white justify-center font-semibold py-3.5 rounded-xl transition-colors">Enroll With Full Payment</a>
          </div>
          {/* Monthly */}
          <div className="bg-ivory rounded-[20px] border border-sage p-6">
            <h3 className="font-semibold text-forest">Monthly Payment</h3>
            <p className="mt-2"><span className="text-[40px] font-extrabold tracking-tight text-forest">$105</span> <span className="text-sm text-charcoal/50">/ month • 5 monthly payments</span></p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {['Same complete curriculum','4 one-on-one sessions per week','Course materials','Telegram support','Certificate upon completion'].map(x=>(
                <li key={x} className="flex gap-2.5 items-center"><span className="w-5 h-5 rounded-full bg-white border border-sage grid place-items-center text-[10px] text-cta">✓</span>{x}</li>
              ))}
            </ul>
            <a href="#enroll" className="mt-6 flex bg-white border border-sage text-forest justify-center font-semibold py-3.5 rounded-xl hover:bg-sage/30 transition-colors">Choose Monthly Plan</a>
          </div>
        </div>
        <div className="max-w-[880px] mx-auto mt-6 bg-ivory rounded-[16px] border border-sage/50 p-5 text-sm">
          <p className="font-semibold text-forest">Payment information</p>
          <p className="text-charcoal/65 mt-1">International students may currently pay using the provided payment methods. Nigerian students should pay the equivalent amount in Naira.</p>
          <div className="mt-3 bg-white rounded-xl border border-sage p-4 flex flex-wrap gap-6 text-xs">
            <div><p className="font-semibold text-forest">GTBank</p><p className="text-charcoal/65">Account: 0431141470</p><p className="text-charcoal/65">Name: AbdulRauf Lukman Olamide</p></div>
            <div className="ml-auto"><p className="font-semibold text-forest">Supported transfer services</p><p className="text-charcoal/65"><a href="https://www.sendwave.com/" className="text-cta underline">Sendwave</a> • <a href="https://www.remitly.com/" className="text-cta underline">Remitly</a> • <a href="https://www.wise.com/" className="text-cta underline">Wise</a></p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
