import { useEffect, useState } from "react"

type Breakpoint = "" | "md" | "lg"

const LayoutPaddingContainer = (props: any) => {
  const [winHeight, setWinHeight] = useState(0)
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("")

  useEffect(() => {
    const portrailList = matchMedia("(orientation: portrait)")
    const landscapeList = matchMedia("(orientation: landscape)")
    const baseList = matchMedia("(max-width: 767px)")
    const mdList = matchMedia("(min-width: 768px) and (max-width: 1023px)")
    const lgList = matchMedia("(min-width: 1024px)")

    if (mdList.matches) {
      setBreakpoint("md")
    } else if (lgList.matches) {
      setBreakpoint("lg")
    }

    let timeout: NodeJS.Timeout = undefined
    const genericListener = () => {
      clearTimeout(timeout)
      timeout = setTimeout(
        () => setWinHeight(window.document.documentElement.offsetHeight),
        100
      )
    }

    const getBreakpointListener = (breakpoint: Breakpoint) => {
      return (e: MediaQueryListEvent) => {
        if (e.matches) {
          setBreakpoint(breakpoint)
        }
      }
    }
    const baseListener = getBreakpointListener("")
    const mdListener = getBreakpointListener("md")
    const lgListener = getBreakpointListener("lg")

    setWinHeight(window.document.documentElement.offsetHeight)

    portrailList.addListener(genericListener)
    landscapeList.addListener(genericListener)
    baseList.addListener(baseListener)
    mdList.addListener(mdListener)
    lgList.addListener(lgListener)
    window.addEventListener("resize", genericListener)

    return () => {
      portrailList.removeListener(genericListener)
      landscapeList.removeListener(genericListener)
      baseList.removeListener(baseListener)
      mdList.removeListener(mdListener)
      lgList.removeListener(lgListener)
      window.removeEventListener("resize", genericListener)
    }
  }, [])

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        minHeight: winHeight
          ? `calc(${winHeight}px - 9vw - 5rem - ${
              breakpoint === "lg" ? 13.75 : breakpoint === "md" ? 10.75 : 7.75
            }rem)`
          : "100vh",
      }}
    >
      {props.children}
    </div>
  )
};

export default LayoutPaddingContainer;
