import "./test-results.css"

if ((import.meta as any).env.DEV) {
  // @ts-expect-error property 'glob' does not exist on type ImportMeta
  import.meta.glob("./**/*.test.*", {eager: true})
  import("@benchristel/taste")
    .then(({getAllTests, runTests, formatTestResultsAsText}) =>
      runTests(getAllTests()).then(formatTestResultsAsText),
    )
    .then((results: string) => {
      const resultsElement = document.getElementById("test-results")
      resultsElement!.innerText = results
      resultsElement!.setAttribute(
        "class",
        results.includes("fail") ? "fail" : "pass",
      )
    })
    .catch(console.error)
}
