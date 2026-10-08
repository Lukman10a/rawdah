"use client"
import { useState } from 'react'
import { Eyebrow } from '@/components/ui/Section'

const faqs = [
  ['Who is this program for?','Children and adults who want to memorize Juz ’Amma with one-on-one guidance. Parents enroll on behalf of younger students.'],
  ['Is the program suitable for children?','Yes — the primary audience is parents seeking a serious, trustworthy memorization program for their children. Younger students receive parental support for daily revision.'],
  ['Can adults enroll?','Yes. The program is also suitable for adults; limited slots are available.'],
  ['How long is the program?','20 weeks (5 months).'],
  ['How many classes are there each week?','4 sessions per week.'],
  ['How long is each class?','40 minutes per session, live one-on-one.'],
  ['Are classes one-on-one?','Yes — every session is live one-on-one with the teacher.'],
  ['Are classes online?','Yes — worldwide, online.'],
  ['Which platforms are used?','Zoom, Google Meet, Google Classroom and Telegram support — used to support live teaching, materials and communication.'],
  ['What if my child is already memorizing Juz ’Amma?','The teacher will assess placement and tailor the plan to the student’s current level and pace.'],
  ['What if my child misses a class?','Contact the teacher/director to discuss rescheduling. Policies are communicated upon enrollment.'],
  ['How much time should my child spend revising outside class?','Students are expected to dedicate time outside class for daily revision; parents assist younger children.'],
  ['Are parents required to participate?','Not to teach — but to ensure attendance, a quiet environment and encouragement for daily revision.'],
  ['What payment options are available?','Full payment $500 (save $25) or $105/month for 5 months. Same curriculum either way.'],
  ['Do Nigerian students pay in Naira?','Yes — Nigerian students pay the equivalent amount in Naira.'],
  ['Is there a certificate?','Yes — certificate upon completion.'],
  ['How do I enroll?','Complete registration → choose plan → complete payment → submit proof → confirmation and schedule.'],
]
export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="py-14 lg:py-16 bg-white">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-3 text-[26px] font-bold tracking-tight text-forest">Frequently Asked Questions</h2>
        <p className="mt-2 text-sm text-charcoal/60">Answers to the most common parent questions — without needing to contact us first.</p>
        <div className="mt-6 divide-y divide-sage/60 border border-sage/60 rounded-[16px] overflow-hidden">
          {faqs.map(([q,a],i)=>(
            <div key={q} className="bg-white">
              <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left px-5 py-4 flex justify-between gap-4 items-center">
                <span className="text-sm font-semibold text-forest">{q}</span>
                <span className={`w-7 h-7 rounded-full border grid place-items-center text-xs shrink-0 ${open===i?'bg-forest text-white border-forest':'bg-ivory border-sage'}`}>{open===i?'−':'+'}</span>
              </button>
              {open===i && <p className="px-5 pb-4 text-sm leading-6 text-charcoal/65">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
