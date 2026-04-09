// ActeRO — lib/resend.ts
// Trimitere emailuri tranzacționale via Resend

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM ?? 'ActeRO <noreply@actero.ro>'
const REPLY_TO = process.env.RESEND_REPLY_TO ?? 'contact@actero.ro'

// ─── TITLURI GHIDURI ──────────────────────────────────────────────────────────

const GUIDE_TITLES: Record<string, string> = {
  'pasaport-crds-de': 'Reînnoire pașaport CRDS · Germania',
  'pasaport-crds-de-pierdut': 'Pașaport CRDS pierdut/furat · Germania',
  'pasaport-crds-nou-de': 'Primul pașaport CRDS · Germania',
  'pasaport-minor-crds-de': 'Pașaport copil CRDS · Germania',
  'pasaport-de-cu-domiciliu': 'Pașaport · Domiciliu România · Germania',
  'pasaport-de-cu-domiciliu-pierdut': 'Pașaport pierdut/furat · Germania',
  'buletin-de-fara-domiciliu': 'Buletin expirat · Fără domiciliu RO',
  'buletin-de-cu-domiciliu': 'Buletin expirat · Domiciliu activ RO',
  'buletin-de-fara-domiciliu-pierdut': 'Buletin pierdut/furat · Fără domiciliu RO',
  'buletin-de-cu-domiciliu-pierdut': 'Buletin pierdut · Domiciliu activ RO',
  'buletin-de-primul-de': 'Primul buletin românesc · Schimbare domiciliu din străinătate',
  'titlu-calatorie-urgenta-de': 'Titlu de călătorie · Urgență',
  'titlu-calatorie-de': 'Titlu de călătorie · Germania · 1–2 săptămâni',
  'buletin-de-primul-de-b': 'Primul buletin românesc · Germania',
  'procura-vanzare-de': 'Procură de vânzare/cumpărare proprietate · Germania',
  'procura-mostenire-de': 'Procură · Moștenire · Germania',
  'procura-generala-de': 'Procură notarială generală · Germania',
  'transcriere-nastere-de': 'Transcriere certificat de naștere · Germania',
}

function getGuideTitle(guideId: string | null): string {
  if (!guideId) return 'Ghidul tău'
  return GUIDE_TITLES[guideId] ?? 'Ghidul tău'
}

// ─── EMAIL GHID INDIVIDUAL ────────────────────────────────────────────────────

export async function sendAccessEmail({
  to,
  accessUrl,
  guideId,
}: {
  to: string
  accessUrl: string
  guideId: string | null
}) {
  const guideTitle = getGuideTitle(guideId)

  const html = buildAccessEmailHtml({ accessUrl, guideTitle })

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: REPLY_TO,
    subject: `Ghidul tău ActeRO este gata — ${guideTitle}`,
    html,
  })

  if (error) {
    console.error('Resend sendAccessEmail error:', error)
    throw new Error(error.message || 'Resend sendAccessEmail failed')
  }
}

// ─── EMAIL PACHET FAMILIE ─────────────────────────────────────────────────────

export async function sendFamilieEmail({
  to,
  accessLinks,
}: {
  to: string
  accessLinks: { nr: number; url: string }[]
}) {
  const html = buildFamilieEmailHtml({ accessLinks })

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: REPLY_TO,
    subject: 'Pachetul tău Familie ActeRO — 4 ghiduri activate',
    html,
  })

  if (error) {
    console.error('Resend sendFamilieEmail error:', error)
    throw new Error(error.message || 'Resend sendFamilieEmail failed')
  }
}

// ─── TEMPLATE: GHID INDIVIDUAL ───────────────────────────────────────────────

function buildAccessEmailHtml({
  accessUrl,
  guideTitle,
}: {
  accessUrl: string
  guideTitle: string
}): string {
  return `<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ghidul tău ActeRO</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
  <tr>
    <td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:#111111;padding:28px 32px;text-align:center;">
            <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">ActeRO</div>
            <div style="font-size:12px;color:#888888;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">Fără drumuri degeaba</div>
          </td>
        </tr>

        <tr>
          <td style="padding:36px 32px;">
            <p style="margin:0 0 8px;font-size:15px;color:#555555;">Bună ziua,</p>
            <h1 style="margin:0 0 20px;font-size:22px;font-weight:800;color:#111111;line-height:1.3;">
              Ghidul tău este gata. 🎉
            </h1>

            <div style="background:#f8f8f8;border-radius:12px;padding:20px 24px;margin-bottom:28px;border-left:4px solid #22c55e;">
              <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#888888;margin-bottom:6px;">Ghidul tău</div>
              <div style="font-size:16px;font-weight:700;color:#111111;">${guideTitle}</div>
            </div>

            <p style="margin:0 0 28px;font-size:15px;color:#555555;line-height:1.6;">
              Ai acces complet la toți pașii, la lista de acte și la stadiul dosarului. Linkul de acces este personal și valabil <strong>6 luni</strong>.
            </p>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="${accessUrl}"
                    style="display:inline-block;background:#22c55e;color:#ffffff;font-size:16px;font-weight:700;text-decoration:none;padding:16px 36px;border-radius:12px;letter-spacing:-0.2px;">
                    Deschide ghidul meu →
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 0;font-size:13px;color:#888888;text-align:center;line-height:1.6;">
              Dacă butonul nu funcționează, copiază acest link în browser:<br />
              <a href="${accessUrl}" style="color:#22c55e;word-break:break-all;">${accessUrl}</a>
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px;">
            <hr style="border:none;border-top:1px solid #f0f0f0;margin:0;" />
          </td>
        </tr>

        <tr>
          <td style="padding:28px 32px;">
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#888888;margin-bottom:16px;">
              Sfaturi înainte să începi
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:28px;font-size:16px;">✅</td>
                <td style="padding:8px 0;font-size:14px;color:#444444;">Citește lista de documente <strong>înainte</strong> să faci drumul la consulat</td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:28px;font-size:16px;">📋</td>
                <td style="padding:8px 0;font-size:14px;color:#444444;">Folosește lista de acte din secțiunea Acte ca să bifezi fiecare document</td>
              </tr>
              <tr>
                <td style="padding:8px 0;vertical-align:top;width:28px;font-size:16px;">🔔</td>
                <td style="padding:8px 0;font-size:14px;color:#444444;">Dacă rămâi blocat la orice pas, scrie-ne la <a href="mailto:contact@actero.ro" style="color:#22c55e;">contact@actero.ro</a></td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#f8f8f8;padding:24px 32px;text-align:center;border-top:1px solid #f0f0f0;">
            <p style="margin:0 0 8px;font-size:13px;color:#888888;">
              Ai plătit 9,99€ o singură dată · Satisfacție garantată
            </p>
            <p style="margin:0;font-size:12px;color:#aaaaaa;">
              ActeRO · <a href="https://actero.ro" style="color:#aaaaaa;">actero.ro</a> ·
              <a href="mailto:contact@actero.ro" style="color:#aaaaaa;">contact@actero.ro</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

// ─── TEMPLATE: PACHET FAMILIE ─────────────────────────────────────────────────

function buildFamilieEmailHtml({
  accessLinks,
}: {
  accessLinks: { nr: number; url: string }[]
}): string {
  const linksHtml = accessLinks
    .map(
      ({ nr, url }) => `
      <tr>
        <td style="padding:16px 0;border-bottom:1px solid #f0f0f0;">
          <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#888888;margin-bottom:10px;">
            Ghid #${nr}${nr === 1 ? ' (al tău — deja configurat)' : ' (pentru un membru al familiei)'}
          </div>
          <a href="${url}"
            style="display:inline-block;background:${nr === 1 ? '#22c55e' : '#111111'};color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;padding:12px 24px;border-radius:10px;">
            Deschide Ghid #${nr} →
          </a>
          <div style="margin-top:8px;font-size:12px;color:#aaaaaa;word-break:break-all;">
            ${url}
          </div>
        </td>
      </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html lang="ro">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Pachet Familie ActeRO</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px;">
  <tr>
    <td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <tr>
          <td style="background:#111111;padding:28px 32px;text-align:center;">
            <div style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;">ActeRO</div>
            <div style="font-size:12px;color:#888888;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">Pachet Familie · 4 ghiduri</div>
          </td>
        </tr>

        <tr>
          <td style="padding:36px 32px 24px;">
            <p style="margin:0 0 8px;font-size:15px;color:#555555;">Bună ziua,</p>
            <h1 style="margin:0 0 12px;font-size:22px;font-weight:800;color:#111111;line-height:1.3;">
              Pachetul Familie este activat. 🎉
            </h1>
            <p style="margin:0 0 28px;font-size:15px;color:#555555;line-height:1.6;">
              Ai <strong>${accessLinks.length} linkuri de acces</strong> — câte unul pentru fiecare membru al familiei. Fiecare link este personal, independent și valabil <strong>6 luni</strong>.
            </p>

            <div style="background:#fffbeb;border-radius:12px;padding:16px 20px;margin-bottom:28px;border-left:4px solid #f59e0b;">
              <div style="font-size:14px;color:#92400e;line-height:1.5;">
                <strong>Cum funcționează:</strong> Fiecare persoană primește propriul link și răspunde separat la întrebările rapide pentru actul ei. Linkul #1 este deja configurat pentru actul pentru care ai plătit.
              </div>
            </div>

            <table width="100%" cellpadding="0" cellspacing="0">
              ${linksHtml}
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px 28px;">
            <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#888888;margin-bottom:16px;">
              Cum distribui linkurile
            </div>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:6px 0;vertical-align:top;width:28px;font-size:15px;">1️⃣</td>
                <td style="padding:6px 0;font-size:14px;color:#444444;">Trimite Ghid #2, #3, #4 pe WhatsApp sau email membrilor familiei</td>
              </tr>
              <tr>
                <td style="padding:6px 0;vertical-align:top;width:28px;font-size:15px;">2️⃣</td>
                <td style="padding:6px 0;font-size:14px;color:#444444;">Fiecare persoană deschide linkul și răspunde la întrebările rapide pentru actul ei</td>
              </tr>
              <tr>
                <td style="padding:6px 0;vertical-align:top;width:28px;font-size:15px;">3️⃣</td>
                <td style="padding:6px 0;font-size:14px;color:#444444;">Progresul fiecăruia este salvat separat în propriul browser</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="background:#f8f8f8;padding:24px 32px;text-align:center;border-top:1px solid #f0f0f0;">
            <p style="margin:0 0 8px;font-size:13px;color:#888888;">
              Ai plătit 24,99€ o singură dată · Satisfacție garantată
            </p>
            <p style="margin:0 0 8px;font-size:13px;color:#888888;">
              Probleme? Scrie-ne la <a href="mailto:contact@actero.ro" style="color:#22c55e;">contact@actero.ro</a>
            </p>
            <p style="margin:0;font-size:12px;color:#aaaaaa;">
              ActeRO · <a href="https://actero.ro" style="color:#aaaaaa;">actero.ro</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`
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
      replyTo: REPLY_TO,
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
    Echipa ActeRO · <a href="mailto:contact@actero.ro" style="color:#888;">contact@actero.ro</a>
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
