import {h} from "preact"
import {MainView} from "./views/MainView"
import {parseConfig} from "./data/config-parser"
import {config} from "./data/config"

export function Controller() {
  const category = parseConfig(config).directory[0]
  return (
    <MainView
      menu={parseConfig(config).menu}
      category={{
        title: category.title,
        entries: category.entries.map((e) => e.link),
      }}
    />
  )
}
