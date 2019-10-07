import Link from "next/Link";

export default () => (
  <div
    className="foreground absolute w-full left-0 flex items-center justify-center text-white tracking-tighter leading-none"
    style={{
      bottom: "20vh"
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
  </div>
);
