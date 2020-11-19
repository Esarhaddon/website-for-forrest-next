import React, { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import LogoBlack from "./icons/logo-black"
import ExitX from "./icons/close"
import Hamburger from "./icons/hamburger"

interface MobileNavWrapperProps {
  pinnedNav?: boolean
  children: ReactNode
}

const MobileNavWrapper = (props: MobileNavWrapperProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [lastScroll, setLastScroll] = useState<"up" | "down" | undefined>(
    undefined
  )
  const [headerIsInitial, setHeaderIsInitial] = useState(true)
  const [animationRunning, setAnimationRunning] = useState(false)
  const [headerPinned, setHeaderPinned] = useState(false)
  const [headerTop, setHeaderTop] = useState<0 | "-7.75rem">(0)

  type VoidFunc = () => void

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined
    const throttledHandleScroll = (wait: number): VoidFunc => {
      let y = 0
      let shouldWait = false
      return () => {
        if (shouldWait) {
          return
        }
        let offset = window.pageYOffset
        if (offset > y) {
          setLastScroll("down")
        } else if (offset < y) {
          setLastScroll("up")
        }
        y = offset
        shouldWait = true
        timeoutId = setTimeout(() => {
          shouldWait = false
        }, wait)
      }
    }

    const listener = throttledHandleScroll(200)
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
      clearTimeout(timeoutId)
    }
  }, [])

  // if intersectionObserver isn't supported, than nothing happens and header stays absolutely positioned
  useEffect(() => {
    let observer: IntersectionObserver | undefined = undefined
    const target = document.getElementById("nav-spacer")
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (Math.round(entry.intersectionRatio) === 1) {
          if (entry.isIntersecting) {
            setHeaderIsInitial(true)
            setHeaderPinned(false)
            setLastScroll(undefined)
            setHeaderTop("-7.75rem")
          }
        } else if (Math.round(entry.intersectionRatio) === 0) {
          if (!entry.isIntersecting) {
            setHeaderIsInitial(false)
            setHeaderPinned(true)
          }
        }
      },
      { threshold: [0, 1] }
    )
    observer.observe(target)
    return () => observer.unobserve(target)
  }, [])

  // hide or show pinned header based on scroll direction
  useEffect(() => {
    if (!animationRunning && !headerIsInitial) {
      if (lastScroll === "down") {
        setHeaderTop("-7.75rem")
      } else if (lastScroll === "up") {
        setHeaderTop(0)
      }
    }
  }, [lastScroll, animationRunning, headerIsInitial])

  // whenever headerTop changes, set a timeout to keep track of when header animation is finished
  useEffect(() => {
    setAnimationRunning(true)
    const timeoutId = setTimeout(() => setAnimationRunning(false), 150)
    return () => clearTimeout(timeoutId)
  }, [headerTop])

  return (
    <div>
      <div
        className={`sm:hidden z-40 right-0 w-full flex justify-between items-center align-middle text-gray-900 font-semibold py-4`}
        style={
          showMobileNav
            ? {
                position: "fixed",
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
                backgroundColor: "transparent",
              }
            : headerPinned && props.pinnedNav
            ? {
                position: "fixed",
                transition: "top .15s linear",
                top: headerTop,
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
                backgroundColor: "white",
              }
            : {
                position: "absolute",
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
                backgroundColor: "white",
              }
        }
      >
        <Link href="/index" as="/">
          <a
            style={{
              marginTop: "-1rem",
              marginBottom: "-1.25rem",
              marginLeft: "-3rem",
              marginRight: "-3rem",
            }}
            onClick={() => setShowMobileNav(false)}
          >
            <LogoBlack className="h-32" />
          </a>
        </Link>
        {showMobileNav ? (
          <ExitX
            className="text-black fill-current cursor-pointer w-4"
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <Hamburger
            className="sm:hidden w-6 cursor-pointer"
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </div>
      <div
        id="nav-spacer"
        className={`block sm:hidden`}
        style={{ height: "7.75rem" }}
      />
      <div className={`${showMobileNav ? "hidden" : "block"} sm:block`}>
        {props.children}
      </div>
      <div
        className={`${
          showMobileNav ? "block" : "hidden"
        } fixed sm:hidden top-0 right-0 h-screen w-full z-50 pointer-events-none`}
      >
        <div className="absolute top-0 right-0 flex flex-col items-center justify-center h-full w-full">
          <Link href="/[grid]" as="/illustration">
            <a
              className="pointer-events-auto leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              ILLUSTRATION
            </a>
          </Link>
          {/* <Link href="/[grid]" as="/animation">
              <a
                className="pointer-events-auto leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
                onClick={() => setShowMobileNav(false)}
              >
                ANIMATION
              </a>
            </Link>
            <Link href="/[grid]" as="/fine-art">
              <a
                className="pointer-events-auto leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
                onClick={() => setShowMobileNav(false)}
              >
                FINE ART
              </a>
            </Link> */}
          <Link href="/contact">
            <a
              className="pointer-events-auto leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              CONTACT
            </a>
          </Link>
          <Link href="/about">
            <a
              className="pointer-events-auto leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              ABOUT
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default MobileNavWrapper;
