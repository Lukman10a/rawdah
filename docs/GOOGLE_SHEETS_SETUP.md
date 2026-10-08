# Google Sheets — Simple Inbound + Parent Auto-Message

**Goal:** Parent fills the funnel form (`components/sections/EnrollmentForm.tsx:4`) → row appears in your Google Sheet (owned by your Google account email) → parent automatically gets a confirmation email. No Resend, no server.

You only do steps 1–4 once. Total ~10 minutes, no coding beyond copy-paste.

---

## What you will get
- **Sheet:** `Rawdah Registrations` — one row per parent, visible only to you
- **Form:** same inline form, `NEXT_PUBLIC_GOOGLE_SHEETS_URL` → posts `text/plain` JSON
- **Parent email:** `MailApp.sendEmail` from your Gmail (your account quota, ~100/day free, sends as you) with payment instructions

---

## Step 1 — Create the Sheet (2 min)

1. Open **Google Drive** (with the Google account you want to own the data)
2. **New → Google Sheets** → rename to `Rawdah Registrations`
3. In **Row 1** paste headers exactly (A→M):
   ```
   timestamp | parentName | studentName | studentAge | country | email | whatsapp | level | preferredTime | plan | notes | source
   ```
   (Copy/paste: `timestamp` in A1, `parentName` in B1, etc.)
4. Copy the **Sheet ID** from the URL:
   `https://docs.google.com/spreadsheets/d/<THIS_IS_SHEET_ID>/edit`
   Save it — you need it in Step 2.

> Keep this Sheet private (Share only with yourself). The script will write to it using your account.

---

## Step 2 — Add the Apps Script (3 min)

1. In the Sheet: **Extensions → Apps Script** (opens script.google.com)
2. Delete any code, paste this **complete** script:

```js
// 1) CONFIG — change only these two lines
const SHEET_ID = 'PASTE_SHEET_ID_HERE'; // from Step 1 (the long ID in your Sheet URL)
const SHEET_NAME = 'Sheet1';            // exact tab name at bottom of Sheet (case-sensitive)
const ADMIN_EMAIL = 'markazulbayaan9@gmail.com'; // optional admin copy

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.company) return json({ ok: true }); // honeypot

    // 2) Open sheet — robust to wrong name (fixes "Cannot read properties of null (reading 'appendRow')")
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) {
      const available = ss.getSheets().map(s => s.getName()).join(', ');
      throw new Error("Sheet not found: '" + SHEET_NAME + "'. Available tabs: " + available + ". Fix SHEET_NAME to match exactly.");
    }
    // UK time (GMT/BST) — Europe/London handles GMT in winter, BST in summer
    const ukTimestamp = Utilities.formatDate(new Date(), 'Europe/London', 'yyyy-MM-dd HH:mm:ss') + ' (UK)';
    sh.appendRow([
      ukTimestamp,
      data.parentName, data.studentName, data.studentAge, data.country,
      data.email, data.whatsapp, data.level, data.preferredTime, data.plan,
      data.notes || '', data.source || ''
    ]);

    // 3) Keep parent auto-message (sent from YOUR Gmail)
    try {
      const planLabel = data.plan === 'full'
        ? 'Full Payment — $500 (Save $25)'
        : 'Monthly — $105 / month ×5';
      MailApp.sendEmail({
        to: data.email,
        subject: "Registration received — here's what to do next",
        htmlBody: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;background:#FAF8F2;padding:24px;border-radius:16px">
            <div style="background:#123C32;color:#fff;padding:16px 20px;border-radius:12px">Markazul Bayaan — Rawdatul Atfaal</div>
            <h2 style="color:#123C32">As-salaamu alaykum ${data.parentName},</h2>
            <p style="color:#17211E;line-height:1.7">JazakAllahu khairan for registering <b>${data.studentName}</b> for the <b>Juz 'Amma Program</b> (20 weeks • 4×/week • 40 min • one-on-one). You selected <b>${planLabel}</b>. Nigerian students pay equivalent in Naira.</p>
            <div style="background:#fff;border:1px solid #E8F0EA;border-radius:12px;padding:16px;margin:16px 0">
              <b style="color:#123C32">Next steps</b>
              <ol style="color:#17211E;line-height:1.7">
                <li><b>Payment:</b> GTBank 0431141470 — AbdulRauf Lukman Olamide (or Sendwave / Remitly / Wise for international).</li>
                <li><b>Submit proof:</b> Reply to this email or send via <a href="https://bit.ly/rawdah-director">https://bit.ly/rawdah-director</a>.</li>
                <li><b>Confirmation:</b> You'll receive schedule + class link after payment.</li>
              </ol>
            </div>
            <p style="font-size:12px;color:#17211E;opacity:0.6">juzamma.rawdahkids.org • +234 808 928 7065</p>
          </div>`
      });
      // Optional: notify yourself (uncomment next 3 lines if you want admin email too)
      // MailApp.sendEmail({ to: ADMIN_EMAIL, subject: `New Registration — ${data.studentName}`, htmlBody: `<pre>${JSON.stringify(data, null, 2)}</pre>` });
    } catch (err) { console.log('parent mail failed', err); }

    return json({ ok: true });
  } catch (err) {
    return json({ error: String(err) });
  }
}

function doGet() { return json({ ok: true, message: 'Use POST from the funnel form' }); }
function json(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
```

3. Replace `PASTE_SHEET_ID_HERE` with your ID, verify `SHEET_NAME` matches tab name.
4. Click **Save** (💾).

---

## Step 3 — Deploy as Web App (2 min)

1. Click **Deploy → New deployment**
2. **Select type:** `Web app`
3. **Description:** `Rawdah funnel`
4. **Execute as:** `Me` (your Google account)
5. **Who has access:** `Anyone` — required so the funnel (public) can POST without Google login
6. Click **Deploy** → **Authorize** → choose your account → `Advanced → Go to...` → `Allow`
7. **Copy the Web App URL:** `https://script.google.com/macros/s/XXXX/exec` — save it

> If you change script later, **Deploy → Manage deployments → Edit → New version** → Deploy again.

---

## Step 4 — Connect the Funnel (1 min) — Now via Server Proxy (fixes CORS/401)

**Fix applied:** Funnel now posts same-origin `POST /api/enroll` → server `app/api/enroll/route.ts` forwards to Google (`text/plain`) — browser never contacts `script.google.com` directly, so no CORS. Your URL `AKfycbydWnUFX9NPOLS_RMxJdtqs-YWO7NeVotIjH2qZG8EMH6QhJHL8GBGs0srAk56uKyFuhA` stays server-side.

**Local test:**
`.env.local` (add one of these — proxy checks both, prefers server key):
```
GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbydWnUFX9NPOLS_RMxJdtqs-YWO7NeVotIjH2qZG8EMH6QhJHL8GBGs0srAk56uKyFuhA/exec
# fallback also works:
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbydWnUFX9NPOLS_RMxJdtqs-YWO7NeVotIjH2qZG8EMH6QhJHL8GBGs0srAk56uKyFuhA/exec
```
Run `npm run dev` → submit test → check Sheet row + parent inbox (check spam, sender is your Gmail).

**Production (Vercel):**
Vercel → Project → **Settings → Environment Variables** → Add:
- Key: `GOOGLE_SHEETS_URL` (or `NEXT_PUBLIC_GOOGLE_SHEETS_URL`)
- Value: `https://script.google.com/macros/s/AKfycbydWnUFX9NPOLS_RMxJdtqs-YWO7NeVotIjH2qZG8EMH6QhJHL8GBGs0srAk56uKyFuhA/exec`
→ **Save → Redeploy** (Deployments → Redeploy) — **required** because your current deploy has old env and returns 401 until redeployed with correct `Anyone` deployment (Step 3) and this env.

Code posts `POST /api/enroll` (`components/sections/EnrollmentForm.tsx:14`); server proxies `text/plain` to Apps Script and returns `{ok:true}` → success pane `Registration received — here's what to do next`.

---

## Step 5 — Verify (1 min)

1. `npm run build` should pass (no `resend` dep)
2. Submit from `http://localhost:3001` and from `https://juzamma.rawdahkids.org` (after Vercel redeploy)
3. Check: **Sheet** has new row, **parent email** inbox has confirmation (from your Gmail), **success pane** shows
4. Check spam folder if parent email missing — Gmail `MailApp` may land there first time

---

## Troubleshooting

- **401 / CORS from `script.google.com`?** You deployed with wrong access — redeploy Step 3 as `Who has access: Anyone` (not Anyone with Google account) → New version. Also ensure Vercel env `GOOGLE_SHEETS_URL` is set and redeployed; direct browser fetch is now avoided via `/api/enroll` proxy.
- **No row?** Check Sheet ID/name, deployment is `Anyone` with new version, and Vercel redeployed after env change.
- **Parent email not received?** Check script **Executions** log, Gmail daily limit (~100/day free), and spam folder. Admin copy is commented — uncomment if you want duplicate to `markazulbayaan9@gmail.com`.
- **Resend?** Removed — now `app/api/enroll/route.ts` is a Sheets proxy (not Resend), `resend` dep removed.

Need help? Paste your Web App URL here and I’ll set `.env.example` / Vercel instructions for you — no push to repo without permission per `docs/GUARDRAILS.md:7`.
