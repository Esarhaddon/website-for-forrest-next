import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../static/icons/forrest-dickison.svg"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import Loading from "../components/Loading"

// TO DO: optimize background images for this page as well?

// (perspective — distance) / perspective = scaleFactor

const Index = () => {
  const [imageLoadCount, setLoadCount] = useState(0)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => setCanScroll(true), 250)
    return () => clearTimeout(timeoutId)
  }, [imageLoadCount])

  return (
    <div className="w-screen h-full top-0 right-0 z-50">
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
      <div className="absolute w-full h-full bg-gray-400 sm:hidden overflow-hidden top-0 right-0 z-50">
        <div
          className="absolute top-0 right-0 w-screen"
          style={{
            background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
            height: "120vh",
          }}
        />
        <div
          className="absolute top-0 right-0 w-screen"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
            height: "120vh",
          }}
        />
        <div
          className="sm:hidden z-50 absolute w-full px-4"
          style={{ top: "33.33%" }}
        >
          <FDickison className="w-full" />
        </div>
        <div
          className="absolute bottom-0 w-full flex items-center justify-center"
          style={{ height: "33.33vh" }}
        >
          <IndexNav />
        </div>
        <BackgroundPlaceholder showPlaceholder={imageLoadCount < 2} />
      </div>
      <div
        className={`${
          canScroll ? "" : "pointer-events-none"
        } absolute w-full top-0 right-0 overflow-y-scroll overflow-x-hidden h-screen sm:block hidden`}
        style={{
          perspective: "2px",
          perspectiveOrigin: "bottom right",
          // WebkitOverflowScrolling: "touch",
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
      /> */}
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
        <div className="text-white">
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
