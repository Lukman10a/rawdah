"use client"
import { useState } from 'react'
import { Eyebrow } from '@/components/ui/Section'

type Plan = 'full' | 'monthly'
const SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || ''

export default function EnrollmentForm(){
  const [plan, setPlan] = useState<Plan>('full')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    setError(null)
    const fd = new FormData(e.currentTarget)
    const company = String(fd.get('company')||'')
    if (company) { setSubmitted(true); return }
    const data: Record<string,string> = {
      parentName: String(fd.get('parentName')||'').trim(),
      studentName: String(fd.get('studentName')||'').trim(),
      studentAge: String(fd.get('studentAge')||'').trim(),
      country: String(fd.get('country')||'').trim(),
      email: String(fd.get('email')||'').trim(),
      whatsapp: String(fd.get('whatsapp')||'').trim(),
      level: String(fd.get('level')||'').trim(),
      preferredTime: String(fd.get('preferredTime')||'').trim(),
      plan,
      notes: String(fd.get('notes')||'').trim(),
      timestamp: new Date().toISOString(),
      source: 'juzamma.rawdahkids.org',
    }
    const required = ['parentName','studentName','studentAge','country','email','whatsapp','level','preferredTime'] as const
    for(const k of required){ if(!data[k]) { setError(`Please fill ${k}`); return } }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){ setError('Invalid email'); return }

    setLoading(true)
    try {
      if (SHEETS_URL) {
        // Apps Script expects JSON; no-cors fallback handled via text/plain
        await fetch(SHEETS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(data),
        })
      } else {
        // No URL configured yet — log locally so form still succeeds for setup phase
        console.log('[enroll] (no SHEETS_URL) payload:', data)
        await new Promise(r=> setTimeout(r, 600))
      }
      setSubmitted(true)
      setTimeout(()=> window.scrollTo({top: (document.getElementById('enroll')!.offsetTop - 80), behavior:'smooth' as any}), 100)
    } catch (err:any) {
      // Even if fetch fails (CORS in dev), consider it submitted if Sheets will handle — but show error for now
      setError(err?.message || 'Submission failed. Please try again or contact the director via WhatsApp.')
    } finally { setLoading(false) }
  }

  if(submitted){
    return (
      <section id="enroll" className="py-14 lg:py-16 bg-ivory">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[20px] border border-sage p-8 shadow-soft text-center">
            <div className="w-12 h-12 rounded-full bg-sage mx-auto grid place-items-center text-cta">✓</div>
            <h3 className="mt-3 text-xl font-bold text-forest">Registration received — here’s what to do next.</h3>
            <p className="mt-2 text-sm text-charcoal/65">JazakAllahu khairan — your details have been saved. A confirmation email will be sent to your inbox (keep: parent auto-message via Apps Script).</p>
            <div className="mt-6 text-left bg-ivory rounded-[16px] border border-sage p-5 space-y-4">
              <div><p className="text-xs tracking-widest uppercase font-semibold text-cta">Step 1 — Payment</p><p className="text-sm mt-1">You selected <span className="font-semibold">{plan==='full'?'Full Payment — $500 (Save $25)':'Monthly — $105 / month ×5'}</span>. Nigerian students pay the equivalent in Naira.</p></div>
              <div className="bg-white rounded-xl border border-sage p-4 text-sm">
                <p className="font-semibold text-forest">GTBank — 0431141470 — AbdulRauf Lukman Olamide</p>
                <p className="text-charcoal/60 text-xs mt-1">You can also use <a className="text-cta underline" href="https://www.sendwave.com/">Sendwave</a>, <a className="text-cta underline" href="https://www.remitly.com/">Remitly</a>, <a className="text-cta underline" href="https://www.wise.com/">Wise</a>.</p>
              </div>
              <div><p className="text-xs tracking-widest uppercase font-semibold text-cta">Step 2 — Submit proof</p><p className="text-sm mt-1">Send your payment proof to <a href="https://bit.ly/rawdah-director" target="_blank" className="text-cta underline font-medium">Submit Payment Proof</a> or reply to the confirmation email.</p></div>
              <div><p className="text-xs tracking-widest uppercase font-semibold text-cta">Step 3 — Confirmation</p><p className="text-sm mt-1">You’ll receive your schedule and class link once payment is confirmed.</p></div>
            </div>
            <div className="mt-6 flex gap-3 justify-center">
              <a href="https://bit.ly/rawdah-director" target="_blank" className="bg-cta text-white font-semibold px-6 py-3 rounded-xl">Submit Payment Proof</a>
              <button onClick={()=>setSubmitted(false)} className="bg-white border border-sage font-semibold px-6 py-3 rounded-xl">Edit Registration</button>
            </div>
            <p className="mt-4 text-xs text-charcoal/45">Data saved to Google Sheet (your Google account). Parent auto-email sent via Apps Script MailApp — check spam folder.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enroll" className="py-14 lg:py-16 bg-ivory">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center">
            <Eyebrow>Enrollment</Eyebrow>
            <h2 className="mt-3 text-[26px] lg:text-[32px] font-bold tracking-tight text-forest">Start Your Child’s Qur’an Journey</h2>
            <p className="mt-2 text-sm text-charcoal/60">4 steps — registration, plan, payment, confirmation.</p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-2 text-center text-xs">
            {['Registration','Payment Plan','Payment','Confirmation'].map((s,i)=>(
              <div key={s} className={`rounded-full py-2 font-semibold ${i===0?'bg-forest text-white':'bg-white border border-sage text-charcoal/60'}`}>{i+1}. {s}</div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="mt-6 bg-white rounded-[20px] border border-sage p-6 shadow-card space-y-4">
            <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="text-sm">Parent/Guardian Name *<input name="parentName" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-cta" placeholder="Full name" /></label>
              <label className="text-sm">Student Name *<input name="studentName" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-cta" placeholder="Student name" /></label>
              <label className="text-sm">Student Age *<input name="studentAge" required type="number" min={4} max={70} className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm" placeholder="e.g., 9" /></label>
              <label className="text-sm">Country *<input name="country" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm" placeholder="e.g., Nigeria" /></label>
              <label className="text-sm">Email *<input name="email" required type="email" className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm" placeholder="you@email.com" /></label>
              <label className="text-sm">WhatsApp Number *<input name="whatsapp" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm" placeholder="+234 ..." /></label>
              <label className="text-sm">Current Qur’an Level *<select name="level" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm bg-white"><option value="">Select level</option><option>Beginner — learning to read</option><option>Can read with Tajweed</option><option>Already memorizing Juz ’Amma</option><option>Adult learner</option></select></label>
              <label className="text-sm">Preferred Class Time *<select name="preferredTime" required className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm bg-white"><option value="">Select time</option><option>Morning (WAT)</option><option>Afternoon (WAT)</option><option>Evening (WAT)</option><option>Flexible — contact me</option></select></label>
            </div>

            <div>
              <p className="text-sm font-semibold text-forest">Payment Plan *</p>
              <div className="mt-2 grid sm:grid-cols-2 gap-3">
                <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-start gap-3 ${plan==='full'?'border-cta bg-sage/30':'border-sage bg-ivory'}`}>
                  <input type="radio" name="plan" checked={plan==='full'} onChange={()=>setPlan('full')} className="mt-1" />
                  <div><p className="text-sm font-semibold">Full Payment — $500</p><p className="text-xs text-charcoal/60">Save $25 • One-time</p></div>
                </label>
                <label className={`cursor-pointer rounded-xl border-2 p-4 flex items-start gap-3 ${plan==='monthly'?'border-cta bg-sage/30':'border-sage bg-ivory'}`}>
                  <input type="radio" name="plan" checked={plan==='monthly'} onChange={()=>setPlan('monthly')} className="mt-1" />
                  <div><p className="text-sm font-semibold">Monthly — $105 / month</p><p className="text-xs text-charcoal/60">5 payments</p></div>
                </label>
              </div>
            </div>

            <label className="text-sm block">Additional Notes<textarea name="notes" rows={3} className="mt-1 w-full border border-sage rounded-xl px-3 py-2.5 text-sm" placeholder="Anything we should know? (optional)" /></label>

            <div className="bg-ivory rounded-xl border border-sage p-4 text-xs text-charcoal/65">
              <p className="font-semibold text-forest">Payment</p>
              <p className="mt-1">GTBank — 0431141470 — AbdulRauf Lukman Olamide. Nigerian students pay equivalent in Naira. Intl: Sendwave / Remitly / Wise.</p>
            </div>

            {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>}
            {!SHEETS_URL && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">Setup pending: add <code>NEXT_PUBLIC_GOOGLE_SHEETS_URL</code> in Vercel env (see docs). Form will still show success locally.</p>}
            <button disabled={loading} className="w-full bg-cta hover:bg-ctaHover text-white font-semibold py-3.5 rounded-xl transition-colors disabled:opacity-60">{loading?'Submitting...':'Complete Registration — Show Next Steps'}</button>
            <p className="text-center text-xs text-charcoal/50">Need help? <a href="https://bit.ly/rawdah-director" target="_blank" className="text-cta underline font-medium">Speak to Our Director</a></p>
          </form>
        </div>
      </div>
    </section>
  )
}
