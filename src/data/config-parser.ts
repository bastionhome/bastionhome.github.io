import {HumanWritable, MachineReadable} from "./config-types"

export function parseConfig(
  raw: HumanWritable.Config,
): MachineReadable.Config {
  return {
    menu: parseMenu(raw.menu),
    searchProviders: [],
    directory: parseDirectory(raw.directory),
  }
}

function parseMenu(
  raw: string | undefined,
): Array<MachineReadable.Link> {
  return trimmedLines(raw).map(parseLink)
}

function parseDirectory(
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
  }
}

function parseEntries(
  raw: string | undefined,
): Array<MachineReadable.Entry> {
  return trimmedLines(raw).map(parseEntry)
}

export function parseEntry(raw: string): MachineReadable.Entry {
  const [, , keywordsString] = entryParts(raw)
  return {
    link: parseLink(raw),
    keywords: keywordsString ? keywordsString.split(/\s+/) : [],
  }
}

export function parseLink(raw: string): MachineReadable.Link {
  const [text = raw, destination = "#"] = entryParts(raw)
  return {
    text,
    destination,
  }
}

function entryParts(raw: string): Array<string> {
  return raw
    .split(/^([^|]*)\|\s*(\S+)/)
    .map(trim)
    .slice(1)
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
