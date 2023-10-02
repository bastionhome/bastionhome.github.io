import { Raw, Parsed } from "./config-types";

export function parseConfig(raw: Raw.Config): Parsed.Config {
  return {
    menu: parseMenu(raw.menu),
    searchProviders: [],
    directory: [],
  }
}

function parseMenu(raw: string | undefined): Array<Parsed.Link> {
  if (!raw) {
    return []
  }
  const [text, destination] = raw.split("|")
  return [{
    text,
    destination,
  }]
}