"use client"
import { useState, useEffect, useRef } from 'react'

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
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeBtnRef.current?.focus(), 100)
    } else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? 'bg-white/85 backdrop-blur-xl border-sage shadow-soft' : 'bg-ivory border-transparent'}`}>
        <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-forest text-white grid place-items-center text-xs font-bold">MB</span>
            <span className="font-semibold tracking-tight text-forest">Markazul Bayaan</span>
            <span className="hidden sm:inline text-[10px] tracking-[0.14em] uppercase text-charcoal/60 border-l pl-2.5 ml-1">Rawdatul Atfaal</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            {links.map(l => <a key={l.href} href={l.href} className="text-charcoal/70 hover:text-forest font-medium transition-colors">{l.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#enroll" className="hidden sm:inline-flex bg-cta hover:bg-ctaHover text-white text-sm font-semibold px-5 py-2.5 rounded-[12px] transition-colors">Enroll Now</a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden w-9 h-9 grid place-items-center rounded-xl border border-sage bg-white relative"
            >
              <span className="block w-4 h-0.5 bg-charcoal absolute transition-all duration-300" style={{ transform: open ? 'rotate(45deg)' : 'translateY(-5px)' }} />
              <span className={`block w-4 h-0.5 bg-charcoal absolute transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
              <span className="block w-4 h-0.5 bg-charcoal absolute transition-all duration-300" style={{ transform: open ? 'rotate(-45deg)' : 'translateY(5px)' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        aria-hidden={!open}
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-forest/25 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      {/* Drawer from left */}
      <div
        role="dialog"
        aria-modal={open}
        className={`lg:hidden fixed left-0 top-0 z-50 h-[100dvh] w-[84%] max-w-[340px] bg-white border-r border-sage shadow-softLg flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-[64px] flex items-center justify-between px-4 border-b border-sage shrink-0">
          <span className="flex items-center gap-2 font-semibold text-forest"><span className="w-7 h-7 rounded-full bg-forest text-white grid place-items-center text-[10px]">MB</span> Menu</span>
          <button ref={closeBtnRef} onClick={() => setOpen(false)} aria-label="Close menu" className="w-8 h-8 grid place-items-center rounded-full border border-sage text-charcoal">✕</button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[15px] font-medium text-charcoal/80 border-b border-sage/40 last:border-0">{l.label}</a>)}
        </nav>
        <div className="p-4 border-t border-sage">
          <a href="#enroll" onClick={() => setOpen(false)} className="flex bg-cta text-white justify-center font-semibold py-3 rounded-xl">Enroll Now</a>
          <p className="text-center text-[11px] text-charcoal/45 mt-2">juzamma.rawdahkids.org</p>
        </div>
      </div>
    </>
  )
}
