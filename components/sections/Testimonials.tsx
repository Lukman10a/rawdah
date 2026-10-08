"use client"
import { useState } from 'react'
import { Eyebrow } from '@/components/ui/Section'

const data = [
  { name:'Umm Firdaus', place:'Belgium', initials:'UF', text:'I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering Arabic, Aqeedah, Quran, and more. I would definitely recommend signing your kids up for these courses.'},
  { name:'Umm AbiBakr', place:'Ghana', initials:'UA', text:'Markazul Bayaan is one of the best Quranic institutes I have ever come across. Their teachers have patience which makes learning easy. The class is fixed to suit your schedule. It has deepened my Islamic knowledge.'},
  { name:'Sister Iqra Kareem', place:'India', initials:'IK', text:'I took Islamic studies, Arabic speaking, and Quran classes for my daughter. The teacher was patient and dedicated. I really saw an improvement in my daughter’s memorization in less than a month.'},
]

export default function Testimonials(){
  const [idx, setIdx] = useState(0)
  return (
    <section id="testimonials" className="py-14 lg:py-16 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[680px] mx-auto">
          <Eyebrow>Social Proof</Eyebrow>
          <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">Trusted by Students and Parents Around the World</h2>
          <p className="mt-2 text-sm text-charcoal/60">Real experiences from students and parents who have learned with Markazul Bayaan.</p>
        </div>
        {/* desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-8">
          {data.map(d=>(
            <div key={d.name} className="bg-white rounded-[20px] border border-sage/60 p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-sage grid place-items-center text-xs font-bold text-forest">{d.initials}</span>
                <div><p className="text-sm font-semibold text-forest">{d.name}</p><p className="text-xs text-charcoal/55">{d.place}</p></div>
              </div>
              <p className="mt-4 text-sm leading-6 text-charcoal/70">“{d.text}”</p>
              <p className="mt-3 text-gold text-sm">★★★★★</p>
            </div>
          ))}
        </div>
        {/* mobile carousel */}
        <div className="md:hidden mt-6">
          <div className="bg-white rounded-[20px] border border-sage/60 p-6 shadow-card">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-sage grid place-items-center text-xs font-bold text-forest">{data[idx].initials}</span>
              <div><p className="text-sm font-semibold text-forest">{data[idx].name}</p><p className="text-xs text-charcoal/55">{data[idx].place}</p></div>
            </div>
            <p className="mt-4 text-sm leading-6 text-charcoal/70">“{data[idx].text}”</p>
            <p className="mt-3 text-gold text-sm">★★★★★</p>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {data.map((_,i)=> <button key={i} onClick={()=>setIdx(i)} className={`w-2 h-2 rounded-full ${i===idx?'bg-forest':'bg-sage'}`} aria-label={`Go to ${i+1}`} />)}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <button onClick={()=>setIdx((idx-1+data.length)%data.length)} className="px-3 py-1.5 text-xs border border-sage rounded-full">‹ Prev</button>
            <button onClick={()=>setIdx((idx+1)%data.length)} className="px-3 py-1.5 text-xs border border-sage rounded-full">Next ›</button>
          </div>
        </div>
      </div>
    </section>
  )
}
