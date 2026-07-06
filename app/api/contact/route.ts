import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Until printsys.com.co is verified as a sending domain in Resend, test-mode
// accounts can only deliver to the Resend account's own email. Once verified,
// set CONTACT_TO_EMAIL in Vercel to the real recipients (comma-separated) —
// no code change needed.
const DEFAULT_TO = 'davidprintsys@gmail.com'

export async function POST(request: NextRequest) {
  const { nombre, empresa, email, telefono, asunto, mensaje } = await request.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL?.split(',').map(e => e.trim()) ?? [DEFAULT_TO]

  try {
    const { error } = await resend.emails.send({
      from: 'Printsys Web <onboarding@resend.dev>',
      to,
      replyTo: email,
      subject: `[Contacto web] ${asunto || 'Nuevo mensaje'} — ${nombre}`,
      text: [
        `Nombre: ${nombre}`,
        empresa && `Empresa: ${empresa}`,
        `Email: ${email}`,
        telefono && `Teléfono: ${telefono}`,
        asunto && `Asunto: ${asunto}`,
        '',
        mensaje,
      ].filter(Boolean).join('\n'),
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 })
  }
}
