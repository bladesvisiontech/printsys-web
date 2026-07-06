import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteConfig } from '@/data/catalog'

// mail.printsys.com.co is verified in Resend — sends from the real domain
// to the real contacts. Override via CONTACT_TO_EMAIL in Vercel if needed.
const DEFAULT_TO = siteConfig.contacts.map(c => c.email)

export async function POST(request: NextRequest) {
  const { nombre, empresa, email, telefono, asunto, mensaje } = await request.json()

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_TO_EMAIL?.split(',').map(e => e.trim()) ?? DEFAULT_TO

  try {
    const { error } = await resend.emails.send({
      from: 'Printsys Web <web@mail.printsys.com.co>',
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
