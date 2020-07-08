import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../static/icons/forrest-dickison.svg"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Loading from "../components/Loading"
import DownArrow from "../components/icons/down-arrow"
import "scroll-behavior-polyfill"

// TO DO: optimize background images for this page as well?

const Index = () => {
  const [imageLoadCount, setLoadCount] = useState(0)
  const [allowPointerE, setAllowPointerE] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [allowToggle, setAllowToggle] = useState(true)
  const [scrollState, setScrollState] = useState({
    prevTop: 0,
    lastScroll: "up" as "up" | "down",
  })

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
    <div className="w-full absolute top-0 right-0 z-50 h-full">
      <img
        className="hidden"
        src="../static/boy.png"
        onLoad={() => setLoadCount((count) => count + 1)}
      />
      <img
        className="hidden"
        src="../static/toad.png"
        onLoad={() => setLoadCount((count) => count + 1)}
      />
      {/* mobile layout */}
      <div
        className={`${
          allowToggle ? "" : "pointer-events-none"
        } fixed w-full bottom-0 right-0 overflow-hidden h-full sm:hidden bg-white`}
      >
        <div
          className={`absolute right-0 w-screen`}
          onTouchStart={() => setToggle(!toggle)}
          onMouseDown={() => setToggle(!toggle)}
          style={{
            background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
            height: "130vh",
            bottom: toggle ? "-30vh" : "-10vh",
            transition: "bottom 450ms ease-out",
            WebkitTransition: "bottom 450ms ease-out",
          }}
        />
        <div
          className={`absolute right-0 w-screen h-screen`}
          onTouchStart={() => setToggle(!toggle)}
          onMouseDown={() => setToggle(!toggle)}
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
            height: "130vh",
            bottom: toggle ? "-30vh" : 0,
            transition: "bottom 450ms ease-out",
            WebkitTransition: "bottom 450ms ease-out",
          }}
        />
        <div
          className="pointer-events-auto absolute w-screen flex items-center justify-center"
          style={{
            bottom: toggle ? "-60vh" : 0,
            transition: "bottom 450ms ease-out",
            WebkitTransition: "bottom 450ms ease-out",
            height: "30vh",
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{ marginTop: "calc(-1.66vh - 1rem)" }}
          >
            <IndexNav />
          </div>
        </div>
        <BackgroundPlaceholder showPlaceholder={imageLoadCount < 2} />
        <div
          className="sticky max-w-3xl mx-auto px-6 pointer-events-none"
          style={{ top: "30%" }}
        >
          <FDickison className="w-full tex-white" />
          <div
            className={`${
              // for some reason all the animations break on mobile chrome if you try to animate opacity
              toggle && imageLoadCount >= 2 ? "text-white" : "text-transparent"
            }`}
            style={{ transition: "color 325ms ease-out", marginTop: "10vh" }}
          >
            <DownArrow className="mx-auto fill-current h-8 w-8" />
          </div>
        </div>
      </div>
      {/* desktop layout */}
      {/* scaleFactor = (perspective — distance) / perspective */}
      <div
        ref={scrollingElRef}
        onClick={() => {
          if (allowToggle) {
            setToggle(!toggle)
          }
        }}
        onScroll={() => {
          const el = scrollingElRef.current
          const pos = el.scrollTop
          const prevPos = scrollState.prevTop
          if (pos > prevPos + 50) {
            setScrollState({ prevTop: pos, lastScroll: "down" })
          } else if (pos < prevPos - 50) {
            setScrollState({ prevTop: pos, lastScroll: "up" })
          }
        }}
        className={`${
          allowPointerE ? "" : "pointer-events-none"
        } bg-white absolute w-full top-0 right-0 overflow-y-scroll overflow-x-hidden h-full sm:block hidden`}
        style={{
          perspective: "2px",
          perspectiveOrigin: "bottom right",
          minHeight: "25rem",
        }}
      >
        <div className={`${imageLoadCount < 2 ? "hidden" : ""}`}>
          <div
            className="absolute top-0 right-0 w-screen overflow-hidden"
            style={{
              background:
                "url(../static/toad.png) 66.66% calc(10vh + 25%) / cover no-repeat",
              transformOrigin: "bottom right",
              transform: "translateZ(-1px) scale(1.5)",
              height: "130%",
            }}
          />
          <div
            className="absolute top-0 right-0 w-screen"
            style={{
              height: "130%",
              background:
                "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33% 25% / cover no-repeat",
              transformOrigin: "bottom right",
              transform: "translateZ(0)",
            }}
          />
          <div
            className="absolute w-screen flex items-center justify-center"
            style={{
              top: "100%",
              height: "30%",
              transform: "translateZ(1px) scale(.5)",
              transformOrigin: "bottom right",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{ marginTop: "calc(-1.66% - 1rem)" }}
            >
              <IndexNav />
            </div>
          </div>
        </div>
        <BackgroundPlaceholder showPlaceholder={imageLoadCount < 2} />
        <div
          className="sticky max-w-3xl mx-auto px-6"
          style={{ top: "33.33%" }}
        >
          <div className="cursor-pointer">
            <FDickison className="w-full" />
          </div>
          <DownArrow
            className={`${
              scrollState.lastScroll === "up" && imageLoadCount >= 2
                ? "opacity-100 cursor-pointer"
                : "opacity-0"
            } text-white fill-current h-8 w-8 mx-auto`}
            style={{
              transition: "opacity 250ms ease-out",
              marginTop: "10vh",
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Index

interface BackgroundPlaceholderProps {
  showPlaceholder: boolean
}

const BackgroundPlaceholder = ({
  showPlaceholder,
}: BackgroundPlaceholderProps) => {
  const [showLoading, setShowLoading] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (showPlaceholder) {
      timeoutRef.current = setTimeout(() => setShowLoading(true), 250)
    } else {
      clearTimeout(timeoutRef.current)
      setShowLoading(false)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [showPlaceholder])

  return (
    <div
      className={`${
        showPlaceholder ? "bg-teal-500" : "bg-transparent"
      } pointer-events-none absolute h-full top-0 right-0 w-screen text-white`}
      style={{
        transition: "background-color 250ms ease-in-out",
      }}
    >
      {showLoading ? (
        <div
          className="text-white absolute bottom-0"
          style={{
            height: "66.66vh",
          }}
        >
          <Loading />
        </div>
      ) : null}
    </div>
  )
}

const IndexNav = () => (
  <div className="flex flex-col w-full -mt-4">
    <div className="flex justify-center flex-wrap">
      <Link href="/[grid]" as="/illustration">
        <a
          className="text-center mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
          style={{
            transition:
              "color 170ms ease-in-out, background-color 170ms ease-in-out",
          }}
        >
          ILLUSTRATION
        </a>
      </Link>
      <Link href="/about">
        <a
          className="text-center mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
          style={{
            transition:
              "color 170ms ease-in-out, background-color 170ms ease-in-out",
          }}
        >
          ABOUT
        </a>
      </Link>
      <Link href="/contact">
        <a
          className="text-center mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
          style={{
            transition:
              "color 170ms ease-in-out, background-color 170ms ease-in-out",
          }}
        >
          CONTACT
        </a>
      </Link>
    </div>
    <div className="mt-6">
      <SocialAndEmail isDark={false} />
    </div>
  </div>
)
