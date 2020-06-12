import React, { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import LogoBlack from "../static/icons/logo-black.svg"
import ExitX from "../static/icons/close.svg"
import Hamburger from "../static/icons/hamburger.svg"

interface MobileNavWrapperProps {
  pinnedNav?: boolean
  children: ReactNode
}

export default (props: MobileNavWrapperProps) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [lastScroll, setLastScroll] = useState<"up" | "down" | undefined>(
    undefined
  )
  const [isIntersecting, setIsIntersecting] = useState(true)
  const [headerIsInitial, setHeaderIsInitial] = useState(true)
  const [animationRunning, setAnimationRunning] = useState(false)
  const [headerPinned, setHeaderPinned] = useState(false)
  const [headerTop, setHeaderTop] = useState<0 | "-7.75rem">(0)

  const { pinnedNav } = props
  useEffect(() => {
    console.log("pinnedNav is", pinnedNav)
  }, [pinnedNav])

  type VoidFunc = () => void
  // TO DO: move this inside the useEffect?
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
      setTimeout(() => {
        shouldWait = false
      }, wait)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", throttledHandleScroll(200))
  }, [])

  // if intersectionObserver isn't supported, than nothing happens and header stays absolutely positioned
  useEffect(() => {
    let observer: IntersectionObserver | undefined = undefined
    const target = document.getElementById("nav-spacer")
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsIntersecting(entries[0].isIntersecting)
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
    setTimeout(() => setAnimationRunning(false), 150)
  }, [headerTop])

  return (
    <div>
      <div
        className={`sm:hidden z-40 right-0 w-full flex justify-between items-center align-middle text-gray-900 font-semibold py-4 bg-white`}
        style={
          showMobileNav
            ? {
                position: "fixed",
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
              }
            : headerPinned && props.pinnedNav
            ? {
                position: "fixed",
                transition: "top .15s linear",
                top: headerTop,
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
              }
            : {
                position: "absolute",
                paddingRight: "calc(5vw + 5px)",
                paddingLeft: "calc(5vw + 5px)",
              }
        }
      >
        <Link href="/index">
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
      ></div>
      <div className={`${showMobileNav ? "hidden" : "block"} sm:block`}>
        {props.children}
      </div>
      <div
        className={`${
          showMobileNav ? "block" : "hidden"
        } fixed sm:hidden top-0 right-0 h-screen w-full bg-white`}
      >
        <div className="z-0 absolute top-0 right-0 flex flex-col items-center justify-center h-full w-full">
          <Link href="/[grid]" as="/illustration">
            <a
              className="leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              ILLUSTRATION
            </a>
          </Link>
          {/* <Link href="/[grid]" as="/animation">
              <a
                className="leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
                onClick={() => setShowMobileNav(false)}
              >
                ANIMATION
              </a>
            </Link>
            <Link href="/[grid]" as="/fine-art">
              <a
                className="leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
                onClick={() => setShowMobileNav(false)}
              >
                FINE ART
              </a>
            </Link> */}
          <Link href="/contact">
            <a
              className="leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              CONTACT
            </a>
          </Link>
          <Link href="/about">
            <a
              className="leading-loose text-4xl font-bold text-gray-900 tracking-wider cursor-pointer"
              onClick={() => setShowMobileNav(false)}
            >
              ABOUT
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
