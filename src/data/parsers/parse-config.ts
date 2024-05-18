import {curry} from "@benchristel/taste"
import {HumanWritable, MachineReadable} from "../config-types"
import {parseEntry} from "./parse-entry"
import {parseKeywords} from "./parse-keywords"
import {parseLink} from "./parse-link"
import {_, defaultToEmpty} from "../../lib/functional"
import {flatMap, map, sortUnique} from "../../lib/arrays"
import {parseUrl} from "./urls"

export function parseConfig(
  raw: HumanWritable.Config,
): MachineReadable.Config {
  const menu = parseMenu(raw.menu)
  const categories = parseCategories(raw.categories)
  const searchProviders = parseSearchProviders(raw.searchProviders)
  const leechblockAllowPatterns = compileLeechblockAllowPatterns(
    menu,
    searchProviders,
    categories,
    raw.customLeechblockAllowPatterns,
  )

  return {
    menu,
    searchProviders,
    categories,
    leechblockAllowPatterns,
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

function compileLeechblockAllowPatterns(
  menu: MachineReadable.Link[],
  searchProviders: MachineReadable.SearchProvider[],
  categories: MachineReadable.Category[],
  custom: string | undefined,
): string[] {
  const links: MachineReadable.Link[] = [
    ...menu,
    ..._(
      defaultToEmpty(categories),
      flatMap((c) => [c, ...c.subCategories]),
      flatMap((c) => c.entries),
      map((e) => e.link),
    ),
  ]

  const allowList = [
    ..._(
      links,
      map((link) => link.destination),
      map(domain),
    ),
    ..._(
      searchProviders,
      map((p) => p.searchUrlFormat),
      map(domainAndPath),
    ),
    ...parseCustomLeechblockAllowPatterns(custom),
  ]

  return sortUnique([
    ...allowList,
    ...wildcardsForSubdomainsOfPrimaryDomains(allowList),
  ])
}

function wildcardsForSubdomainsOfPrimaryDomains(
  urls: string[],
): string[] {
  return urls
    .map(domain)
    .filter(isPrimaryDomain)
    .map((s) => "*." + s)
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

function domain(url: string): string {
  return rescue(
    () => new URL(url).hostname,
    () => url.split("/")[0],
  )
}

function domainAndPath(urlString: string): string {
  const url = new URL(urlString)
  const path = url.pathname === "/" ? "" : url.pathname
  return url.hostname + path
}

function isPrimaryDomain(domain: string): boolean {
  return domain.split(".").length === 2
}

function rescue<T>(mightFail: () => T, sureThing: () => T): T {
  try {
    return mightFail()
  } catch {
    return sureThing()
  }
}
