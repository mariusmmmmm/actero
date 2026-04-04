// ActeRO — lib/resend.ts
// Trimitere emailuri prin Resend

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.RESEND_FROM ?? 'ghid@actero.ro'

// ─── TITLURI GHIDURI pentru email ─────────────────────────────────────────────

const guideTitles: Record<string, string> = {
  'pasaport-crds-de': 'Reînnoire pașaport CRDS · Germania',
  'pasaport-crds-nou-de': 'Primul pașaport CRDS · Germania',
  'pasaport-de-cu-domiciliu': 'Pașaport expirat · Domiciliu România',
  'pasaport-de-cu-domiciliu-pierdut': 'Pașaport pierdut/furat · Germania',
  'buletin-de-fara-domiciliu': 'Buletin expirat · Fără domiciliu RO',
  'buletin-de-cu-domiciliu': 'Buletin expirat · Domiciliu activ RO',
  'buletin-de-fara-domiciliu-pierdut': 'Buletin pierdut/furat · Germania',
  'buletin-de-cu-domiciliu-pierdut': 'Buletin pierdut/furat · Domiciliu RO',
  'titlu-calatorie-urgenta-de': 'Titlu de călătorie · Urgență',
  'titlu-calatorie-de': 'Titlu de călătorie · Germania',
  'procura-vanzare-de': 'Procură vânzare proprietate · Germania',
  'procura-mostenire-de': 'Procură moștenire · Germania',
  'procura-generala-de': 'Procură generală · Germania',
  'transcriere-nastere-de': 'Transcriere certificat de naștere · Germania',
}

// ─── EMAIL ACCES GHID ─────────────────────────────────────────────────────────

type SendAccessEmailParams = {
  to: string
  accessUrl: string
  guideId: string
}

export async function sendAccessEmail({ to, accessUrl, guideId }: SendAccessEmailParams) {
  const guideTitle = guideTitles[guideId] ?? 'Ghidul tău ActeRO'

  const html = `
<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:520px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:#1a1a1a;padding:28px 32px;">
      <div style="font-size:20px;font-weight:700;color:#fff;">ActeRO</div>
      <div style="font-size:13px;color:#888;margin-top:4px;">Acte românești din Germania</div>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <h1 style="font-size:20px;font-weight:700;color:#1a1a1a;margin:0 0 8px;">
        Ghidul tău este gata ✓
      </h1>
      <p style="font-size:14px;color:#555;margin:0 0 24px;line-height:1.6;">
        Ai acces la ghidul complet pentru:<br>
        <strong style="color:#1a1a1a;">${guideTitle}</strong>
      </p>

      <!-- CTA button -->
      <a href="${accessUrl}" 
         style="display:block;background:#1a1a1a;color:#fff;text-decoration:none;padding:16px 24px;border-radius:12px;font-size:15px;font-weight:700;text-align:center;margin-bottom:24px;">
        Deschide ghidul meu →
      </a>

      <p style="font-size:13px;color:#888;margin:0 0 8px;">
        Sau copiază linkul în browser:
      </p>
      <p style="font-size:12px;color:#aaa;word-break:break-all;background:#f5f5f5;padding:10px 12px;border-radius:8px;margin:0 0 24px;">
        ${accessUrl}
      </p>

      <div style="background:#fff8e1;border-radius:10px;padding:14px 16px;font-size:13px;color:#5d4037;line-height:1.5;">
        <strong>Linkul este personal și valabil 6 luni.</strong><br>
        Păstrează acest email — îl poți folosi oricând pentru a reveni la ghid.
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;border-top:1px solid #f0f0f0;">
      <p style="font-size:12px;color:#bbb;margin:0 0 6px;">
        Dacă nu găsești ghidul sau ai nevoie de ajutor, scrie-ne la 
        <a href="mailto:contac@actero.ro" style="color:#888;">contac@actero.ro</a>
      </p>
      <p style="font-size:12px;color:#ccc;margin:0;">
        © ActeRO · actero.ro
      </p>
    </div>

  </div>
</body>
</html>
`

  const text = `
Ghidul tău ActeRO este gata!

Ghid: ${guideTitle}

Deschide ghidul: ${accessUrl}

Linkul este personal și valabil 6 luni. Păstrează acest email.

Dacă ai nevoie de ajutor: contac@actero.ro
`

  try {
    await resend.emails.send({
      from: FROM,
      to,
      subject: `Ghidul tău ActeRO este gata — ${guideTitle}`,
      html,
      text,
    })
  } catch (err) {
    console.error('Resend error:', err)
    // Nu aruncăm eroarea — plata e confirmată chiar dacă emailul pică
  }
}

// ─── EMAIL PACHET FAMILIE ─────────────────────────────────────────────────────

type FamilieLink = { nr: number; url: string }

type SendFamilieEmailParams = {
  to: string
  accessLinks: FamilieLink[]
}

export async function sendFamilieEmail({ to, accessLinks }: SendFamilieEmailParams) {
  const linkRows = accessLinks
    .map(
      (l) => `
      <tr>
        <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:13px;font-weight:700;color:#1a1a1a;margin-bottom:6px;">
            Ghid ${l.nr} din 4
          </div>
          <a href="${l.url}"
             style="display:inline-block;background:#1a1a1a;color:#fff;text-decoration:none;padding:10px 20px;border-radius:10px;font-size:13px;font-weight:600;">
            Deschide Ghidul ${l.nr} →
          </a>
          <div style="margin-top:6px;font-size:11px;color:#aaa;word-break:break-all;">
            ${l.url}
          </div>
        </td>
      </tr>`
    )
    .join('')

  const html = `
<!DOCTYPE html>
<html lang="ro">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#1a1a1a;padding:28px 32px;">
      <div style="font-size:20px;font-weight:700;color:#fff;">ActeRO</div>
      <div style="font-size:13px;color:#888;margin-top:4px;">Pachet Familie</div>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <h1 style="font-size:20px;font-weight:700;color:#1a1a1a;margin:0 0 8px;">
        Pachetul familie este activ ✓
      </h1>
      <p style="font-size:14px;color:#555;margin:0 0 24px;line-height:1.6;">
        Ai 4 ghiduri plătite disponibile. <strong>Fiecare link este independent</strong> —
        trimite-l persoanei care are nevoie de el. Fiecare persoană va completa
        wizardul propriu și va primi ghidul personalizat pentru situația ei exactă.
      </p>

      <!-- Cum funcționează -->
      <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:16px 20px;margin-bottom:28px;">
        <div style="font-size:13px;font-weight:700;color:#0369a1;margin-bottom:10px;">
          📋 Cum folosești cele 4 ghiduri:
        </div>
        <div style="font-size:13px;color:#0c4a6e;line-height:1.7;">
          <strong>Pasul 1:</strong> Fiecare link de mai jos deschide un ghid separat.<br>
          <strong>Pasul 2:</strong> Trimite linkul persoanei care are nevoie (soț/soție, copil, părinte).<br>
          <strong>Pasul 3:</strong> Persoana deschide linkul → completează 3 întrebări → primește ghidul personalizat.<br>
          <strong>Pasul 4:</strong> Ghidul rămâne activ 6 luni — poate fi accesat oricând din linkul primit.
        </div>
      </div>

      <!-- Avertizare importantă -->
      <div style="background:#fff8e1;border:1px solid #fcd34d;border-radius:12px;padding:16px 20px;margin-bottom:28px;">
        <div style="font-size:13px;font-weight:700;color:#92400e;margin-bottom:6px;">
          ⚠️ Important — citește înainte să trimiți linkurile:
        </div>
        <ul style="font-size:13px;color:#78350f;line-height:1.7;margin:0;padding-left:18px;">
          <li>Fiecare link poate fi folosit o singură dată pentru a debloca un ghid.</li>
          <li>Nu distribui același link la mai multe persoane.</li>
          <li>Linkurile sunt valabile <strong>6 luni</strong> de la această dată.</li>
          <li>Dacă nu ai nevoie de toate 4, restul rămân disponibile pentru mai târziu.</li>
        </ul>
      </div>

      <!-- Cele 4 linkuri -->
      <div style="font-size:14px;font-weight:700;color:#1a1a1a;margin-bottom:16px;">
        Cele 4 linkuri ale tale:
      </div>
      <table style="width:100%;border-collapse:collapse;">
        ${linkRows}
      </table>

      <!-- Separator -->
      <div style="margin:28px 0;border-top:1px solid #f0f0f0;"></div>

      <!-- Exemple de utilizare -->
      <div style="font-size:13px;font-weight:700;color:#1a1a1a;margin-bottom:10px;">
        Exemple practice:
      </div>
      <div style="font-size:13px;color:#555;line-height:1.7;margin-bottom:20px;">
        🔹 <strong>Ghid 1</strong> — îl folosești tu, pentru pașaportul expirat<br>
        🔹 <strong>Ghid 2</strong> — îl trimiți soțului/soției, pentru buletinul ei<br>
        🔹 <strong>Ghid 3</strong> — îl trimiți pentru procura de vânzare proprietate<br>
        🔹 <strong>Ghid 4</strong> — îl păstrezi pentru mai târziu sau îl dai unui prieten
      </div>

      <div style="background:#f9fafb;border-radius:10px;padding:14px 16px;font-size:13px;color:#5d4037;line-height:1.5;">
        <strong>Ai nevoie de ajutor?</strong> Scrie-ne la
        <a href="mailto:contac@actero.ro" style="color:#1a1a1a;font-weight:600;">contac@actero.ro</a>
        — răspundem în cel mult 48 de ore.
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 32px;border-top:1px solid #f0f0f0;">
      <p style="font-size:12px;color:#bbb;margin:0 0 4px;">
        Păstrează acest email — conține toate linkurile tale ActeRO.
      </p>
      <p style="font-size:12px;color:#ccc;margin:0;">
        © ActeRO · actero.ro
      </p>
    </div>

  </div>
</body>
</html>
`

  const text = `
PACHET FAMILIE ACTIV — ActeRO
==============================

Ai 4 ghiduri plătite disponibile.
Fiecare link este independent — trimite-l persoanei care are nevoie de el.

CUM FUNCȚIONEAZĂ:
1. Fiecare link de mai jos deschide un ghid separat.
2. Trimite linkul persoanei care are nevoie (soț/soție, copil, părinte).
3. Persoana deschide linkul → completează 3 întrebări → primește ghidul personalizat.
4. Ghidul rămâne activ 6 luni.

IMPORTANT:
- Fiecare link poate fi folosit O SINGURĂ DATĂ pentru a debloca un ghid.
- Nu distribui același link la mai multe persoane.
- Linkurile sunt valabile 6 LUNI de la această dată.

CELE 4 LINKURI:
${accessLinks.map((l) => `Ghid ${l.nr} din 4:\n${l.url}`).join('\n\n')}

Ajutor: contac@actero.ro (răspundem în 48 ore)
© ActeRO · actero.ro
`

  try {
    await resend.emails.send({
      from: FROM,
      to,
      subject: 'Pachetul tău familie ActeRO — 4 linkuri de acces',
      html,
      text,
    })
  } catch (err) {
    console.error('Resend familie error:', err)
  }
}

type SendHelpConfirmationParams = {
  to: string
  firstName?: string
}

export async function sendHelpConfirmation({ to, firstName }: SendHelpConfirmationParams) {
  const name = firstName ? firstName : 'Bună'

  try {
    await resend.emails.send({
      from: FROM,
      to,
      subject: 'Am primit întrebarea ta — ActeRO',
      html: `
<div style="font-family:-apple-system,sans-serif;max-width:480px;margin:0 auto;padding:32px;">
  <div style="font-size:18px;font-weight:700;color:#1a1a1a;margin-bottom:16px;">ActeRO</div>
  <p style="font-size:14px;color:#333;line-height:1.6;">${name},</p>
  <p style="font-size:14px;color:#333;line-height:1.6;">
    Am primit întrebarea ta și îți răspundem în cel mult <strong>48 de ore</strong> 
    pe acest email.
  </p>
  <p style="font-size:13px;color:#888;margin-top:24px;">
    Echipa ActeRO · <a href="mailto:contac@actero.ro" style="color:#888;">contac@actero.ro</a>
  </p>
</div>
      `,
      text: `${name}, am primit întrebarea ta și îți răspundem în cel mult 48 de ore. — Echipa ActeRO`,
    })
  } catch (err) {
    console.error('Resend help confirmation error:', err)
  }
}

type SendContactEmailParams = {
  name?: string
  email: string
  subject?: string
  message: string
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: SendContactEmailParams) {
  const safeName = name?.trim() || 'Necunoscut'
  const safeSubject = subject?.trim() || 'Mesaj nou din formularul de contact'

  try {
    await resend.emails.send({
      from: FROM,
      to: 'contact@actero.ro',
      replyTo: email,
      subject: `[Contact] ${safeSubject}`,
      html: `
<div style="font-family:-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:32px;">
  <div style="font-size:18px;font-weight:700;color:#1a1a1a;margin-bottom:20px;">ActeRO</div>
  <div style="font-size:14px;color:#555;margin-bottom:10px;"><strong>Nume:</strong> ${safeName}</div>
  <div style="font-size:14px;color:#555;margin-bottom:10px;"><strong>Email:</strong> ${email}</div>
  <div style="font-size:14px;color:#555;margin-bottom:16px;"><strong>Subiect:</strong> ${safeSubject}</div>
  <div style="font-size:14px;color:#1a1a1a;line-height:1.7;white-space:pre-line;background:#f9fafb;border-radius:12px;padding:16px;">
    ${message}
  </div>
</div>
      `,
      text: `Nume: ${safeName}\nEmail: ${email}\nSubiect: ${safeSubject}\n\n${message}`,
    })
  } catch (err) {
    console.error('Resend contact error:', err)
    throw err
  }
}
