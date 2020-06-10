import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../static/icons/forrest-dickison.svg"
import Link from "next/link"

// TO DO: optimize background images for this page as well?

// (perspective — distance) / perspective = scaleFactor

const Index = () => {
  return (
    <div>
      <div
        className="relative overflow-y-scroll overflow-x-hidden h-screen"
        style={{ perspective: "2px", perspectiveOrigin: "bottom right" }}
      >
        <div
          className="absolute top-0 right-0 w-full overflow-hidden"
          style={{
            transformOrigin: "bottom right",
            transform: "translateZ(-1.5px) scale(1.75)",
            height: "115vh",
            marginTop: "15vh",
          }}
        >
          <div
            className="absolute top-0 right-0 w-full bg-green-500"
            style={{
              background:
                "url(../static/toad.png) 66.66%  25% / cover no-repeat",
              height: "130vh",
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
            className="w-full absolute top-0 right-0"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
              height: "130vh",
            }}
          />
        </div>
        {/* this could also be absolutely positioned further up the tree? */}
        <div className="sticky max-w-3xl mx-auto px-4" style={{ top: "33vh" }}>
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

{
  /* <div className="absolute bottom-0 sm:mb-16 mb-4 flex flex-col w-full">
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
                </div> */
}
