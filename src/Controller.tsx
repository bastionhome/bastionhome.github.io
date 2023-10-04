import {h} from "preact"
import {MainView} from "./views/MainView"
import {parseConfig} from "./data/config-parser"
import {config} from "./data/config"

export function Controller() {
  const parsedConfig = parseConfig(config)
  return (
    <MainView
      menu={parsedConfig.menu}
      category={{
        title: parsedConfig.directory[0].title,
        entries: parsedConfig.directory[0].entries.map((e) => e.link),
      }}
    />
  )
}
