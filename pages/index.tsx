import "../styles/style.css";
import Link from "next/Link";
import SocialAndEmail from "../components/SocialAndEmail";
import TitleText from "../static/title.svg";

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
        className="absolute top-0 left-0 bg-center bg-cover bg-no-repeat w-full"
        style={{
          height: "130%",
          backgroundImage: "url(../static/landing-background-cropped.png)",
          transformOrigin: "0 0",
          transform: "translateZ(-2px) scale(2)" // (perspective - distance) / perspective = scaleFactor
        }}
      />
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "130%",
          background:
            "linear-gradient(rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url(../static/layer1.png) center / cover no-repeat",
          transformOrigin: "0 0",
          transform: "translateZ(-1px) scale(1.5)"
        }}
      />
      <TitleText
        className="mx-auto max-w-full px-16 text-white fill-current pointer-events-none sticky h-24 z-50"
        style={{ top: "calc(50% - 3rem)" }}
      />
      <div
        className="absolute left-0 h-20 w-full left-0 flex items-center justify-center"
        style={{ top: "105%" }}
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
    </div>
  );
};
