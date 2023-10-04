import {h} from "preact"
import {ViewParams} from "./view-params"

type Props = {
  category: ViewParams.Category
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
