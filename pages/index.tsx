import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../static/icons/forrest-dickison.svg"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Loading from "../components/Loading"

// TO DO: optimize background images for this page as well?

const Index = () => {
  const [imageLoadCount, setLoadCount] = useState(0)
  const [allowPointerE, setAllowPointerE] = useState(false)
  const [lastScroll, setLastScroll] = useState<"up" | "down">("up")
  const [allowAnimate, setAllowAnimate] = useState(true)

  const [offsetHeight, setOffsetHeight] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)

  const scrollingEl = useRef<HTMLDivElement>()
  const elToObserve = useRef<HTMLDivElement>()
  const inner = useRef<HTMLDivElement>()
  const outer = useRef<HTMLDivElement>()

  useEffect(() => {
    setOffsetHeight(inner.current.offsetHeight)
    setScrollHeight(outer.current.offsetHeight)
  }, [])

  useEffect(() => {
    const timeoutId = setTimeout(() => setAllowPointerE(true), 250)
    return () => clearTimeout(timeoutId)
  }, [imageLoadCount])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const ratio = Math.round(entries[0].intersectionRatio)
        if (allowAnimate) {
          setAllowAnimate(false)
          if (ratio === 0) {
            setLastScroll("down")
          } else if (ratio === 1) {
            setLastScroll("up")
          }
          setTimeout(() => setAllowAnimate(true), 500)
        }
      },
      {
        root: scrollingEl.current,
        threshold: [0, 1],
      }
    )
    observer.observe(elToObserve.current)

    return () => observer.unobserve(elToObserve.current)
  }, [allowAnimate])

  return (
    <>
      <div
        ref={inner}
        className="absolute border border-solid border-red-500 w-full h-full"
      />
      <div
        ref={outer}
        className="absolute border border-solid border-red-500 w-full h-screen"
      ></div>
      <div className="w-full absolute top-0 right-0 z-50">
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
          ref={scrollingEl}
          className={`${
            allowPointerE ? "" : "pointer-events-none"
          } absolute top-0 right-0 w-full h-screen overflow-y-scroll`}
          style={{
            zIndex: -100,
          }}
        >
          <div ref={elToObserve} style={{ height: "1%" }} />
          <div
            style={{
              height: "101%",
            }}
          />
        </div>
        <div
          className="pointer-events-none fixed w-full right-0 overflow-hidden h-screen sm:hidden"
          style={{
            top: lastScroll === "up" ? 0 : offsetHeight - scrollHeight,
            transition: "top 450ms ease-out",
          }}
        >
          <div
            className="absolute right-0 w-screen overflow-hidden"
            style={{
              background:
                "url(../static/toad.png) 66.66%  25% / cover no-repeat",
              height: "130vh",
              top: lastScroll === "up" ? 0 : "-20vh",
              transition: "top 450ms ease-out",
            }}
          />
          <div
            className="absolute right-0 w-screen h-screen"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
              height: "130vh",
              top: lastScroll === "up" ? 0 : "-30vh",
              transition: "top 450ms ease-out",
            }}
          />
          <div
            className="pointer-events-auto absolute w-screen flex items-center justify-center"
            style={{
              top: lastScroll === "up" ? "120vh" : "70vh",
              transition: "top 450ms ease-out",
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
            className="sticky max-w-3xl mx-auto px-6"
            style={{ top: "33.33vh" }}
          >
            <FDickison className="w-full" />
          </div>
        </div>
        {/* desktop layout */}
        {/* scaleFactor = (perspective — distance) / perspective */}
        <div
          className={`${
            allowPointerE ? "" : "pointer-events-none"
          } absolute w-full top-0 right-0 overflow-y-scroll overflow-x-hidden h-screen sm:block hidden`}
          style={{
            perspective: "2px",
            perspectiveOrigin: "bottom right",
          }}
        >
          <div
            className="absolute top-0 right-0 w-screen overflow-hidden"
            style={{
              transformOrigin: "bottom right",
              transform: "translateZ(-1px) scale(1.5)",
              height: "130vh",
            }}
          >
            <div
              className="absolute top-0 right-0 w-screen"
              style={{
                background:
                  "url(../static/toad.png) 66.66%  25% / cover no-repeat",
                height: "130vh",
                marginTop: "10vh",
              }}
            />
          </div>
          <div
            className="absolute top-0 right-0 w-screen h-screen"
            style={{
              transformOrigin: "bottom right",
              transform: "translateZ(0)",
            }}
          >
            <div
              className="w-screen absolute top-0 right-0"
              style={{
                background:
                  "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
                height: "130vh",
              }}
            />
          </div>
          <div
            className="absolute w-screen flex items-center justify-center"
            style={{
              top: "100%",
              height: "30vh",
              transform: "translateZ(1px) scale(.5)",
              transformOrigin: "bottom right",
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
            className="sticky max-w-3xl mx-auto px-6"
            style={{ top: "33.33vh" }}
          >
            <FDickison className="w-full" />
          </div>
        </div>
        {/* some guides just for development */}
        {/* <div
        className="w-full absolute top-0 right-0 border-b border-solid border-black pointer-events-none z-50"
        style={{ height: "33.33%" }}
      />
      <div
        className="w-full absolute right-0 border-b border-solid border-black pointer-events-none z-50"
        style={{ height: "33.33%", top: "33.33%" }}
      />
      <div
        className="h-full top-0 right-0 absolute border-l border-solid border-black pointer-events-none z-50"
        style={{ width: "50vw" }}
      /> */}{" "}
      </div>
    </>
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
          className="text-white"
          style={
            {
              // height: '66.66%'
            }
          }
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
