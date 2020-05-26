import React, { ReactNode } from "react"
import Link from "next/link"
import LogoBlack from "../static/icons/logo-black.svg"
import ExitX from "../static/icons/close.svg"

interface NavWrapperProps {
  showMobileNav: boolean
  setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
}

export default ({
  showMobileNav,
  setShowMobileNav,
  children,
}: NavWrapperProps) => {
  return (
    <div>
      <div className={`${showMobileNav ? "hidden" : "block"} sm:block`}>
        {children}
      </div>
      <div
        className={`${
          showMobileNav ? "block" : "hidden"
        } fixed sm:hidden top-0 right-0 h-screen w-full z-50 bg-white`}
      >
        <div
          className={`absolute z-50 right-0 top-0 w-full flex justify-between items-center align-middle text-gray-900 font-semibold py-4`}
          style={{
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
          <ExitX
            className="text-black fill-current cursor-pointer w-4"
            onClick={() => setShowMobileNav(false)}
          />
        </div>
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
