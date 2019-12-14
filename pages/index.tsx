import "../styles/style.css";
import Link from "next/Link";
import SocialAndEmail from "../components/SocialAndEmail";
import TitleText from "../static/title.svg";

export default () => {
  return (
    <div>
      <TitleText
        className="mx-auto max-w-full px-16 text-white fill-current pointer-events-none relative h-24 z-10"
        style={{ top: "calc(50vh - 3rem)" }}
      />
      <div
        className="absolute top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll"
        style={{ perspective: "2px", perspectiveOrigin: "0 0" }}
      >
        <div
          className="background absolute top-0 left-0 bg-center bg-cover bg-no-repeat w-full"
          style={{
            height: "130vh",
            backgroundImage: "url(../static/landing-background-cropped.png)"
          }}
        />
        <div
          className="absolute top-0 left-0 w-full"
          style={{
            height: "130vh",
            background:
              "linear-gradient(rgba(0, 0, 0, .15), rgba(0, 0, 0, .3)), url(../static/layer1.png) center / cover no-repeat"
          }}
        />
        <div
          className="foreground absolute h-20 w-full left-0 flex items-center justify-center"
          style={{ bottom: "calc(22vh - 2.5rem)" }}
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
    </div>
  );
};
