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
      entries: category.entries.map((entry) => entry.link),
    })),
  }
}
