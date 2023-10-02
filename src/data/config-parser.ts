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
  return raw.split("\n").map(trim).filter(Boolean).map(parseLink);
}

function parseLink(raw: string): Parsed.Link {
  const [text, destination] = raw.split("|")
  return {
    text,
    destination,
  }
}

function trim(s: string): string {
  return s.trim()
}