import "../styles/style.css"
import Link from "next/link"
import LogoBlack from "../static/icons/logo-black.svg"
import { useEffect } from "react"
import SocialAndEmail from "./SocialAndEmail"
import { useState } from "react"
import Loading from "../components/Loading"
import FD from "../static/icons/forrest-dickison.svg"
import { useRouter, Router } from "next/router"
import MobileNavWrapper from "../components/MobileNavWrapper"

export type GridType = "animation" | "illustration" | "fine art"

export type PageType = GridType | "about" | "contact" | "index"

export default (props) => {
  // TO DO: don't use index as default value; it causes index page flash on relaod for any other page
  const [isFor, setIsFor] = useState<PageType | undefined>(undefined)

  const router = useRouter()
  useEffect(() => {
    setIsFor(router.asPath.split("/")[1] as PageType)
  }, [router.query])
  const [isLoading, setIsLoading] = useState(false)

  Router.events.on("routeChangeStart", () => setIsLoading(true))
  Router.events.on("routeChangeComplete", () => setIsLoading(false))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isLoading])

  // TO DO: make index its own page and just return that
  if (isFor === "index") {
    return (
      <div>
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
          }}
        />
        <div
          className="relative max-w-3xl mx-auto px-4"
          style={{ top: "33vh" }}
        >
          <FD className="w-full" />
        </div>
        <div className="absolute bottom-0 sm:mb-16 mb-4 flex flex-col w-full">
          <div className="flex flex-col sm:flex sm:flex-row sm:justify-center sm:flex-wrap">
            <Link href="/[grid]" as="/illustration">
              <a>
                <div className="text-center">
                  <button
                    type="button"
                    className="mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
                    style={{
                      transition:
                        "color 170ms ease-in-out, background-color 170ms ease-in-out",
                    }}
                  >
                    ILLUSTRATION
                  </button>
                </div>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <div className="text-center">
                  <button
                    type="button"
                    className="mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
                    style={{
                      transition:
                        "color 170ms ease-in-out, background-color 170ms ease-in-out",
                    }}
                  >
                    ABOUT
                  </button>
                </div>
              </a>
            </Link>
            <div className="text-center">
              <Link href="/contact">
                <a>
                  <button
                    type="button"
                    className="hidden sm:inline mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
                    style={{
                      transition:
                        "color 170ms ease-in-out, background-color 170ms ease-in-out",
                    }}
                  >
                    CONTACT
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-6">
            <SocialAndEmail isDark={false} includesEmailOnMobile={true} />
          </div>
        </div>
      </div>
    )
  }

  return (
    // this will have to change when pages for fine art etc. are added
    <MobileNavWrapper pinnedNav={isFor === "illustration"}>
      <div>
        <div
          className={`
         hidden sm:flex z-40 justify-between items-center align-middle text-gray-900 font-semibold py-4 px-12 md:px-16 md:py-10 lg:py-16`}
        >
          <Link href="/index">
            <a
              style={{
                marginTop: "-1rem",
                marginBottom: "-1.25rem",
                marginLeft: "-3rem",
                marginRight: "-3rem",
              }}
            >
              <LogoBlack className="h-32" />
            </a>
          </Link>
          <div className="flex items-center justify-center">
            <div>
              <Link href="/[grid]" as="/illustration">
                <a
                  className={`mr-8 ${
                    isFor === "illustration" ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  ILLUSTRATION
                </a>
              </Link>
            </div>
            <div className="mr-8 font-semibold text-gray-900">/</div>
            <div>
              <Link href="/contact">
                <a
                  className={`mr-8 ${
                    isFor === "contact" ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  CONTACT
                </a>
              </Link>
            </div>
            <div className="mr-8 font-semibold text-gray-900">/</div>
            <div>
              <Link href="/about">
                <a
                  className={`${
                    isFor === "about" ? "text-gray-900" : "text-gray-500"
                  } hover:text-gray-900`}
                >
                  ABOUT
                </a>
              </Link>
            </div>
            {/* <div className="mr-8 font-semibold text-gray-900">/</div>
          <div>
          <Link href="/[grid]" as="/animation">
            <a
              className={`mr-8 ${
                isFor === "animation" ? "text-gray-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              ANIMATION
            </a>
          </Link>
          </div>
          <div className="mr-8 font-semibold text-gray-900">/</div>
          <div>
          <Link href="/[grid]" as="/fine-art">
            <a
              className={`${
                isFor === "fine-art" ? "text-gray-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              FINE ART
            </a>
          </Link>
          </div> */}
          </div>
        </div>
        {isLoading ? <Loading /> : props.children}
        <div style={{ paddingTop: "calc(3vw + .75rem)" }}>
          <SocialAndEmail isDark={true} includesEmailOnMobile={false} />
          <div
            className="flex justify-center items-center text-gray-700 leading-none "
            style={{
              marginTop: "calc(3vw + .75rem)",
              marginBottom: "calc(3vw + .75rem)",
            }}
          >
            Copyright © 2019 Forrest Dickison
          </div>
        </div>
      </div>
    </MobileNavWrapper>
  )
}
