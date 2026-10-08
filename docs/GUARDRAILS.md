# Guardrails — Enforced on Every Edit

## 1. Truthfulness (§34)
- Never invent student counts, teacher credentials, scholar names, ijazah details, guarantees, success/completion rates, years beyond provided, refund/attendance/cancellation/pricing policies, or curriculum details.
- Use only supplied info. If missing, insert `TODO: replace with verified copy` placeholder — not a fabrication.
- Locked facts: 20W × 4/wk ×40min one-on-one, Full $500 save $25 vs Monthly $105×5, Naira for Nigeria, GTBank `0431141470`, Sendwave/Remitly/Wise, 3 verbatim testimonials, 5+ yrs online, Saudi/Algeria/Libya + ijazah/thabat, Salaf methodology.

## 2. Premium Islamic Education Aesthetic (§2-4, §27-29)
- Palette enforced: Forest dominates, Ivory bg, Sage secondary, Gold only small accents (borders/labels/icons), CTA `#176B4D`.
- Subtle geometry ≤6% opacity, not behind paragraphs. No mosque silhouettes everywhere, no excessive crescents, no glassmorphism full-page (glass only hero/stat cards `blur(16px)`).
- Typography hierarchy: Eyebrow → Headline → Support → CTA → Trust. No decorative paragraph fonts, no tiny text.
- Imagery (§27): respectful, peaceful, premium, warm, modest, no faces/AI artifacts if added later. Faceless only (back-of-head/hands on mushaf + laptop).
- Animation: fade-up, soft hover, carousel — calm. No parallax/spin/bounce.

## 3. Conversion & Accessibility (§6-7, §30-33)
- Funnel order fixed: Attention → Understanding → Trust → Desire → Proof → Price → FAQ → Enroll. Price after value, transparent.
- CTA always accessible: desktop sticky nav + floating `Enroll Now` after hero, mobile bottom bar `Enroll in Juz 'Amma` + `Have Questions?`. Never require scroll-to-top.
- No huge whitespace gaps (§31): section `py-14 lg:py-16/20`, compact mobile.
- Responsive: 12-col 1220px, tablet 2-col, mobile single-col, buttons thumb-friendly (≥44px), inputs large, no horizontal scroll.
- A11y: contrast ≥4.5:1, overlays for text on images, form labels, focus-visible `2px solid #176B4D`, no color-only meaning.

## 4. Scope & Infrastructure
- Do not add hero image until explicitly approved.
- Keep apex `rawdahkids.org` untouched; DNS stays at Namecheap; subdomain `juzamma.rawdahkids.org` via `CNAME cname.vercel-dns.com`.
- `FROM_EMAIL` is `noreply@juzamma.rawdahkids.org` (verified via Resend TXT/SPF/DKIM); fallback `onboarding@resend.dev` until verified. Admin inbox `markazulbayaan9@gmail.com`.
- Keep enrollment future-proof: payment card supports Paystack/Stripe/Flutterwave swap without redesign.

## 5. Process
- Read `docs/SPEC.md` → `docs/PHASES.md` → `docs/GUARDRAILS.md` before any code change.
- Update `SPEC.md` if funnel/facts/brand decisions change.
- Verify each phase: `npm run build` must pass, manual 375/768/1280 check.

## 6. Non-Goals
- No flashy SaaS/crypto styling, no childish Quran site, no generic Islamic template, no gold overload.
