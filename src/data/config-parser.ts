import {HumanWritable, MachineReadable} from "./config-types"

export function parseConfig(
  raw: HumanWritable.Config,
): MachineReadable.Config {
  return {
    menu: parseMenu(raw.menu),
    searchProviders: [],
    categories: parseCategories(raw.categories),
  }
}

function parseMenu(
  raw: string | undefined,
): Array<MachineReadable.Link> {
  return trimmedLines(raw).map(parseLink)
}

function parseCategories(
  raw: Array<HumanWritable.Category> | undefined,
): Array<MachineReadable.Category> {
  return (raw ?? []).map(parseCategory)
}

function parseCategory(
  raw: HumanWritable.Category,
): MachineReadable.Category {
  return {
    title: raw.title,
    entries: parseEntries(raw.entries),
    subCategories: (raw.subCategories ?? []).map(parseLeafCategory),
  }
}

function parseLeafCategory(
  raw: HumanWritable.LeafCategory,
): MachineReadable.LeafCategory {
  return {
    title: raw.title,
    entries: parseEntries(raw.entries),
  }
}

function parseEntries(
  raw: string | undefined,
): Array<MachineReadable.Entry> {
  return trimmedLines(raw).map(parseEntry)
}

export function parseEntry(raw: string): MachineReadable.Entry {
  const [text, destination, keywords] = entryParts(raw)
  return {
    link: {text, destination},
    keywords,
  }
}

export function parseLink(raw: string): MachineReadable.Link {
  return parseEntry(raw).link
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

  return [alias ?? removeScheme(url), url, keywords]
}

function removeScheme(url: string): string {
  return url.replace(/^[^:]+:\/\//, "")
}

function trimmedLines(s: string | undefined): Array<string> {
  if (!s) {
    return []
  }
  return s.split("\n").map(trim).filter(Boolean)
}

function trim(s: string): string {
  return s.trim()
}
