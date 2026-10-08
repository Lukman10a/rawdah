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
const SHEET_ID = 'PASTE_SHEET_ID_HERE'; // from Step 1
const SHEET_NAME = 'Sheet1';            // tab name at bottom (default Sheet1)
const ADMIN_EMAIL = 'markazulbayaan9@gmail.com'; // optional admin copy

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    // Honeypot — bots fill hidden "company" field
    if (data.company) return json({ ok: true });

    // 2) Append row
    const sh = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    sh.appendRow([
      data.timestamp || new Date().toISOString(),
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

## Step 4 — Connect the Funnel (1 min)

**Local test:**
Create `.env.local` in project root (same folder as `package.json`):
```
NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXX/exec
```
Run `npm run dev` → submit test → check Sheet row + parent inbox (check spam, sender is your Gmail).

**Production (Vercel):**
Vercel → Project → **Settings → Environment Variables** → Add:
- Key: `NEXT_PUBLIC_GOOGLE_SHEETS_URL`
- Value: `https://script.google.com/macros/s/XXXX/exec`
→ **Save → Redeploy** (Deployments → Redeploy)

Code already posts `text/plain` JSON from `components/sections/EnrollmentForm.tsx:4`; on success it shows `Registration received — here's what to do next` with plan-aware GTBank box. If URL not yet set, it logs locally and still shows success (so funnel never blocks).

---

## Step 5 — Verify (1 min)

1. `npm run build` should pass (no `resend` dep)
2. Submit from `http://localhost:3001` and from `https://juzamma.rawdahkids.org` (after Vercel redeploy)
3. Check: **Sheet** has new row, **parent email** inbox has confirmation (from your Gmail), **success pane** shows
4. Check spam folder if parent email missing — Gmail `MailApp` may land there first time

---

## Troubleshooting

- **No row?** Check Sheet ID/name, deployment is `Anyone`, and redeployed after script change.
- **CORS error in browser but row still appears?** Apps Script `text/plain` should avoid CORS; if seen, ensure `Who has access: Anyone` and URL is `.../exec` not `.../dev`.
- **Parent email not received?** Check script **Executions** log, Gmail daily limit (~100/day free), and spam folder. Admin copy is commented — uncomment if you want duplicate to `markazulbayaan9@gmail.com`.
- **Resend?** Removed — deleted `app/api/enroll/route.ts`, `resend` dep, `RESEND_API_KEY` env (see `docs/SPEC.md:7`).

Need help? Paste your Web App URL here and I’ll set `.env.example` / Vercel instructions for you — no push to repo without permission per `docs/GUARDRAILS.md:7`.
