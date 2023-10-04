import {h} from "preact"
import {ViewParams} from "./view-params"
import "./DirectoryLink.less"

type Props = {
  link: ViewParams.Link
}

export function DirectoryLink({link}: Props) {
  return (
    <li class="directory-link">
      <a href={link.destination}>{link.text}</a>
    </li>
  )
}
