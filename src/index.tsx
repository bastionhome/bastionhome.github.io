import {render, h} from "preact"
import {Page} from "./Page"
import "./test-results"
import "./reset.css"
import "./global-types"

render(<Page />, document.getElementById("app-root")!)
