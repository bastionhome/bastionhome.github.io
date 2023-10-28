import {h, ComponentChildren} from "preact"
import {useState, useRef, useEffect} from "preact/hooks"
import {Button} from "./Button"
import "./DevInfoPane.less"

export function DevInfoPaneOpener(props: {
  children: ComponentChildren
}) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef(null as null | HTMLDialogElement)

  useEffect(() => {
    if (!open) return
    function handleClosed() {
      setOpen(false)
    }
    const dialog = dialogRef.current
    dialog?.addEventListener("close", handleClosed)
    dialog?.showModal()
    return () => dialog?.removeEventListener("close", handleClosed)
  }, [open])

  return (
    <div class="dev-info-pane-opener">
      <Button onClick={() => setOpen(true)}>
        Show Developer Info
      </Button>
      {open && <dialog ref={dialogRef}>{props.children}</dialog>}
    </div>
  )
}

export function DevInfoPane(props: {
  leechblockAllowPatterns: Array<string>
}) {
  return (
    <div class="dev-info-pane">
      <label for="leechblock-config">LeechBlock Config</label>
      <textarea id="leechblock-config">
        {"*\n"}
        {props.leechblockAllowPatterns
          .map((pattern) => "+" + pattern)
          .join("\n")}
      </textarea>
    </div>
  )
}
