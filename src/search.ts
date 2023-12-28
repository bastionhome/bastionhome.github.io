import {curry} from "@benchristel/taste"
import {MachineReadable} from "./data/config-types"

type Category = MachineReadable.Category
type Entry = MachineReadable.Entry
type LeafCategory = MachineReadable.LeafCategory

export function search(
  query: string,
  categories: Category[],
): Category[] {
  return categories
    .filter(categoryMatches(query))
    .map(filterCategoryEntries(query))
}

export function webSearchUrl(query: string): string {
  return (
    "https://html.duckduckgo.com/html/?q=" + encodeURIComponent(query)
  )
}

const categoryMatches = curry(
  (query: string, category: Category): boolean =>
    category.entries.some(entryMatches(query)) ||
    category.subCategories.some(subCategoryMatches(query)),
  "categoryMatches",
)

const filterCategoryEntries = curry(
  (query: string, category: Category): Category => {
    return {
      ...category,
      entries: category.entries.filter(entryMatches(query)),
      subCategories: category.subCategories
        .filter(subCategoryMatches(query))
        .map(filterSubCategoryEntries(query)),
    }
  },
)

const subCategoryMatches = curry(
  (query: string, subCategory: LeafCategory): boolean => {
    return subCategory.entries.some(entryMatches(query))
  },
)

const filterSubCategoryEntries = curry(
  (query: string, subCategory: LeafCategory): LeafCategory => {
    return {
      ...subCategory,
      entries: subCategory.entries.filter(entryMatches(query)),
    }
  },
)

export const entryMatches = curry(
  (query: string, entry: Entry): boolean =>
    lowercaseWords(query).every(
      (word) =>
        entry.link.destination.toLowerCase().includes(word) ||
        entry.link.text.toLowerCase().includes(word) ||
        entry.keywords.some((keyword) =>
          keyword.toLowerCase().includes(word),
        ),
    ),
  "entryMatches",
)

function lowercaseWords(s: string): string[] {
  return s.toLowerCase().split(/\s+/)
}
