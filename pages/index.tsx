import "../styles/style.css";
import Link from "next/Link";
import SocialAndEmail from "../components/SocialAndEmail";
import { useState, useEffect } from "react";
import nextCookie from "next-cookies";
import cookie from "js-cookie";

const Index = props => {
  const [scrollable, setScrollable] = useState(false);
  const indexHasLoaded = props.indexHasLoaded
    ? parseInt(props.indexHasLoaded, 10)
    : 0;

  cookie.set("indexHasLoaded", indexHasLoaded + 1);

  useEffect(() => {
    window.addEventListener("unload", () => {
      cookie.remove("indexHasLoaded");
    });
  });

  if (!indexHasLoaded) {
    useEffect(() => {
      setTimeout(() => setScrollable(true), 1000);
    });
  } else if (!scrollable) {
    setScrollable(true);
  }

  return (
    <>
      <div className="pointer-events-none z-50 flex items-center justify-center text-center h-screen w-screen top-0 px-2 text-white md:text-8xl sm:text-7xl xsm:text-6xl text-5-1/4xl fixed leading-none font-semibold">
        forrest dickison
      </div>
      <div
        className={`absolute top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll ${
          indexHasLoaded ? "opacity-1" : "opacity-0"
        } ${scrollable ? "" : "pointer-events-none"}`}
        style={{
          perspective: "2px",
          perspectiveOrigin: "0 0",
          minHeight: "375px",
          ...(indexHasLoaded ? null : { animation: "1s fade-in .75s forwards" })
        }}
      >
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "130%",
            background:
              "url(../static/landing-background-cropped.png) 66.66% 0% / cover no-repeat",
            transformOrigin: "0 0",
            transform: "translateZ(-2px) scale(2)" // (perspective - distance) / perspective = scaleFactor
          }}
        />
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "130%",
            background:
              "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/layer1.png) 33.33% 0% / cover no-repeat",
            transformOrigin: "0 0",
            transform: "translateZ(-1px) scale(1.5)"
          }}
        />
        <div
          className="flex-wrap absolute left-0 off-h-20 w-full left-0 flex items-center justify-center pb-4"
          style={{
            top: "105%",
            ...(!indexHasLoaded
              ? { animation: "1.25s ease .5s show-nav" }
              : null)
          }}
        >
          <Link href="/[page]" as="/illustration">
            <a
              className="mx-12 my-6 border-2 border-solid border-white text-white py-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
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
      </div>
    </>
  );
};

Index.getInitialProps = async ctx => {
  const { indexHasLoaded } = nextCookie(ctx);
  return {
    indexHasLoaded
  };
};

export default Index;
