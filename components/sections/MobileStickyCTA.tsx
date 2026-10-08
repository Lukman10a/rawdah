"use client"
import { useEffect, useState } from 'react'

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false)
  useEffect(()=>{
    const hero = document.getElementById('hero-cta')
    if(!hero){ setVisible(true); return }
    const obs = new IntersectionObserver(([e])=> setVisible(!e.isIntersecting), { threshold: 0})
    obs.observe(hero)
    return ()=> obs.disconnect()
  },[])
  if(!visible) return null
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-xl border-t border-sage px-4 py-3 flex items-center gap-3">
      <a href="#enroll" className="flex-1 bg-cta text-white text-center font-semibold py-3 rounded-xl">Enroll in Juz ’Amma</a>
      <a href="https://bit.ly/rawdah-director" target="_blank" className="text-xs font-medium text-charcoal/60 underline underline-offset-4 px-1">Have Questions?</a>
    </div>
  )
}

export function DesktopFloatingCTA() {
  const [show, setShow] = useState(false)
  useEffect(()=>{
    const hero = document.getElementById('hero-cta')
    if(!hero) return
    const obs = new IntersectionObserver(([e])=> setShow(!e.isIntersecting), {threshold:0})
    obs.observe(hero)
    return ()=> obs.disconnect()
  },[])
  if(!show) return null
  return (
    <a href="#enroll" className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 bg-cta hover:bg-ctaHover text-white font-semibold px-6 py-3 rounded-full shadow-softLg transition-colors">
      Enroll Now →
    </a>
  )
}
