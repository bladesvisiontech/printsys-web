export function toYouTubeEmbed(url: string) {
  const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/)?.[1]
  return id ? `https://www.youtube.com/embed/${id}` : url
}

export function isYouTubeUrl(url: string) {
  return /youtu\.be\/|youtube\.com\//.test(url)
}
