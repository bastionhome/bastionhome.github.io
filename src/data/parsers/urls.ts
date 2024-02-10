export function declutter(url: string): string {
  return url
    .replace(/^[^:]+:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "")
}
