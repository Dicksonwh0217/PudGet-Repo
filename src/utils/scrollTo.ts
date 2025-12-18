export function scrollTo(id: string) {
  history.replaceState(null, "", `#${id}`)
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}
