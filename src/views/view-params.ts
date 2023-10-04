import {MachineReadable} from "../data/config-types"

export namespace ViewParams {
  export type Config = {
    menu: Array<Link>
    searchProviders: Array<SearchProvider>
    directory: Array<Category>
  }

  export type SearchProvider = {
    name: string
    searchUrlFormat: string
  }

  export type Category = {
    title: string
    entries: Array<Link>
    subCategories: Array<LeafCategory>
  }

  export type LeafCategory = {
    title: string
    entries: Array<Link>
  }

  export type Link = {
    text: string
    destination: string
  }
}

export function presentConfig(
  config: MachineReadable.Config,
): ViewParams.Config {
  return {
    menu: config.menu,
    searchProviders: config.searchProviders,
    directory: config.directory.map((category) => ({
      ...category,
      subCategories: category.subCategories.map((subCategory) => ({
        ...subCategory,
        entries: subCategory.entries.map((entry) => entry.link),
      })),
      entries: category.entries.map((entry) => entry.link),
    })),
  }
}
