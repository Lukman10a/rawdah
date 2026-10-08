# Markazul Bayaan — Rawdatul Atfaal (Juz 'Amma) — Product Spec

> Source of truth for any agent. Read this first. Any change to funnel/order/facts must update this file.

## 1. Overview
Premium, calm, trustworthy Islamic education funnel for online Qur'an memorization program. Primary audience: **parents** (global) seeking serious Juz 'Amma hifz for children; also suitable for adults. Goal: parent understands offer without contacting support.

## 2. Business Objective
Primary: **GET PARENTS TO ENROLL**. Visitor must understand in order (without contacting):
1. What program is  2. Who for  3. What they will achieve  4. How teaching works  5. Instructor trust  6. What's included  7. Parent role  8. Cost  9. Enrollment flow 10. After enrollment.
CTA always accessible; page feels substantial not exhausting.

## 3. Brand System (§2-4)
- Palette: Forest `#123C32` primary, Dark `#0B2922`, Ivory `#FAF8F2` bg, Sage `#E8F0EA` secondary, Gold `#C9A45C` accent (small highlights/borders/labels only), Charcoal `#17211E` text, CTA `#176B4D` hover `#145A41`.
- Typography: Headings/body `Plus_Jakarta_Sans 400-800` (variable `--font-jakarta`), Arabic `Amiri` (`--font-amiri`). Eyebrow 11px tracking 0.18em, headline tight, body 15-15.5px leading 7.
- Grid: 12-col desktop, max content `1220px` (`px 4 sm:6 lg:8`), section padding `py-14 lg:py-16/20`.
- Cards: radius `16/20/24`, button `12-14`, borders `sage/50-60`, shadows `soft/softLg/card`.
- Glass ( §4 ): `rgba(255,255,255,0.68) blur(16px) border rgba(255,255,255,0.45)` — hero glass card + stat cards only.
- Geometry: faint Islamic pattern opacity ≤0.06, not behind paragraphs.

## 4. Tone — Premium Islamic Education Institution
Premium/calm/scholarly/warm/modern/parent-friendly. NOT generic Islamic template, NOT mosque site, NOT childish, NOT flashy SaaS/crypto, NOT gold/glass overload, NOT excessive patterns.

## 5. Funnel Order (§30) — Conversion Progression
Attention → Understanding → Trust → Desire → Proof → Price → Objection Handling → Enrollment
- `StickyNav` (§6) — Logo + Program/HowItWorks/WhyBayaan/Testimonials/Pricing/FAQ + Enroll Now
- `Hero` (§5) split: LEFT eyebrow/headline/support/dual CTA + 5 chips (One-on-One, 4/wk, 40min, 20W, Worldwide) + RIGHT visual card `Juz 'Amma Program` stats + glass card (no faces)
- `TrustStrip` (§8) 4 items (20W, 4/wk, 40min, Worldwide)
- `Timeline` (§9) Week1 → W2-6 → W7-12 → W13-18 → W19-20 (explanatory, adapts to pace)
- `Achievements` (§10) Complete Memorization + Tajweed + Revision + Consistency + forest `More Than Memorization` (6 adhkaar) separated
- `Snapshot` (§11) 5 cards: 20W/4 per week/40min/Online/Certificate
- `WhyOneOnOne` (§12) 6 benefits (Pace/Attention/Tajweed/Guidance/Revision/Tracking)
- `WhyBayaan` (§13) 4 credential cards factual §34 (Saudi/Algeria/Libya, ijazah/thabat, 5+ years online, Salaf methodology, Mashaayikh recommendation)
- `TeachingMethod` (§14) 01-04 steps + platform pills Zoom/Meet/Classroom/Telegram + Parent Role (§15) + Requirements (§16)
- `Testimonials` (§17) 3 real quotes Belgium/Ghana/India, ★★★★★, mobile carousel
- `Pricing` (§18) Full $500 save $25 recommended vs Monthly $105×5, same curriculum, 4/wk/40min/20W/materials/Telegram/certificate
- `EnrollmentForm` (§20-21) inline 10 fields + plan toggle + 4-step indicator + success `Registration received — here's what to do next` + GTBank `0431141470` + Sendwave/Remitly/Wise, future Paystack/Stripe/Flutterwave
- `FAQ` (§23) ~17 Q accordion
- `AdditionalCourses` (§24) secondary 3 cards (Qur'an/Arabic/Reading&Writing)
- `FinalCTA` (§25) forest background `Give Your Child...` + dual CTA
- `Footer` (§26) + `MobileStickyCTA` (§7) bottom `Enroll in Juz 'Amma` + `Have Questions?` + DesktopFloatingCTA

## 6. Locked Facts (§34) — Do Not Invent
- 20 weeks, 4 sessions/week, 40 min, live one-on-one, worldwide, certificate upon completion.
- Pricing: Full $500 (save $25) vs Monthly $105×5; Nigerian students pay Naira equivalent.
- Payment: GTBank 0431141470 AbdulRauf Lukman Olamide; Sendwave/Remitly/Wise.
- Testimonials verbatim: Umm Firdaus (Belgium), Umm AbiBakr (Ghana), Sister Iqra Kareem (India).
- Teachers: studied Saudi/Algeria/Libya, written ijazah/thabat from some teachers, recommended by some Mashaayikh, 5+ years online + physical. No names unless supplied.
- Platforms: Zoom, Google Meet, Google Classroom, Telegram Support (not all every session).
- Requirements & parent role as spec §15-16.
- If missing policy, placeholder TODO — not invented.

## 7. Current Decisions Log (2026-04-28)
- No images yet: keep `Hero.tsx:87-117` CSS open-book placeholder, no `public/assets/hero-*` until approved faceless image (back-of-head/hands on mushaf + laptop, no faces).
- Subdomain: `juzamma.rawdahkids.org`, Vercel Git-connected, DNS at Namecheap, `FROM_EMAIL Markazul Bayaan <noreply@juzamma.rawdahkids.org>` (fallback `onboarding@resend.dev` until verified), apex `rawdahkids.org` stays separate.
- Form provider: Resend dual-email (admin + parent auto-reply), single dep `resend`.
- Mobile UX: left drawer, carousel 5s auto + swipe + equal height.

## 8. Technical Stack
Next.js 14.0.3, React 18, Tailwind 3.3, `next/font` Plus_Jakarta_Sans + Amiri, `react-icons 5.5`. Build: `npm run build` → `11.5 kB / 95.4 kB`. No heavy carousel/email deps beyond `resend`.

## 9. File Map
`app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `tailwind.config.js`, `components/ui/Section.tsx`, `components/sections/{StickyNav,MobileStickyCTA,Hero,TrustStrip,Timeline,Achievements,Snapshot,WhyOneOnOne,WhyBayaan,TeachingMethod,Testimonials,Pricing,EnrollmentForm,FAQ,AdditionalCourses,FinalCTA,Footer}.tsx`, `app/api/enroll/route.ts`, `docs/{SPEC,PHASES,GUARDRAILS}.md`.
