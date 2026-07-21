import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { siteConfig } from '@/data/catalog'

// mail.printsys.com.co is verified in Resend — sends from the real domain
// to the real contacts. Override via CONTACT_TO_EMAIL in Vercel if needed.
const DEFAULT_TO = siteConfig.contacts.map(c => c.email)

const MAX_FIELD_LENGTH = 300
const MAX_MESSAGE_LENGTH = 5000
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function stripHeaderInjection(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').slice(0, MAX_FIELD_LENGTH)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const nombre = typeof body.nombre === 'string' ? stripHeaderInjection(body.nombre) : ''
  const empresa = typeof body.empresa === 'string' ? stripHeaderInjection(body.empresa) : ''
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, MAX_FIELD_LENGTH) : ''
  const telefono = typeof body.telefono === 'string' ? stripHeaderInjection(body.telefono) : ''
  const asunto = typeof body.asunto === 'string' ? stripHeaderInjection(body.asunto) : ''
  const mensaje = typeof body.mensaje === 'string' ? body.mensaje.slice(0, MAX_MESSAGE_LENGTH) : ''

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
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
