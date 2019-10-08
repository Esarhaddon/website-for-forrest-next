import Link from "next/Link";
import InstagramLogo from "../static/icons/001-instagram.svg";
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg";
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg";
import EmailLogo from "../static/icons/004-email.svg";

export default () => (
  <div
    className="foreground absolute w-full left-0 flex items-center justify-center text-white tracking-tighter leading-none"
    style={{
      height: "5rem",
      bottom: "16vh"
    }}
  >
    <div
      className="border-2 border-solid border-white text-white pt-5 pb-4 px-5 tracking-widest leading-none cursor-pointer hover:bg-white hover:text-black"
      style={{
        transition:
          "color 170ms ease-in-out, background-color 170ms ease-in-out"
      }}
    >
      WORK
    </div>
    <div className="group flex items-center ml-8 text-white fill-current logo-container cursor-pointer">
      <div
        className="w-12 pl-2 hover:text-white"
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
        }}
      >
        <InstagramLogo className="h-8 w-8" />
      </div>
      <div
        className="w-12 pl-2 hover:text-white"
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
        }}
      >
        <FacebookLogo className="h-8 w-8" />
      </div>
      <div
        className="w-12 pl-2 hover:text-white"
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
        }}
      >
        <TwitterLogo className="h-8 w-8" />
      </div>
      <div
        className="w-12 pl-2 hover:text-white"
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
        }}
      >
        <EmailLogo className="h-8 w-8" />
      </div>
    </div>
  </div>
);
