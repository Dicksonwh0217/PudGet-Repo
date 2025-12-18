import { useEffect, useState } from "react"

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "home")

  useEffect(() => {
    let raf = 0
    let observer: IntersectionObserver | null = null

    const setup = () => {
      const elements = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[]

      if (elements.length === 0) {
        // try again next frame until DOM is ready
        raf = requestAnimationFrame(setup)
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

          if (visible?.target?.id) setActive(visible.target.id)
        },
        {
          root: null,
          threshold: [0.1, 0.25, 0.4],
          rootMargin: "-20% 0px -60% 0px",
        }
      )

      elements.forEach((el) => observer!.observe(el))
    }

    setup()

    return () => {
      if (raf) cancelAnimationFrame(raf)
      observer?.disconnect()
    }
  }, [ids.join("|")])

  return active
}
