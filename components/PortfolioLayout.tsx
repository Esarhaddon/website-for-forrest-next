import "../styles/style.css";
import Link from "next/Link";
import LogoBlack from "../static/icons/logo-black.svg";
import { ReactNode } from "react";
import SocialAndEmail from "./SocialAndEmail";
import Hamburger from "../static/icons/hamburger.svg";

interface LayoutProps {
  isFor: string;
  children: ReactNode;
}

export default (props: LayoutProps) => (
  <div className="relative top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll">
    <div
      className="flex  sm:static sticky z-50 top-0 justify-between items-center text-gray-900 font-semibold py-0 sm:px-0 sm:py-4 md:px-16 md:py-16"
      style={{
        marginRight: "calc(5vw + 5px)",
        marginLeft: "calc(5vw + 5px)",
        marginTop: "5px"
      }}
    >
      <Link href="/index">
        <a
          style={{
            marginTop: "-1rem",
            marginBottom: "-1.25rem",
            marginLeft: "-3rem",
            marginRight: "-3rem"
          }}
        >
          <LogoBlack className="h-32" />
        </a>
      </Link>
      <div className="sm:flex hidden items-center">
        <Link href="/[page]" as="/illustration">
          <a
            className={`mr-8 ${
              props.isFor === "illustration" ? "text-gray-900" : "text-gray-500"
            } hover:text-gray-900`}
          >
            ILLUSTRATION
          </a>
        </Link>
        <div className="mr-8 font-semibold text-gray-900">/</div>
        <Link href="/[page]" as="/animation">
          <a
            className={`mr-8 ${
              props.isFor === "animation" ? "text-gray-900" : "text-gray-500"
            } hover:text-gray-900`}
          >
            ANIMATION
          </a>
        </Link>
        <div className="mr-8 font-semibold text-gray-900">/</div>
        <Link href="/[page]" as="/fine-art">
          <a
            className={`${
              props.isFor === "fine-art" ? "text-gray-900" : "text-gray-500"
            } hover:text-gray-900`}
          >
            FINE ART
          </a>
        </Link>
      </div>
      <Hamburger className="sm:hidden w-6" />
    </div>
    {props.children}
    <div style={{ paddingTop: "calc(3vw + .75rem)" }}>
      <SocialAndEmail isDark={true} />
      <div
        className="flex justify-center items-center text-gray-900"
        style={{
          marginTop: "calc(3vw + .75rem)",
          marginBottom: "calc(3vw + .75rem)"
        }}
      >
        Copyright © 2019 Forrest Dickison
      </div>
    </div>
  </div>
);
