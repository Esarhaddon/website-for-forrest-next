import "../styles/style.css";
import Link from "next/Link";
import LogoBlack from "../static/icons/logo-black.svg";
import { ReactNode } from "react";
import SocialAndEmail from "./SocialAndEmail";

interface LayoutProps {
  isFor: string;
  children: ReactNode;
}

export default (props: LayoutProps) => (
  <div>
    <div className="relative top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll">
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
                props.isFor === "animation" ? "text-gray-900" : "text-gray-500"
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
      {props.children}
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
    </div>
  </div>
);
