import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../components/icons/forrest-dickison"
import { useState, useEffect, useRef } from "react"
import Loading from "../components/Loading"
import Head from "next/head"
import { useImgOnLoad } from "../hooks/useImgOnLoad"

export default function Index() {
  const [imageLoadCount, setLoadCount] = useState(0)
  const [allowPointerE, setAllowPointerE] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [allowToggle, setAllowToggle] = useState(true)
  const [scrollState, setScrollState] = useState({
    prevTop: 0,
    lastScroll: "up" as "up" | "down",
  })

  const handleLoad = () => setLoadCount((count) => count + 1)
  const img1 = useImgOnLoad(handleLoad)
  const img2 = useImgOnLoad(handleLoad)

  const scrollingElRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const timeoutId = setTimeout(() => setAllowPointerE(true), 250)
    return () => clearTimeout(timeoutId)
  }, [imageLoadCount])

  useEffect(() => {
    setAllowToggle(false)
    const timeout = setTimeout(() => setAllowToggle(true), 450)
    return () => clearTimeout(timeout)
  }, [toggle])

  useEffect(() => {
    const el = scrollingElRef.current
    if (el) {
      el.scrollTo({
        top: el.scrollHeight * ((!toggle as unknown) as number),
        behavior: "smooth",
      })
    }
  }, [toggle])

  return (
    <div
      className="top-0 left-0 absolute h-full w-full bg-black flex flex-col items-center justify-center"
      style={{
        minHeight: "410px",
      }}
    >
      <FDickison className="px-4 max-w-full" style={{ maxHeight: "5rem" }} />
      <p className="text-white tracking-wide sm:tracking-wider text-base sm:text-xl my-8 sm:my-10">
        coming soon
      </p>
      <a
        className="text-white border-2 border-solid border-white py-2 sm:py-3 px-4 sm:px-5 text-sm cursor-pointer hover:bg-white hover:text-black"
        style={{
          letterSpacing: ".2rem",
          transition:
            "color 170ms ease-in-out, background-color 170ms ease-in-out",
        }}
      >
        MONTANA GALLERY
      </a>
      <div
        className="absolute mx-auto bottom-0 pb-10 sm:pb-16"
        style={
          {
            // bottom: "4rem",
          }
        }
      >
        <SocialAndEmail isDark={false} />
      </div>
    </div>
  )
}
