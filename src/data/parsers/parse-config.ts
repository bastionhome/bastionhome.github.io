import {HumanWritable, MachineReadable} from "../config-types"
import {parseEntry} from "./parse-entry"
import {parseLink} from "./parse-link"

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
    entries: parseEntries(raw.entries, parseKeywords(raw.keywords)),
  }
}

function parseEntries(
  raw: string | undefined,
  keywords: string[] = [],
): Array<MachineReadable.Entry> {
  return trimmedLines(raw)
    .map(parseEntry)
    .map((entry) => ({
      ...entry,
      keywords: entry.keywords.concat(keywords),
    }))
}

export function parseKeywords(raw: string | undefined): string[] {
  const trimmed = raw?.trim()
  if (!trimmed) {
    return []
  }
  return trimmed.split(/\s+/)
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
