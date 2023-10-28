import {h} from "preact"
import "./Button.less"

type Props = {
  children: string
  onClick: () => unknown
}

export function Button(props: Props) {
  return <button class="raised-button" {...props} />
}
