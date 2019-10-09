import Link from "next/Link";
import InstagramLogo from "../static/icons/001-instagram.svg";
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg";
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg";
import EmailLogo from "../static/icons/004-email.svg";
import TitleText from "../static/title.svg";
import { ReactNode } from "react";

interface LayoutProps {
  isFor: "home" | "work";
  children: ReactNode;
}

export default (props: LayoutProps) => (
  <div>
    {props.isFor === "home" ? (
      <div
        className="flex justify-center w-full absolute top-0 left-0 z-10"
        style={{
          top: "calc(50% - 3rem)",
          pointerEvents: "none"
        }}
      >
        <TitleText
          className="w-auto text-white fill-current"
          style={{
            height: "6rem"
          }}
        />
      </div>
    ) : null}
    <div
      className="relative top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll"
      style={{
        ...(props.isFor === "home"
          ? {
              perspective: "2px",
              perspectiveOrigin: "0 0"
            }
          : null)
      }}
    >
      {props.children}
      {props.isFor === "home" ? (
        <div
          className="foreground absolute w-full left-0 flex items-center justify-center text-white tracking-tighter leading-none"
          style={{
            height: "5rem",
            bottom: "16vh"
          }}
        >
          <Link href="/work">
            <a
              className="border-2 border-solid border-white text-white pt-5 pb-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-black"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              WORK
            </a>
          </Link>
          <div className="flex items-center ml-12 text-white logo-container cursor-pointer">
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
      {props.isFor === "work" ? (
        <div
          className="flex items-center justify-center w-full h-12 text-white logo-container cursor-pointer fixed bottom-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, .5)"
          }}
        >
          <a
            href="https://www.instagram.com/forrestdickison"
            target="_blank"
            className="w-12 pl-2 hover:text-white"
            style={{
              fill: "white",
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
      ) : null}
    </div>
  </div>
);
