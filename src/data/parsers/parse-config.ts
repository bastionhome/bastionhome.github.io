import {curry} from "@benchristel/taste"
import {HumanWritable, MachineReadable} from "../config-types"
import {parseEntry} from "./parse-entry"
import {parseKeywords} from "./parse-keywords"
import {parseLink} from "./parse-link"
import {_, defaultToEmpty} from "../../lib/functional"
import {flatMap, map} from "../../lib/arrays"

export function parseConfig(
  raw: HumanWritable.Config,
): MachineReadable.Config {
  const menu = parseMenu(raw.menu)
  const categories = parseCategories(raw.categories)
  return {
    menu,
    searchProviders: parseSearchProviders(raw.searchProviders),
    categories,
    leechblockAllowPatterns: [
      ..._(menu, map(domain)),
      ..._(
        defaultToEmpty(categories),
        flatMap((c) => [c, ...c.subCategories]),
        flatMap(entries),
        map(link),
        map(domain),
      ),
      ...parseCustomLeechblockAllowPatterns(
        raw.customLeechblockAllowPatterns,
      ),
    ],
  }
}

function parseMenu(
  raw: string | undefined,
): Array<MachineReadable.Link> {
  return trimmedLines(raw).map(parseLink)
}

function parseSearchProviders(
  raw: string | undefined,
): Array<MachineReadable.SearchProvider> {
  return trimmedLines(raw)
    .map(parseLink)
    .map((link) => ({
      name: link.text,
      searchUrlFormat: link.destination,
    }))
}

function parseCategories(
  raw: Array<HumanWritable.Category> | undefined,
): Array<MachineReadable.Category> {
  return (raw ?? []).map(parseCategory)
}

function parseCustomLeechblockAllowPatterns(
  raw: string | undefined,
): Array<string> {
  return raw?.trim().split(/\s+/) ?? []
}

function parseCategory(
  raw: HumanWritable.Category,
): MachineReadable.Category {
  const keywords = parseKeywords(raw.keywords)
  return {
    title: raw.title,
    entries: parseEntries(raw.entries, keywords),
    subCategories: (raw.subCategories ?? []).map(
      parseLeafCategory(keywords),
    ),
  }
}

const parseLeafCategory = curry(
  (
    inheritedKeywords: string[],
    raw: HumanWritable.LeafCategory,
  ): MachineReadable.LeafCategory => {
    return {
      title: raw.title,
      entries: parseEntries(
        raw.entries,
        inheritedKeywords.concat(parseKeywords(raw.keywords)),
      ),
    }
  },
  "parseLeafCategory",
)

function parseEntries(
  raw: string | undefined,
  inheritedKeywords: string[] = [],
): Array<MachineReadable.Entry> {
  return trimmedLines(raw)
    .map(parseEntry)
    .map((entry) => ({
      ...entry,
      keywords: entry.keywords.concat(inheritedKeywords),
    }))
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

function entries(c: {
  entries: Array<MachineReadable.Entry>
}): Array<MachineReadable.Entry> {
  return c.entries
}

function link(e: MachineReadable.Entry): MachineReadable.Link {
  return e.link
}

function domain(l: MachineReadable.Link): string {
  return new URL(l.destination).hostname
}

function subCategories(
  c: MachineReadable.Category,
): Array<MachineReadable.LeafCategory> {
  return c.subCategories
}
