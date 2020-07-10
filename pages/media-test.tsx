import { useState, useEffect, useRef } from "react"

export default () => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">()
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  const elRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const portraitList = window.matchMedia("(orientation: portrait)")
    const initial: "portrait" | "landscape" = portraitList.matches
      ? "portrait"
      : "landscape"
    // you don't need this !
    const landscapeList = window.matchMedia("(orientation: landscape)")
    const el = elRef.current
    const setDimensions = () => {
      setHeight(el.offsetHeight)
      setWidth(el.offsetWidth)
    }
    const setInnerDimensions = (orientation: "portrait" | "landscape") => {
      const { innerWidth, innerHeight } = window
      const bigDimension = innerHeight > innerWidth ? innerHeight : innerWidth
      const smallDimension = innerHeight < innerWidth ? innerHeight : innerWidth

      if (orientation === "landscape") {
        setInnerWidth(bigDimension)
        setInnerHeight(smallDimension)
      } else {
        setInnerWidth(smallDimension)
        setInnerHeight(bigDimension)
      }
    }

    portraitList.addListener((e) => {
      if (e.matches) {
        setOrientation("portrait")
        setDimensions()
        setInnerDimensions("portrait")
      }
    })
    landscapeList.addListener((e) => {
      if (e.matches) {
        setOrientation("landscape")
        setDimensions()
        setInnerDimensions("landscape")
      }
    })

    if (portraitList.matches) {
      setOrientation("portrait")
    } else {
      setOrientation("landscape")
    }
    setDimensions()
    setInnerDimensions(initial)
  }, [])

  useEffect(() => {
    const el = elRef.current
    setHeight(el.offsetHeight)
    setWidth(el.offsetWidth)
  }, [])

  return (
    <div
      ref={elRef}
      className="absolute top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center"
    >
      <div>orientation: {orientation}</div>
      <div>width: {width}</div>
      <div>height: {height}</div>
      <div>inner width: {innerWidth}</div>
      <div>inner height: {innerHeight}</div>
    </div>
  )
}
