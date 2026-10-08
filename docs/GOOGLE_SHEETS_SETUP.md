# Google Sheets — Inbound Setup (A) + Keep Parent Auto-Message

Simple inbound: parent submits inline form → Apps Script appends row → optional `MailApp.sendEmail` to parent (keeps auto-message). No Resend.

## 1. Create Sheet
1. Google Drive → New Sheet `Rawdah Registrations` (owned by your Google account email)
2. Row 1 headers (exact order): `timestamp | parentName | studentName | studentAge | country | email | whatsapp | level | preferredTime | plan | notes | source | ip`
3. Note Sheet ID from URL `https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`

## 2. Apps Script (bound to Sheet)
Extensions → Apps Script → paste:

```js
const SHEET_NAME = 'Sheet1';
const ADMIN_EMAIL = 'markazulbayaan9@gmail.com'; // keep

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.company) return json({ ok: true }); // honeypot
    const sh = SpreadsheetApp.openById('SHEET_ID').getSheetByName(SHEET_NAME);
    sh.appendRow([
      data.timestamp || new Date().toISOString(),
      data.parentName, data.studentName, data.studentAge, data.country,
      data.email, data.whatsapp, data.level, data.preferredTime, data.plan,
      data.notes || '', data.source || '', ''
    ]);
    // Keep parent auto-message via Gmail (uses your Google account quota)
    try {
      const planLabel = data.plan === 'full' ? 'Full Payment — $500 (Save $25)' : 'Monthly — $105 / month ×5';
      MailApp.sendEmail({
        to: data.email,
        subject: "Registration received — here's what to do next",
        htmlBody: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;background:#FAF8F2;padding:24px;border-radius:16px">
            <div style="background:#123C32;color:#fff;padding:16px 20px;border-radius:12px">Markazul Bayaan — Rawdatul Atfaal</div>
            <h2 style="color:#123C32">As-salaamu alaykum ${data.parentName},</h2>
            <p style="color:#17211E;line-height:1.7">JazakAllahu khairan for registering <b>${data.studentName}</b> (Juz 'Amma • 20 weeks • 4×/week • 40 min • one-on-one). You selected <b>${planLabel}</b>.</p>
            <div style="background:#fff;border:1px solid #E8F0EA;border-radius:12px;padding:16px;margin:16px 0">
              <b style="color:#123C32">Next steps</b>
              <ol style="color:#17211E;line-height:1.7"><li>Payment: GTBank 0431141470 — AbdulRauf Lukman Olamide (or Sendwave/Remitly/Wise)</li><li>Submit proof: https://bit.ly/rawdah-director or reply to this email</li><li>Confirmation: schedule + link after payment</li></ol>
            </div>
            <p style="font-size:12px;color:#17211E;opacity:0.6">juzamma.rawdahkids.org • +234 808 928 7065</p>
          </div>`
      });
    } catch (err) { console.log('mail failed', err); }
    return json({ ok: true });
  } catch (err) { return json({ error: String(err) }); }
}
function doGet() { return json({ ok: true, msg: 'Use POST' }); }
function json(o){ return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
```

Replace `SHEET_ID` and `SHEET_NAME`.

## 3. Deploy Web App
Deploy → New deployment → Type `Web app` → Execute as `Me` → Who has access `Anyone` → Deploy → copy `https://script.google.com/macros/s/XXXX/exec`

## 4. Wire Funnel
Local: `.env.local` → `NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/XXXX/exec`
Vercel: Project → Settings → Environment Variables → add same key → Redeploy

Form (`components/sections/EnrollmentForm.tsx:4`) posts `text/plain` JSON to that URL; success pane shows `Registration received — here's what to do next` + Sheet row + parent email via `MailApp` (Gmail quota ~100/day free).

## 5. Verify
`npm run build` passes. Submit test from funnel → check Sheet row + parent inbox (+ spam) + admin inbox if you add `MailApp.sendEmail` to ADMIN_EMAIL too.

## Note
No Resend references remain (removed `app/api/enroll`, `resend` dep, `RESEND_API_KEY`). Keep honeypot `company` field.
