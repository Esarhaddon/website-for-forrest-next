import "../styles/style.css"
import Link from "next/link"
import LogoBlack from "../components/icons/logo-black"
import { useEffect } from "react"
import SocialAndEmail from "./SocialAndEmail"
import { useState } from "react"
import Loading from "../components/Loading"
import { useRouter, Router } from "next/router"
import MobileNavWrapper from "../components/MobileNavWrapper"
import { useModalContext } from "../providers/ModalProvider"

export type GridType = "illustration" | "fine-art" // | "animation"
export type PageType = GridType | "about" | "contact" | "index" | ""

const Layout = (props) => {
  const [isFor, setIsFor] = useState<PageType | undefined>(undefined)
  const [isForSingle, setIsForSingle] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setIsFor(router.asPath.split("/")[1] as PageType)
    setIsForSingle(router.pathname.split("/")[2] === "[singleImage]")
  }, [router.query])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleChangeStart = () => setIsLoading(true)
    const handleChangeComplete = () => setIsLoading(false)
    Router.events.on("routeChangeStart", handleChangeStart)
    Router.events.on("routeChangeComplete", handleChangeComplete)

    return () => {
      Router.events.off("routeChangeStart", handleChangeStart)
      Router.events.off("routerChangeComplete", handleChangeComplete)
    }
  }, [])

  const { hideModal } = useModalContext()

  if (isFor === undefined) {
    return <Loading />
  }

  if (isFor === "index") {
    props.children
  }

  // TO DO: fix this for fine art page
  if (
    (isFor === "illustration" || isFor === "fine-art") &&
    hideModal === false &&
    isLoading
  ) {
    return (
      <div
        className="w-full absolute top-0 right-0"
        style={{ backgroundColor: "rgba(0, 0, 0, .95)", height: "105vh" }}
      />
    )
  }

  return (
    <div>
      {/* div with no other purpose than to prevent scroll bar from flashing while pages load */}
      {isLoading ? (
        <div
          style={{
            height: "105vh",
          }}
        />
      ) : null}
      <div className={`${isLoading ? "fixed w-full h-full top-0 z-50" : ""}`}>
        <MobileNavWrapper
          pinnedNav={
            (isFor === "illustration" || isFor === "about") && !isForSingle
          }
        >
          <div
            className={`
         w-full hidden sm:flex z-40 justify-between items-center align-middle text-gray-900 font-semibold py-4 px-12 md:px-16 md:py-10 lg:py-16`}
          >
            <Link href="/index" as="/">
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
                      isFor === "illustration"
                        ? "text-gray-900"
                        : "text-gray-500"
                    } hover:text-gray-900`}
                  >
                    ILLUSTRATION
                  </a>
                </Link>
              </div>
              <div className="mr-8 font-semibold text-gray-900">/</div>
              <div>
                <Link href="/[grid]" as="/fine-art">
                  <a
                    className={`mr-8 ${
                      isFor === "fine-art" ? "text-gray-900" : "text-gray-500"
                    } hover:text-gray-900`}
                  >
                    FINE ART
                  </a>
                </Link>
              </div>
              <div className="mr-8 font-semibold text-gray-900">/</div>
              <div>
                <Link href="/about">
                  <a
                    className={`mr-8 ${
                      isFor === "about" ? "text-gray-900" : "text-gray-500"
                    } hover:text-gray-900`}
                  >
                    ABOUT
                  </a>
                </Link>
              </div>
              <div className="mr-8 font-semibold text-gray-900">/</div>
              <div>
                <Link href="/contact">
                  <a
                    className={`${
                      isFor === "contact" ? "text-gray-900" : "text-gray-500"
                    } hover:text-gray-900`}
                  >
                    CONTACT
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {props.children}
              <div style={{ paddingTop: "calc(3vw + .75rem)" }}>
                <SocialAndEmail isDark={true} />
                <div
                  className="flex justify-center items-center text-gray-700 leading-none px-4 text-center "
                  style={{
                    marginTop: "calc(3vw + .75rem)",
                    paddingBottom: "calc(3vw + .75rem)",
                  }}
                >
                  Copyright © {new Date().getFullYear()} Forrest Dickison. All
                  rights reserved.
                </div>
              </div>
            </>
          )}
        </MobileNavWrapper>
      </div>
    </div>
  )
}

export default Layout
