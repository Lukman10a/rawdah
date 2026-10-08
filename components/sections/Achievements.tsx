import { Eyebrow } from '@/components/ui/Section'

export default function Achievements(){
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>Outcomes</Eyebrow>
        <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">What Will Your Child Learn?</h2>
        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid gap-4">
            {[
              ['Complete Memorization of Juz ’Amma','Students work toward memorizing all surahs of Juz ’Amma with structure and revision.', '★'],
              ['Correct Tajweed & Pronunciation','Teacher corrects makharij, sifaat and recitation in every one-on-one session.', '۞'],
              ['Stronger Memorization Through Regular Revision','Daily and weekly revision protects what has been memorized.', '↻'],
              ['Greater Consistency and Accountability','Fixed schedule, progress tracking and gentle accountability.', '✓'],
            ].map(([t,d,ic])=>(
              <div key={t} className="bg-ivory rounded-[16px] border border-sage/50 p-5 flex gap-4">
                <span className="w-9 h-9 rounded-xl bg-forest text-white grid place-items-center text-sm shrink-0">{ic}</span>
                <div>
                  <p className="font-semibold text-forest">{t}</p>
                  <p className="text-sm text-charcoal/60 mt-1">{d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5">
            <div className="bg-forest rounded-[20px] p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 islamic-pattern" />
              <div className="relative">
                <p className="text-xs tracking-[0.16em] uppercase font-semibold text-gold">Bonus</p>
                <h3 className="mt-1 text-xl font-bold">More Than Memorization</h3>
                <p className="text-sm text-white/70 mt-2">Additional adhkaar taught alongside Juz ’Amma — visually separated from the core promise.</p>
                <div className="mt-4 gold-divider" />
                <ul className="mt-4 grid gap-2.5 text-sm">
                  {['Basic Aqeedah','Morning & Evening Adhkaar','Toilet Etiquette Supplications','Eating & Drinking Adhkaar','New Clothes Supplications','House Entry & Exit Adhkaar'].map(x=>(
                    <li key={x} className="flex gap-2.5 items-center text-white/90"><span className="w-1.5 h-1.5 rounded-full bg-gold" />{x}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-white/60">Bonus content complements — not competes with — the Juz ’Amma goal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
