import Link from "next/Link";
import InstagramLogo from "../static/icons/001-instagram.svg";
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg";
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg";
import EmailLogo from "../static/icons/004-email.svg";
import TitleText from "../static/title.svg";
import { ReactNode } from "react";

interface LayoutProps {
  isFor: "home" | "illustration" | "animation" | "fine art";
  children: ReactNode;
}

export default (props: LayoutProps) => (
  <div>
    {props.isFor === "home" ? (
      <div
        className="flex justify-center w-full h-screen absolute top-0 left-0 z-10"
        style={{
          minHeight: "300px",
          // top: "calc(50% - 3rem)",
          pointerEvents: "none"
        }}
      >
        <TitleText
          className="w-auto text-white fill-current absolute"
          style={{
            top: "calc(50% - 3rem)",
            height: "6rem"
          }}
        />
      </div>
    ) : null}
    <div
      className="relative top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll"
      style={{
        minHeight: "300px",
        ...(props.isFor === "home"
          ? {
              perspective: "2px",
              perspectiveOrigin: "0 0"
            }
          : null)
      }}
    >
      {props.isFor === "illustration" ||
      props.isFor === "animation" ||
      props.isFor === "fine art" ? (
        <div
          className="flex justify-end text-gray-800 pr-12 font-semibold"
          style={{
            paddingTop: "5vw",
            paddingBottom: "1vw",
            marginRight: "5vw"
          }}
        >
          <Link href="/illustration">
            <a
              className={`mr-3 ${
                props.isFor === "illustration"
                  ? "text-gray-700"
                  : "text-gray-500"
              } hover:text-gray-700`}
            >
              ILLUSTRATION
            </a>
          </Link>
          <div className="mr-3 font-semibold text-gray-800">/</div>
          <Link href="/animation">
            <a
              className={`mr-3 ${
                props.isFor === "animation" ? "text-gray-700" : "text-gray-500"
              } hover:text-gray-700`}
            >
              ANIMATION
            </a>
          </Link>
          <div className="mr-3 font-semibold text-gray-800">/</div>
          <Link href="/fine-art">
            <a
              className={`mr-3 ${
                props.isFor === "fine art" ? "text-gray-700" : "text-gray-500"
              } hover:text-gray-700`}
            >
              FINE ART
            </a>
          </Link>
        </div>
      ) : null}
      {props.children}
      {props.isFor === "home" ? (
        <div
          className="foreground absolute w-full left-0 flex items-center justify-center text-white tracking-tighter leading-none"
          style={{
            height: "5rem",
            // bottom: "16vh"
            bottom: "calc(22vh - 2.5rem)"
          }}
        >
          <Link href="/illustration">
            <a
              className="border-2 border-solid border-white text-white pt-5 pb-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-800"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              WORK
            </a>
          </Link>
          <div className="flex items-center ml-12 text-white logo-container-white cursor-pointer">
            <a
              href="https://www.instagram.com/forrestdickison"
              target="_blank"
              className="w-12 pl-2 hover:text-white"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <InstagramLogo className="h-8 w-8 fill-current" />
            </a>
            <div
              className="w-12 pl-2 hover:text-white"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <FacebookLogo className="h-8 w-8 fill-current" />
            </div>
            <div
              className="w-12 pl-2 hover:text-white"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <TwitterLogo className="h-8 w-8 fill-current" />
            </div>
            <div
              className="w-12 pl-2 hover:text-white"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <a href="mailto:fddickison@gmail.com" target="_blank">
                <EmailLogo className="h-8 w-8 fill-current" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
      {props.isFor === "illustration" ||
      props.isFor === "animation" ||
      props.isFor === "fine art" ? (
        <div>
          <div className="logo-container-black text-gray-900 flex items-center justify-center cursor-pointer w-full">
            <a
              href="https://www.instagram.com/forrestdickison"
              target="_blank"
              className="w-12 pl-2 hover:text-gray-900"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <InstagramLogo className="h-8 w-8 fill-current" />
            </a>
            <div
              className="w-12 pl-2 hover:text-gray-900"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <FacebookLogo className="h-8 w-8 fill-current" />
            </div>
            <div
              className="w-12 pl-2 hover:text-gray-900"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <TwitterLogo className="h-8 w-8 fill-current" />
            </div>
            <div
              className="w-12 pl-2 hover:text-gray-900"
              style={{
                transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
              }}
            >
              <a href="mailto:fddickison@gmail.com" target="_blank">
                <EmailLogo className="h-8 w-8 fill-current" />
              </a>
            </div>
          </div>
          <div
            className="flex justify-center underline text-gray-800"
            style={{
              marginTop: "2.5vw",
              marginBottom: "1vw"
            }}
          >
            (C) 2019 by Forrest Dickison
          </div>
        </div>
      ) : null}
    </div>
  </div>
);
