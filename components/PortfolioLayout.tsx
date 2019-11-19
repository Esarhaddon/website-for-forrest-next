import "../styles/style.css";
import Link from "next/Link";
import InstagramLogo from "../static/icons/001-instagram.svg";
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg";
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg";
import EmailLogo from "../static/icons/004-email.svg";
import TitleText from "../static/title.svg";
import LogoBlack from "../static/icons/logo-black.svg";
import LogoWhite from "../static/icons/logo-white.svg";
import { ReactNode } from "react";
import SocialAndEmail from "./SocialAndEmail";

interface LayoutProps {
  isFor: string;
  children: ReactNode;
}

export default (props: LayoutProps) => (
  <div>
    {props.isFor === "home" ? (
      <div
        className="flex justify-center items-center w-full h-screen absolute top-0 left-0 z-10"
        style={{
          minHeight: "300px",
          pointerEvents: "none"
        }}
      >
        <TitleText
          className="mx-16 text-white fill-current"
          style={{
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
      props.isFor === "fine-art" ||
      props.isFor === "display" ? (
        <div
          className="flex justify-between text-gray-900 off-pl-8 off-pr-12 font-semibold"
          style={{
            marginRight: "calc(5vw + 5px)",
            marginLeft: "calc(5vw + 5px)",
            paddingTop: "calc(2.5vw + 5px)",
            paddingBottom: "2.5vw",
            paddingLeft: "5vw",
            paddingRight: "5vw"
          }}
        >
          <Link href="/index">
            <a
              style={{
                marginTop: "-2.1%",
                marginBottom: "-2.4%",
                marginLeft: "-4.3%",
                marginRight: "-4%"
              }}
            >
              <LogoBlack className="h-32" />
            </a>
          </Link>
          <div className="flex items-center">
            <Link href="/[page]" as="/illustration">
              <a
                className={`mr-8 ${
                  props.isFor === "illustration"
                    ? "text-gray-900"
                    : "text-gray-500"
                } hover:text-gray-900`}
              >
                ILLUSTRATION
              </a>
            </Link>
            <div className="mr-8 font-semibold text-gray-900">/</div>
            <Link href="/[page]" as="/animation">
              <a
                className={`mr-8 ${
                  props.isFor === "animation"
                    ? "text-gray-900"
                    : "text-gray-500"
                } hover:text-gray-900`}
              >
                ANIMATION
              </a>
            </Link>
            <div className="mr-8 font-semibold text-gray-900">/</div>
            <Link href="/[page]" as="/fine-art">
              <a
                className={`mr-8 ${
                  props.isFor === "fine-art" ? "text-gray-900" : "text-gray-500"
                } hover:text-gray-900`}
              >
                FINE ART
              </a>
            </Link>
          </div>
        </div>
      ) : null}
      {props.children}
      {props.isFor === "home" ? (
        <div
          className="foreground absolute w-full left-0 flex items-center justify-center"
          style={{
            height: "5rem",
            bottom: "calc(22vh - 2.5rem)"
          }}
        >
          <Link href="/[page]" as="/illustration">
            <a
              className="mr-12 font-medium border-2 border-solid border-white text-white pt-5 pb-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
              style={{
                transition:
                  "color 170ms ease-in-out, background-color 170ms ease-in-out"
              }}
            >
              WORK
            </a>
          </Link>
          <SocialAndEmail isDark={false} />
        </div>
      ) : null}
      {props.isFor === "illustration" ||
      props.isFor === "animation" ||
      props.isFor === "fine-art" ||
      props.isFor === "display" ? (
        <div>
          <SocialAndEmail isDark={true} />
          <div
            className="flex justify-center items-center text-gray-900"
            style={{
              marginTop: "3vw",
              marginBottom: "3vw"
            }}
          >
            Copyright © 2019 Forrest Dickison
          </div>
        </div>
      ) : null}
    </div>
  </div>
);
