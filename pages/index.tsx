import "../styles/style.css";
import Layout from "../components/PortfolioLayout";
import Link from "next/Link";
import SocialAndEmail from "../components/SocialAndEmail";
import TitleText from "../static/title.svg";

export default () => {
  return (
    <div>
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
      <div
        className="relative top-0 left-0 h-screen w-full overflow-x-hidden overflow-y-scroll"
        style={{
          perspective: "2px",
          perspectiveOrigin: "0 0"
        }}
      >
        <div
          className="background absolute top-0 left-0 bg-center bg-cover bg-no-repeat w-full"
          style={{
            height: "130vh",
            backgroundImage: "url(../static/landing-background-cropped.png)"
          }}
        />
        <div
          className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full"
          style={{
            height: "130vh",
            backgroundImage: "url(../static/layer1.png)"
          }}
        />
        <div
          className="sticky left-0 top-0 w-full h-full "
          style={{
            pointerEvents: "none",
            backgroundColor: "rgba(0, 0, 0, .15)"
          }}
        />
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
      </div>
    </div>
  );
};
