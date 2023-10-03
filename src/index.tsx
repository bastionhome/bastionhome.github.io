import {render, h} from "preact"
import {Controller} from "./Controller"
import "./test-results"
import "./reset.css"
import "./global-types"

render(<Controller />, document.getElementById("preact-root")!)
