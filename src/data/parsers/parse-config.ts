import {curry} from "@benchristel/taste"
import {HumanWritable, MachineReadable} from "../config-types"
import {parseEntry} from "./parse-entry"
import {parseKeywords} from "./parse-keywords"
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
