import Link from "next/Link";

interface NavbarProps {
  isParallax: boolean;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`${
        props.isParallax ? "absolute foreground" : "fixed"
      } bg-white flex justify-center w-screen  border-solid border-t border-gray-500`}
      style={{
        height: "7.5rem",
        //top: `${props.isParallax ? "72vh" : "auto"}`,
        top: `${
          props.isParallax ? "calc(80vh - 3.75rem)" : "calc(100vh - 7.5rem)"
        }`
        // bottom: `${props.isParallax ? "11.85vh" : "0"}`
      }}
    >
      <div className="flex h-full w-4/5">
        <div className="w-1/3 flex justify-center h-full items-center relative text-black text-4xl">
          <div className="group flex h-full items-center relative">
            WORK
            <div className="menu absolute hidden bg-white border-t border-r border-l border-solid border-gray-500 group-hover:block">
              <div className="text-3xl text-black tracking-tight pl-6 pr-6 pt-4 leading-loose">
                <Link href="/illustration">
                  <a>ILLUSTRATION</a>
                </Link>
              </div>
              <div className="text-3xl text-black tracking-tight pl-6 pr-6 leading-loose">
                <Link href="/animation">
                  <a>ANIMATION</a>
                </Link>
              </div>
              <div className="border-b border-gray-300 border-solid text-3xl text-black tracking-tight pl-6 pr-6 pb-2 leading-loose">
                <Link href="/fine-art">
                  <a>FINE ART</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex justify-center items-center text-4xl">
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </div>
        <div className="w-1/3 flex justify-center items-center text-4xl">
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
