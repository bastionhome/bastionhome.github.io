import {render, h} from "preact"
import {Controller} from "./Controller"
import "./test-results"
import "./global-types"

render(<Controller />, document.getElementById("preact-root")!)
