import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

// Simple in-memory rate limit (per instance)
const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const arr = hits.get(ip) || []
  const recent = arr.filter(t => now - t < 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (rateLimited(ip)) return NextResponse.json({ error: 'Too many requests. Try again in a minute.' }, { status: 429 })

    const body = await req.json()
    const { parentName, studentName, studentAge, country, email, whatsapp, level, preferredTime, plan, notes, company } = body || {}

    // Honeypot
    if (company) return NextResponse.json({ ok: true })

    const required: Record<string,string> = { parentName, studentName, studentAge: String(studentAge??''), country, email, whatsapp, level, preferredTime, plan }
    for (const [k,v] of Object.entries(required)) {
      if (!String(v||'').trim()) return NextResponse.json({ error: `Missing ${k}` }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.FROM_EMAIL || 'Markazul Bayaan <onboarding@resend.dev>'
    const adminEmail = process.env.ADMIN_EMAIL || 'markazulbayaan9@gmail.com'

    if (!apiKey) {
      // No key configured — log and return ok (so form still succeeds during setup)
      console.log('[enroll] (no RESEND_API_KEY) payload:', { parentName, studentName, email, plan, country })
      return NextResponse.json({ ok: true, mode: 'logged' })
    }

    const resend = new Resend(apiKey)
    const planLabel = plan === 'full' ? 'Full Payment — $500 (Save $25)' : 'Monthly — $105 / month ×5'
    const esc = (s:string)=> String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')

    const adminHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto;background:#FAF8F2;padding:24px;border-radius:16px">
        <h2 style="color:#123C32;margin:0 0 8px">New Juz 'Amma Registration — ${esc(studentName)}</h2>
        <p style="color:#17211E;opacity:0.7;font-size:13px">Received ${new Date().toISOString()} • IP ${esc(ip)}</p>
        <table style="width:100%;font-size:14px;border-collapse:collapse;margin-top:16px">
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Parent</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(parentName)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Student</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(studentName)} (${esc(String(studentAge))})</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Country</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(country)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Email</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>WhatsApp</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(whatsapp)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Level</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(level)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Preferred Time</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(preferredTime)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Plan</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(planLabel)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #E8F0EA"><b>Notes</b></td><td style="padding:8px;border:1px solid #E8F0EA">${esc(notes||'—')}</td></tr>
        </table>
        <p style="font-size:12px;color:#17211E;opacity:0.6;margin-top:16px">Reply directly to ${esc(email)} to contact parent. subdomain: juzamma.rawdahkids.org</p>
      </div>`

    const parentHtml = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:auto;background:#FAF8F2;padding:24px;border-radius:16px">
        <div style="background:#123C32;color:#fff;padding:16px 20px;border-radius:12px">Markazul Bayaan — Rawdatul Atfaal</div>
        <h2 style="color:#123C32;margin:20px 0 8px">As-salaamu alaykum ${esc(parentName)},</h2>
        <p style="color:#17211E;line-height:1.7;font-size:14px">JazakAllahu khairan for registering <b>${esc(studentName)}</b> for the <b>Juz 'Amma Program</b> (20 weeks • 4 sessions/week • 40 min • one-on-one). You selected <b>${esc(planLabel)}</b>. Nigerian students pay equivalent in Naira.</p>
        <div style="background:#fff;border:1px solid #E8F0EA;border-radius:12px;padding:16px;margin:16px 0">
          <b style="color:#123C32">Next steps</b>
          <ol style="color:#17211E;font-size:14px;line-height:1.7;margin:8px 0 0 16px">
            <li><b>Payment:</b> GTBank 0431141470 — AbdulRauf Lukman Olamide (or Sendwave / Remitly / Wise for international).</li>
            <li><b>Submit proof:</b> Reply to this email or send via <a href="https://bit.ly/rawdah-director">https://bit.ly/rawdah-director</a>.</li>
            <li><b>Confirmation:</b> You'll receive schedule + class link after confirmation.</li>
          </ol>
        </div>
        <p style="font-size:13px;color:#17211E;opacity:0.7">Questions? Reply to this email or WhatsApp +234 808 928 7065. — Markazul Bayaan</p>
        <p style="font-size:11px;color:#17211E;opacity:0.45">juzamma.rawdahkids.org • Online • Worldwide • One-on-One</p>
      </div>`

    const [adminRes, parentRes] = await Promise.all([
      resend.emails.send({ from, to: adminEmail, subject: `New Juz 'Amma Registration — ${studentName}`, html: adminHtml, replyTo: email }),
      resend.emails.send({ from, to: email, subject: `Registration received — here's what to do next`, html: parentHtml }),
    ])

    if ((adminRes as any).error) throw new Error((adminRes as any).error.message || 'Admin email failed')
    if ((parentRes as any).error) throw new Error((parentRes as any).error.message || 'Parent email failed')

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('[enroll] error', e)
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
  }
}
