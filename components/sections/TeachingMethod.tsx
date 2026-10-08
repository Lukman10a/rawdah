import { Eyebrow } from '@/components/ui/Section'

export default function TeachingMethod(){
  return (
    <section id="how-it-works" className="py-14 lg:py-16 bg-white">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>Teaching Method</Eyebrow>
        <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">How Your Child Will Learn</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            ['01','Live One-on-One Session','40-minute focused session with the teacher.'],
            ['02','Memorization','New memorization introduced according to the student’s pace.'],
            ['03','Revision','Previous portions regularly reviewed for retention.'],
            ['04','Test & Progress Review','Students are tested and their progress monitored.'],
          ].map(([n,t,d])=>(
            <div key={n} className="bg-ivory rounded-[16px] border border-sage/50 p-6">
              <span className="text-xs font-bold tracking-widest text-gold">{n}</span>
              <h3 className="mt-2 font-semibold text-forest text-sm">{t}</h3>
              <p className="mt-2 text-sm text-charcoal/60">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white border border-sage/60 rounded-[16px] p-4 flex flex-wrap gap-2 items-center">
          <span className="text-xs font-semibold text-charcoal/60">Platforms:</span>
          {['Zoom','Google Meet','Google Classroom','Telegram Support'].map(p=>(
            <span key={p} className="text-xs font-medium bg-ivory border border-sage px-3 py-1.5 rounded-full">{p}</span>
          ))}
          <span className="text-xs text-charcoal/50 ml-auto">Used to support live teaching, materials and communication — not all in every session.</span>
        </div>
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-ivory rounded-[20px] border border-sage/50 p-6">
            <h3 className="font-semibold text-forest">How Parents Can Help Their Child Succeed</h3>
            <p className="text-sm text-charcoal/60 mt-1">Reassuring — you don’t need to teach the Qur’an yourself.</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {['Ensure consistent attendance','Help create a quiet learning environment','Encourage daily revision','Support memorization goals','Help younger students stay consistent'].map(x=>(
                <li key={x} className="flex gap-2.5"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-cta shrink-0" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 bg-white rounded-[20px] border border-sage/60 p-6 shadow-card">
            <h3 className="font-semibold text-forest">Course Requirements</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-charcoal/75">
              {['Attend classes promptly and consistently','Dedicate time outside class for revision','Participate in weekly tests','Follow the memorization / revision plan','Parents assist younger children with daily revision'].map(x=>(
                <li key={x} className="flex gap-2.5"><span className="text-cta">✓</span>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
