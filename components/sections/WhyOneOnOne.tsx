import { Eyebrow } from '@/components/ui/Section'

export default function WhyOneOnOne(){
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <Eyebrow>Why One-on-One?</Eyebrow>
            <h2 className="mt-3 text-[26px] lg:text-[30px] font-bold leading-tight tracking-tight text-forest">Your Child Isn’t Just Another Student in a Class.</h2>
            <p className="mt-3 text-[15px] leading-7 text-charcoal/70">One-on-one instruction allows the teacher to focus directly on each student’s recitation, memorization, mistakes, pace and areas that need improvement.</p>
            <a href="#enroll" className="mt-5 inline-flex bg-cta text-white font-semibold px-6 py-3 rounded-xl">Enroll in Juz ’Amma</a>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              ['Personalized Pace','Learning adapts to your child, not a class average.'],
              ['Teacher Attention','Full focus on recitation and correction.'],
              ['Tajweed Correction','Immediate correction of pronunciation.'],
              ['Memorization Guidance','Clear plan for new hifz and revision.'],
              ['Revision Support','Structured review so hifz stays firm.'],
              ['Progress Tracking','Regular checks and feedback to parents.'],
            ].map(([t,d])=>(
              <div key={t} className="bg-ivory rounded-[16px] border border-sage/50 p-5">
                <p className="font-semibold text-forest text-sm">{t}</p>
                <p className="text-sm text-charcoal/60 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
