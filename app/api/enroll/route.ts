import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const arr = hits.get(ip) || []
  const recent = arr.filter(t => now - t < 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 10
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (rateLimited(ip)) return NextResponse.json({ error: 'Too many requests. Try again in a minute.' }, { status: 429 })

    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
    const { parentName, studentName, studentAge, country, email, whatsapp, level, preferredTime, plan, notes, company, timestamp, source } = body

    if (company) return NextResponse.json({ ok: true })
    const required: Record<string,string> = { parentName, studentName, studentAge: String(studentAge??''), country, email, whatsapp, level, preferredTime, plan }
    for (const [k,v] of Object.entries(required)) {
      if (!String(v||'').trim()) return NextResponse.json({ error: `Missing ${k}` }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) return NextResponse.json({ error: 'Invalid email' }, { status: 400 })

    const sheetsUrl = process.env.GOOGLE_SHEETS_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL
    if (!sheetsUrl) {
      console.log('[enroll] (no GOOGLE_SHEETS_URL) payload:', { parentName, studentName, email, plan, country })
      return NextResponse.json({ ok: true, mode: 'logged-no-url' })
    }

    // Server-to-server fetch to Apps Script — bypasses browser CORS
    // UK time for sheet (Europe/London = GMT in winter, BST in summer)
    const ukTimestamp = timestamp || new Date().toLocaleString('en-GB', { timeZone: 'Europe/London', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false }).replace(',', '') + ' (UK)'
    const payload = { parentName, studentName, studentAge: String(studentAge), country, email, whatsapp, level, preferredTime, plan, notes: notes || '', timestamp: ukTimestamp, source: source || 'juzamma.rawdahkids.org', company: '' }
    const r = await fetch(sheetsUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    const text = await r.text().catch(() => '')
    let j: any = {}
    try { j = text ? JSON.parse(text) : {} } catch { j = { raw: text } }
    if (!r.ok) return NextResponse.json({ error: j.error || `Sheets error ${r.status}. Check Apps Script deployment is 'Anyone' and SHEET_NAME correct.` }, { status: 502 })
    if (j.error) {
      // Map technical null error to friendly message
      const msg = String(j.error)
      if (msg.includes("Cannot read properties of null")) return NextResponse.json({ error: `Sheet tab not found. Check SHEET_NAME in Apps Script matches your Sheet tab exactly (case-sensitive). Available tabs listed in error.` }, { status: 502 })
      return NextResponse.json({ error: j.error }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (e: any) {
    console.error('[enroll] error', e)
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 })
  }
}
