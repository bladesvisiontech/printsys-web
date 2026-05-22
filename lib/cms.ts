const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL

export interface CMSData {
  services?: { name: string; tag: string; price: string }[]
  gallery?: { src: string; alt: string }[]
  address?: string
  city?: string
  phone?: string
  email?: string
}

export async function fetchCMSContent(file = 'data.json'): Promise<CMSData | null> {
  if (!CMS_URL) return null

  try {
    const res = await fetch(`${CMS_URL}/api/content?file=${file}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const { ok, data } = await res.json()
    return ok ? data : null
  } catch {
    return null
  }
}
