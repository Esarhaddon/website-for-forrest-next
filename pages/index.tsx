import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import { useState, useEffect } from "react"
import nextCookie from "next-cookies"
import cookie from "js-cookie"
import FD from "../static/forrest-dickison.svg"

const Index = props => {
  const [scrollable, setScrollable] = useState(false)
  const indexHasLoaded = props.indexHasLoaded
    ? parseInt(props.indexHasLoaded, 10)
    : 0

  cookie.set("indexHasLoaded", indexHasLoaded + 1)

  useEffect(() => {
    window.addEventListener("unload", () => {
      cookie.remove("indexHasLoaded")
    })
  })

  if (!indexHasLoaded) {
    useEffect(() => {
      setTimeout(() => setScrollable(true), 1000)
    })
  } else if (!scrollable) {
    setScrollable(true)
  }

  return (
    <div>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "url(../static/toad.png) 66.66%  25% / cover no-repeat"
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat"
        }}
      />
      {/* <div
        style={{ top: "calc(33vh - 2.5rem)" }}
        className="absolute w-full flex justify-center"
      > */}
      <div className="relative max-w-3xl mx-auto px-4" style={{ top: "33vh" }}>
        <FD className="w-full" />
      </div>
      {/* </div> */}

      <div className="absolute bottom-0 sm:mb-16 mb-4 flex flex-col w-full">
        <div className="flex flex-col sm:flex sm:flex-row sm:justify-center sm:flex-wrap">
          <div className="text-center">
            <button
              type="button"
              className="mx-4 border-2 border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              ILLUSTRATION
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="mx-4 border-2 border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              ABOUT
            </button>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="hidden sm:inline mx-4 border-2 border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest mt-6 leading-none cursor-pointer hover:bg-white hover:text-gray-900"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
        <div className="mt-6">
          <SocialAndEmail isDark={false} />
        </div>
      </div>
    </div>
  )
}

Index.getInitialProps = async ctx => {
  const { indexHasLoaded } = nextCookie(ctx)
  return {
    indexHasLoaded
  }
}

export default Index
