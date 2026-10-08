# Phases — Execution Checklist

> Any agent must execute in order, updating status. Verify after each phase.
> Status legend: ✅ Done | ⏳ Pending | 🔜 Future — updated 2026-04-28

## P1 — StickyNav Left Drawer — ✅ Done (2026-04-28)
- **File:** `components/sections/StickyNav.tsx:40-45` top conditional dropdown → `fixed left-0 top-0 h-[100dvh] w-[84%] max-w-[340px]` drawer + overlay `fixed inset-0 bg-forest/25 backdrop-blur-sm`.
- **Animation:** `translate-x-0 ↔ -translate-x-full` + `transition-transform duration-300 ease-out`, body `overflow-hidden` while open, `Escape`/overlay click closes, hamburger spans animate to `✕`, `aria-expanded`, focus-trap first link.
- **Verify:** 375px drawer slides from left (not top) — confirmed working, no horizontal scroll.

## P2 — Testimonials Carousel (Mobile) — ✅ Done (2026-04-28)
- **File:** `components/sections/Testimonials.tsx:35-51` single auto-height card → `min-h-[300px] flex flex-col` (+ `flex-1` quote) so all 3 equal; desktop `items-stretch h-full`.
- **Behavior:** `setInterval 5000` cycles 0→1→2→0; paused on `touchstart/mouseenter/visibilitychange hidden`, resume after 2s; cleared on unmount. Swipe `touchStartX-touchEndX >50px` → next/prev. Dots + Prev/Next remain, `transition-opacity 300ms`.
- **Verify:** Mobile card height stable, auto-advances every 5s, swipe left/right works, pause on interaction.

## P3 — EnrollmentForm → Google Sheets Inbound + Parent Auto-Message — ✅ Done (2026-04-28)
- **Removed:** Resend (`npm uninstall resend`), deleted `app/api/enroll/route.ts`, removed `RESEND_API_KEY/FROM_EMAIL/ADMIN_EMAIL` — Resend was outbound, not inbound (per decision).
- **New:** `components/sections/EnrollmentForm.tsx:4` posts `text/plain` JSON to `NEXT_PUBLIC_GOOGLE_SHEETS_URL` (Apps Script `doPost` → appendRow → `MailApp.sendEmail` to parent keeps auto-message). Honeypot `company`, rate-friendly, success pane `Registration received — here's what to do next` plan-aware. Fallback logs locally if URL not yet set.
- **Env:** `.env.example` now `NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXX/exec` (add in `.env.local` + Vercel env). Sheet setup: `docs/GOOGLE_SHEETS_SETUP.md`.
- **Verify:** `npm run build` passes; submit → Sheet row + parent email (check spam) + success pane.

## P4 — Google Sheets Verification — ⏳ Pending (requires your Google account)
- Create Sheet `Rawdah Registrations`, headers, bound Apps Script from `docs/GOOGLE_SHEETS_SETUP.md`, deploy Web App `Anyone` → copy `.../exec` → set `NEXT_PUBLIC_GOOGLE_SHEETS_URL`.
- **Verify:** Test submit → row appears.

## P5 — Deploy Subdomain `juzamma.rawdahkids.org` (Vercel Git-connected) — ⏳ Pending
- Vercel → Project → Settings → Domains → Add `juzamma.rawdahkids.org` → target `cname.vercel-dns.com`.
- Namecheap → Domain List → `rawdahkids.org` → Advanced DNS → Add `CNAME Host=juzamma Value=cname.vercel-dns.com TTL=Automatic` (remove conflicting). Keep apex unchanged → stays separate.
- Build: `Framework: Next.js`, `npm run build`, Output `.next`. Env `NEXT_PUBLIC_GOOGLE_SHEETS_URL` added in Vercel Env.
- SSL auto (Let's Encrypt). Propagation 5-30min.
- **Verify:** `https://juzamma.rawdahkids.org` loads.

## P6 — Final Verification — ⏳ Pending
- `npm run build` passes (12.4 kB route).
- Manual: `http://localhost:3001` and `https://juzamma.rawdahkids.org` at 375/768/1280 — no horizontal scroll, drawer slides left, carousel auto+swipe stable, form submits → success pane → Sheet + parent email.
- Lighthouse contrast ≥4.5:1, thumb-friendly.

## P7 — Future (Not This Batch) — 🔜 Future
- Hero faceless image `public/assets/hero-online-hifz.jpg` (`next/image` replacement of `Hero.tsx:87-117`) — pended.
- Paystack/Stripe/Flutterwave checkout replacing manual GTBank (same `EnrollmentForm` card, no redesign per §19).
