import {MachineReadable} from "../config-types"
import {declutter} from "./urls"

export function parseEntry(raw: string): MachineReadable.Entry {
  const [text, destination, keywords] = entryParts(raw)
  return {
    link: {text, destination},
    keywords,
  }
}

function entryParts(raw: string): [string, string, string[]] {
  const indexOfFirstPipe = raw.indexOf("|")

  let alias: string | undefined
  let urlAndKeywords: string
  if (indexOfFirstPipe === -1) {
    alias = undefined
    urlAndKeywords = raw
  } else {
    alias = raw.slice(0, indexOfFirstPipe).trim()
    urlAndKeywords = raw.slice(indexOfFirstPipe + 1).trim()
  }

  const [url, ...keywords] = urlAndKeywords.split(/\s+/)

  return [alias ?? declutter(url), url, keywords]
}
