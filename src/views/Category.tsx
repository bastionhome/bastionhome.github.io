import {h} from "preact"
import {MachineReadable} from "../data/config-types"

type Props = {
  category: {
    title: string
    entries: Array<MachineReadable.Link>
  }
}

export function Category(props: Props) {
  return (
    <section>
      <h2>{props.category.title}</h2>
      <ul>
        {props.category.entries.map((link) => (
          <li>
            <a href={link.destination}>{link.text}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
