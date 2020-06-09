import "../styles/style.css"
import SocialAndEmail from "../components/SocialAndEmail"
import FD from "../static/icons/forrest-dickison.svg"
import Link from "next/link"

// TO DO: optimize background images for this page as well?

const Index = () => {
  return (
    <div
      className="relative overflow-y-scroll overflow-x-hidden h-screen border border-solid border-black"
      style={{ perspective: "1px", perspectiveOrigin: "bottom right" }}
    >
      <div
        className="relative w-screen pt-16"
        style={{
          transformOrigin: "bottom right",
          transform: "translateZ(-1px) scale(2)",
        }}
      >
        <div
          className="h-screen w-full bg-green-500 flex items-center justify-center"
          style={{
            background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
          }}
        />
      </div>
      <div
        className="absolute top-0 right-0 w-full h-screen border border-solid border-black flex items-center justify-center bg-gray-500"
        style={{
          opacity: 0.5,
          background:
            "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
          transformOrigin: "0 0",
          transform: "translateZ(0)",
        }}
      />
    </div>
  )
}

export default Index

// <div className="absolute w-full h-full top-0 right-0 z-50">
//   <div
//     className="absolute top-0 left-0 w-full h-full"
//     style={{
//       background: "url(../static/toad.png) 66.66%  25% / cover no-repeat",
//     }}
//   />
//   <div
//     className="absolute top-0 left-0 w-full h-full"
//     style={{
//       background:
//         "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/boy.png) 33.33%  25% / cover no-repeat",
//     }}
//   />
//   <div className="relative max-w-3xl mx-auto px-4" style={{ top: "33vh" }}>
//     <FD className="w-full" />
//   </div>
// </div>

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
