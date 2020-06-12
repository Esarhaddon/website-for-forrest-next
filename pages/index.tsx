import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../static/icons/forrest-dickison.svg"
import Link from "next/link"

// TO DO: optimize background images for this page as well?

// (perspective — distance) / perspective = scaleFactor

const Index = () => {
  return (
    <div className="absolute h-full w-full top-0 right-0">
      <div className="absolute w-full h-full bg-gray-400 sm:hidden overflow-hidden">
        <div
          className="absolute top-0 right-0 w-screen h-full"
          style={{
            background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
            height: "120vh",
          }}
        />
        <div
          className="w-full h-full absolute top-0 right-0"
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
            height: "120vh",
          }}
        ></div>
        <div className="absolute w-full px-4" style={{ top: "33.33vh" }}>
          <FDickison className="w-full" />
        </div>
        <div
          className="absolute bottom-0 w-full flex items-center justify-center"
          style={{ height: "33.33vh" }}
        >
          <IndexNav />
        </div>
      </div>
      <div
        className="absolute w-full top-0 right-0 overflow-y-scroll overflow-x-hidden h-screen sm:block hidden"
        style={{
          perspective: "2px",
          perspectiveOrigin: "bottom right",
          WebkitOverflowScrolling: "touch",
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
          className="absolute top-0 right-0 w-full h-screen"
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
          >
            <div
              className="absolute bottom-0 w-full flex items-center justify-center"
              style={{ height: "33.33vh" }}
            />
          </div>
          <div />
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
        <div
          className="sticky max-w-3xl mx-auto px-4"
          style={{ top: "33.33vh" }}
        >
          <FDickison className="w-full" />
        </div>
      </div>
      {/* some guides just for development */}
      <div
        className="w-full absolute top-0 right-0 border-b border-solid border-black pointer-events-none"
        style={{ height: "33.33%" }}
      />
      <div
        className="w-full absolute right-0 border-b border-solid border-black pointer-events-none"
        style={{ height: "33.33%", top: "33.33%" }}
      />
      <div
        className="h-full top-0 right-0 absolute border-l border-solid border-black pointer-events-none"
        style={{ width: "50vw" }}
      />
    </div>
  )
}

export default Index

const IndexNav = () => (
  <div className="flex flex-col w-full -mt-4">
    <div className="flex justify-center flex-wrap">
      <Link href="/[grid]" as="/illustration">
        <a>
          <div className="text-center">
            <button
              type="button"
              className="mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
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
              className="mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
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
              className="mx-2 mt-4 sm:mx-4 border-2 focus:bg-white focus:text-black border-solid border-white text-white py-2 px-3 sm:py-4 sm:px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
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
      {/* TO DO: get rid of email prop */}
      <SocialAndEmail isDark={false} includesEmailOnMobile={false} />
    </div>
  </div>
)
