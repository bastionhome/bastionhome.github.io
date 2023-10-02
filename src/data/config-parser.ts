import { Raw, Parsed } from "./config-types";

export function parseConfig(raw: Raw.Config): Parsed.Config {
  return {
    menu: [],
    searchProviders: [],
    directory: [],
  }
}
