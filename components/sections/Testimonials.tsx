"use client"
import { useState, useEffect, useRef } from 'react'
import { Eyebrow } from '@/components/ui/Section'

const data = [
  { name:'Umm Firdaus', place:'Belgium', initials:'UF', text:'I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering Arabic, Aqeedah, Quran, and more. I would definitely recommend signing your kids up for these courses.'},
  { name:'Umm AbiBakr', place:'Ghana', initials:'UA', text:'Markazul Bayaan is one of the best Quranic institutes I have ever come across. Their teachers have patience which makes learning easy. The class is fixed to suit your schedule. It has deepened my Islamic knowledge.'},
  { name:'Sister Iqra Kareem', place:'India', initials:'IK', text:'I took Islamic studies, Arabic speaking, and Quran classes for my daughter. The teacher was patient and dedicated. I really saw an improvement in my daughter’s memorization in less than a month.'},
]

export default function Testimonials(){
  const [idx, setIdx] = useState(0)
  const pausedRef = useRef(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return
      if (document.hidden) return
      setIdx(i => (i + 1) % data.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const pauseTemp = () => {
    pausedRef.current = true
    setTimeout(() => { pausedRef.current = false }, 6000)
  }

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; pausedRef.current = true }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (dx < -50) setIdx(i => (i + 1) % data.length)
    else if (dx > 50) setIdx(i => (i - 1 + data.length) % data.length)
    touchStartX.current = null
    setTimeout(() => { pausedRef.current = false }, 4000)
  }

  return (
    <section id="testimonials" className="py-14 lg:py-16 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-[680px] mx-auto">
          <Eyebrow>Social Proof</Eyebrow>
          <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">Trusted by Students and Parents Around the World</h2>
          <p className="mt-2 text-sm text-charcoal/60">Real experiences from students and parents who have learned with Markazul Bayaan.</p>
        </div>
        {/* desktop grid — equal height */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-8 items-stretch">
          {data.map(d=>(
            <div key={d.name} className="bg-white rounded-[20px] border border-sage/60 p-6 shadow-card flex flex-col min-h-[280px]">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-sage grid place-items-center text-xs font-bold text-forest">{d.initials}</span>
                <div><p className="text-sm font-semibold text-forest">{d.name}</p><p className="text-xs text-charcoal/55">{d.place}</p></div>
              </div>
              <p className="mt-4 text-sm leading-6 text-charcoal/70 flex-1">“{d.text}”</p>
              <p className="mt-3 text-gold text-sm">★★★★★</p>
            </div>
          ))}
        </div>
        {/* mobile carousel — swipeable, auto, fixed height */}
        <div className="md:hidden mt-6">
          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => { pausedRef.current = true }}
            onMouseLeave={() => { pausedRef.current = false }}
            className="bg-white rounded-[20px] border border-sage/60 p-6 shadow-card min-h-[300px] flex flex-col transition-opacity duration-300 select-none touch-pan-y"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-sage grid place-items-center text-xs font-bold text-forest">{data[idx].initials}</span>
              <div><p className="text-sm font-semibold text-forest">{data[idx].name}</p><p className="text-xs text-charcoal/55">{data[idx].place}</p></div>
            </div>
            <p className="mt-4 text-sm leading-6 text-charcoal/70 flex-1">“{data[idx].text}”</p>
            <p className="mt-3 text-gold text-sm">★★★★★</p>
          </div>
          <p className="text-center text-[10px] text-charcoal/40 mt-2">Swipe left/right • Auto-advances every 5s</p>
          <div className="flex justify-center gap-2 mt-3">
            {data.map((_,i)=> <button key={i} onClick={()=>{ setIdx(i); pauseTemp() }} className={`h-1.5 rounded-full transition-all ${i===idx?'bg-forest w-6':'bg-sage w-1.5'}`} aria-label={`Go to ${i+1}`} />)}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            <button onClick={()=>{ setIdx((idx-1+data.length)%data.length); pauseTemp() }} className="px-4 py-2 text-xs border border-sage rounded-full bg-white">‹ Prev</button>
            <button onClick={()=>{ setIdx((idx+1)%data.length); pauseTemp() }} className="px-4 py-2 text-xs border border-sage rounded-full bg-white">Next ›</button>
          </div>
        </div>
      </div>
    </section>
  )
}
