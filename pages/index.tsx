import "../styles/style.css";
import Link from "next/Link";
import SocialAndEmail from "../components/SocialAndEmail";

export default () => {
  return (
    <div
      className="absolute top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll"
      style={{
        perspective: "2px",
        perspectiveOrigin: "0 0",
        minHeight: "300px"
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
        className="text-center px-2 text-white md:text-8xl sm:text-7xl xsm:text-6xl text-5-1/4xl sticky z-50 leading-none font-semibold"
        style={{ top: "calc(50% - 3rem)" }}
      >
        forrest dickison
      </div>
      <div
        className="absolute left-0 h-20 w-full left-0 flex items-center justify-center"
        style={{ top: "105%" }}
      >
        <Link href="/[page]" as="/illustration">
          <a
            className="mr-12 border-2 border-solid border-white text-white py-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-gray-900"
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
  );
};
