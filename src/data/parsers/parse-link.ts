import {MachineReadable} from "../config-types"
import {parseEntry} from "./parse-entry"

export function parseLink(raw: string): MachineReadable.Link {
  return parseEntry(raw).link
}
