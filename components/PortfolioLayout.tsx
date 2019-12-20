import "../styles/style.css";
import Link from "next/Link";
import LogoBlack from "../static/icons/logo-black.svg";
import { ReactNode } from "react";
import SocialAndEmail from "./SocialAndEmail";
import Hamburger from "../static/icons/hamburger.svg";
import ExitX from "../static/icons/close.svg";
import { useState, useRef } from "react";

interface LayoutProps {
  isFor: string;
  relMobileNav?: boolean;
  children: ReactNode;
}

export default (props: LayoutProps) => {
  const [lastScroll, setLastScroll] = useState("none");
  const [y, setY] = useState(0);
  const [wait, setWait] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const scrollableEl = useRef(null);
  const header = useRef(null);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = scrollableEl.current.scrollTop;
    if (showMobileNav) return;
    if (wait && scrollTop !== 0) return;

    if (scrollTop > y) {
      setLastScroll("down");
    } else if (scrollTop < y) {
      setLastScroll("up");
    }

    setY(scrollTop);
    setWait(true);
    setTimeout(() => setWait(false), 200);
  };

  return (
    <div
      ref={scrollableEl}
      className={`relative top-0 left-0 h-screen w-full overflow-x-hidden ${
        showMobileNav ? "overflow-y-hidden" : null
      }`}
      onScroll={handleScroll}
    >
      <div
        ref={header}
        className={`flex sm:static ${
          props.relMobileNav ? "relative" : "sticky"
        } z-40 off-top-0 justify-between items-center align-middle text-gray-900 font-semibold sm:px-0 py-4 md:px-16 md:py-16`}
        style={{
          ...(lastScroll === "down" && !props.relMobileNav
            ? { top: -`${header.current.offsetHeight}` }
            : { top: "0" }),
          transition: "top .2s ease-in-out",
          marginRight: "calc(5vw + 5px)",
          marginLeft: "calc(5vw + 5px)"
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
              className={`${
                props.isFor === "fine-art" ? "text-gray-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              FINE ART
            </a>
          </Link>
        </div>
        {showMobileNav ? (
          <ExitX
            className="sm:hidden text-black fill-current cursor-pointer w-4"
            onClick={() => setShowMobileNav(false)}
          />
        ) : (
          <Hamburger
            className="sm:hidden off-inline w-6 cursor-pointer"
            onClick={() => setShowMobileNav(true)}
          />
        )}
      </div>
      {props.children}
      <div style={{ paddingTop: "calc(3vw + .75rem)" }}>
        <SocialAndEmail isDark={true} />
        <div
          className="flex justify-center items-center text-gray-900 leading-none "
          style={{
            marginTop: "calc(3vw + .75rem)",
            marginBottom: "calc(3vw + .75rem)"
          }}
        >
          Copyright © 2019 Forrest Dickison
        </div>
      </div>
      {showMobileNav ? (
        <div className="sm:hidden fixed top-0 z-0 bg-white w-full h-full off-w-full off-h-full"></div>
      ) : null}
    </div>
  );
};
