import {h, ComponentChildren} from "preact"
import {useState, useRef, useEffect} from "preact/hooks"
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
      <button onClick={() => setOpen(true)}>
        Show Developer Info
      </button>
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
        {sortUnique(props.leechblockAllowPatterns)
          .map((pattern) => "+" + pattern)
          .join("\n")}
      </textarea>
    </div>
  )
}

function sortUnique(unsorted: string[]): string[] {
  const sorted = [...unsorted].sort()
  return sorted.filter((s, i) => s !== sorted[i - 1])
}
