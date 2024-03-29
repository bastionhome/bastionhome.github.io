export namespace HumanWritable {
  export type Config = {
    menu?: string
    searchProviders?: string
    categories?: Array<Category>
    customLeechblockAllowPatterns?: string
  }

  export type Category = {
    title: string
    keywords?: string
    entries?: string
    subCategories?: Array<LeafCategory>
  }

  export type LeafCategory = {
    title: string
    keywords?: string
    entries?: string
  }
}

export namespace MachineReadable {
  export type Config = {
    menu: Array<Link>
    searchProviders: Array<SearchProvider>
    categories: Array<Category>
    leechblockAllowPatterns: Array<string>
  }

  export type Link = {
    destination: string
    text: string
  }

  export type SearchProvider = {
    name: string
    searchUrlFormat: string
  }

  export type Category = {
    title: string
    entries: Array<Entry>
    subCategories: Array<LeafCategory>
  }

  export type LeafCategory = {
    title: string
    entries: Array<Entry>
  }

  export type Entry = {
    link: Link
    keywords: Array<string>
  }

  export function category({
    title = "",
    entries = [],
    subCategories = [],
  }: Partial<Category>): Category {
    return {title, entries, subCategories}
  }
}
