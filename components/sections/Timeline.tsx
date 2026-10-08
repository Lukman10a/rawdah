import { Eyebrow } from '@/components/ui/Section'

const steps = [
  { week:'Week 1', title:'Assessment + Starting Point', desc:'Placement, recitation check and personal plan.' },
  { week:'Weeks 2–6', title:'Memorization + Daily Revision', desc:'New memorization introduced at the student’s pace.' },
  { week:'Weeks 7–12', title:'Continued Memorization + Retention', desc:'Building fluency with regular revision.' },
  { week:'Weeks 13–18', title:'Memorization + Consolidation', desc:'Strengthening retention across surahs.' },
  { week:'Weeks 19–20', title:'Final Revision + Completion', desc:'Final review and completion of Juz ’Amma.' },
]

export default function Timeline(){
  return (
    <section id="program" className="py-14 lg:py-20 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[720px]">
          <Eyebrow>Course Overview</Eyebrow>
          <h2 className="mt-3 text-[28px] lg:text-[34px] font-bold leading-tight tracking-tight text-forest">A Structured 5-Month Journey Through Juz ’Amma</h2>
          <p className="mt-3 text-[15px] leading-7 text-charcoal/70">Students follow a structured memorization and revision plan with individual guidance, Tajweed correction and regular progress checks.</p>
        </div>
        <div className="mt-10 relative">
          {/* line */}
          <div className="hidden lg:block absolute left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-gold/40 via-sage to-transparent" />
          <div className="grid gap-4">
            {steps.map((s,i)=>(
              <div key={s.week} className="flex gap-4 lg:gap-6 items-start">
                <div className="hidden lg:grid w-11 h-11 rounded-full bg-white border border-sage shadow-sm place-items-center text-xs font-bold text-cta shrink-0">{String(i+1).padStart(2,'0')}</div>
                <div className="flex-1 bg-white rounded-[16px] border border-sage/60 p-5 flex flex-col sm:flex-row sm:items-center gap-3 shadow-card">
                  <span className="inline-flex text-[11px] font-semibold tracking-widest uppercase bg-forest text-white px-2.5 py-1 rounded-full self-start">{s.week}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-forest">{s.title}</p>
                    <p className="text-sm text-charcoal/60">{s.desc}</p>
                  </div>
                  {i<steps.length-1 && <span className="hidden sm:block text-sage">→</span>}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-charcoal/50">Timeline is explanatory — weekly targets adapt to the student’s pace and teacher guidance.</p>
        </div>
      </div>
    </section>
  )
}
