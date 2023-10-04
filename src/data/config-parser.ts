import {HumanWritable, MachineReadable} from "./config-types"

export function parseConfig(
  raw: HumanWritable.Config,
): MachineReadable.Config {
  return {
    menu: parseMenu(raw.menu),
    searchProviders: [],
    directory: parseDirectory(raw.directory),
  }
}

function parseMenu(
  raw: string | undefined,
): Array<MachineReadable.Link> {
  if (!raw) {
    return []
  }
  return raw.split("\n").map(trim).filter(Boolean).map(parseLink)
}

function parseDirectory(
  raw: Array<HumanWritable.Category> | undefined,
): Array<MachineReadable.Category> {
  return (raw ?? []).map(parseCategory)
}

function parseCategory(
  raw: HumanWritable.Category,
): MachineReadable.Category {
  return {
    title: raw.title,
    entries: parseEntries(raw.entries),
  }
}

function parseEntries(
  raw: string | undefined,
): Array<MachineReadable.Entry> {
  if (!raw) {
    return []
  }
  return raw
    .split("\n")
    .map(trim)
    .filter(Boolean)
    .map(parseLink)
    .map((link) => ({link}))
}

export function parseLink(raw: string): MachineReadable.Link {
  const [_, text, destination] = raw
    .split(/^([^|]*)\|(.*)$/)
    .map(trim)
  return {
    text,
    destination,
  }
}

function trim(s: string): string {
  return s.trim()
}
