import {h} from "preact"
import {useState} from "preact/hooks"
import {MainView} from "./views/MainView"
import {parseConfig} from "./data/parsers/parse-config"
import {config} from "./data/config"
import {presentConfig} from "./views/view-params"
import {search} from "./search"

export function Controller() {
  const [query, setQuery] = useState("")
  const parsedConfig = parseConfig(config)

  const searchedConfig = {
    ...parsedConfig,
    categories: search(query, parsedConfig.categories),
  }

  return (
    <MainView
      config={presentConfig(searchedConfig)}
      query={query}
      onQuery={setQuery}
      onSearchSubmitted={() =>
        window.open("https://duckduckgo.com?q=" + query, "_self")
      }
    />
  )
}
