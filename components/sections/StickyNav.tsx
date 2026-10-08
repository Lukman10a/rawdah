"use client"
import { useState, useEffect } from 'react'

const links = [
  { href: '#program', label: 'Program' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#why-bayaan', label: 'Why Bayaan' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function StickyNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=> {
    const on = ()=> setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', on); return ()=>window.removeEventListener('scroll', on)
  },[])
  return (
    <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? 'bg-white/85 backdrop-blur-xl border-sage shadow-soft' : 'bg-ivory border-transparent'}`}>
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-forest text-white grid place-items-center text-xs font-bold">MB</span>
          <span className="font-semibold tracking-tight text-forest">Markazul Bayaan</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.14em] uppercase text-charcoal/60 border-l pl-2.5 ml-1">Rawdatul Atfaal</span>
        </a>
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {links.map(l=> <a key={l.href} href={l.href} className="text-charcoal/70 hover:text-forest font-medium transition-colors">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#enroll" className="hidden sm:inline-flex bg-cta hover:bg-ctaHover text-white text-sm font-semibold px-5 py-2.5 rounded-[12px] transition-colors">Enroll Now</a>
          <button onClick={()=>setOpen(!open)} aria-label="Menu" className="lg:hidden w-9 h-9 grid place-items-center rounded-xl border border-sage bg-white">
            <span className="space-y-1.5 block">
              <span className="block w-4 h-0.5 bg-charcoal" /><span className="block w-4 h-0.5 bg-charcoal" /><span className="block w-4 h-0.5 bg-charcoal" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-sage bg-white px-4 py-4 space-y-1">
          {links.map(l=> <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block py-2.5 text-sm font-medium text-charcoal/80">{l.label}</a>)}
          <a href="#enroll" onClick={()=>setOpen(false)} className="mt-2 flex bg-cta text-white justify-center font-semibold py-3 rounded-xl">Enroll Now</a>
        </div>
      )}
    </header>
  )
}
