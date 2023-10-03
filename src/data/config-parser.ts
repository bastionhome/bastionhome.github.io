import { HumanWritable, MachineReadable } from "./config-types";

export function parseConfig(raw: HumanWritable.Config): MachineReadable.Config {
  return {
    menu: parseMenu(raw.menu),
    searchProviders: [],
    directory: [],
  }
}

function parseMenu(raw: string | undefined): Array<MachineReadable.Link> {
  if (!raw) {
    return []
  }
  return raw.split("\n").map(trim).filter(Boolean).map(parseLink);
}

export function parseLink(raw: string): MachineReadable.Link {
  const [_, text, destination] = raw.split(/^([^|]*)\|(.*)$/).map(trim)
  return {
    text,
    destination,
  }
}

function trim(s: string): string {
  return s.trim()
}