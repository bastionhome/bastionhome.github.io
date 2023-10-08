export function parseKeywords(raw: string | undefined): string[] {
  const trimmed = raw?.trim()
  if (!trimmed) {
    return []
  }
  return trimmed.split(/\s+/)
}
