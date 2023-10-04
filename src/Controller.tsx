import {h} from "preact"
import {MainView} from "./views/MainView"
import {parseConfig} from "./data/config-parser"
import {config} from "./data/config"
import {presentConfig} from "./views/view-params"

export function Controller() {
  const parsedConfig = parseConfig(config)
  return <MainView config={presentConfig(parsedConfig)} />
}
