import React, { ReactNode, useState, useRef, useEffect } from "react"
import Link from "next/link"
import LogoBlack from "../static/icons/logo-black.svg"
import ExitX from "../static/icons/close.svg"
import Hamburger from "../static/icons/hamburger.svg"

interface NavWrapperProps {
  // TO DO: don't think this state needs to be somewhere else
  showMobileNav: boolean
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export default ({
  showMobileNav,
  setShowMobileNav,
  children,
}: NavWrapperProps) => {
  type VoidFunc = () => void
  const [lastScroll, setLastScroll] = useState<"up" | "down" | undefined>(
    undefined
  )
  const [showHeader, setShowHeader] = useState(true)
  const [animationInProgress, setInProgress] = useState(false)

  const getHandleScroll = (wait: number): VoidFunc => {
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
    window.addEventListener("scroll", getHandleScroll(200))
  }, [])

  useEffect(() => {
    if (!animationInProgress) {
      if (lastScroll === "down") {
        setShowHeader(false)
      } else if (lastScroll === "up") {
        setShowHeader(true)
      }
    }
  }, [lastScroll])

  useEffect(() => {
    setInProgress(true)
    setTimeout(() => setInProgress(false), 150)
  }, [showHeader])

  return (
    <div>
      <div
        className={`sm:hidden z-50 fixed right-0 off-top-0 w-full flex justify-between items-center align-middle text-gray-900 font-semibold py-4 bg-white`}
        style={{
          transition: "top .15s linear",
          top: showHeader || showMobileNav ? 0 : "-7.75rem",
          paddingRight: "calc(5vw + 5px)",
          paddingLeft: "calc(5vw + 5px)",
        }}
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
      <div className="block sm:hidden" style={{ height: "7.75rem" }}></div>
      <div
        onScroll={() => console.log("no, I was scrolled!")}
        className={`${showMobileNav ? "hidden" : "block"} sm:block`}
      >
        {children}
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
