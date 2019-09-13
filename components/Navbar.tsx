import Link from "next/Link";

interface NavbarProps {
  parallax: boolean;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`foreground absolute bg-white flex justify-center w-screen  border-solid border-t border-gray-500`}
      style={{
        height: "17vh",
        top: `${props.parallax ? "72vh" : "42vh"}`
      }}
    >
      <div className="flex h-full w-4/5">
        <div className="flex-grow flex justify-center h-full items-center relative text-black text-4xl">
          <div className="group flex h-full items-center relative">
            WORK
            <div className="menu absolute hidden bg-white border-t border-r border-l border-solid border-gray-500 group-hover:block">
              <div className="text-3xl text-black tracking-tight pl-6 pr-6 pt-4 leading-loose">
                <Link href="/illustration">ILLUSTRATION</Link>
              </div>
              <div className="text-3xl text-black tracking-tight pl-6 pr-6 leading-loose">
                <Link href="/animation">ANIMATION</Link>
              </div>
              <div className="border-b border-gray-300 border-solid text-3xl text-black tracking-tight pl-6 pr-6 pb-2 leading-loose">
                <Link href="/fine-art">FINE ART</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center text-4xl">
          <Link href="/about">ABOUT</Link>
        </div>
        <div className="flex-grow flex justify-center items-center text-4xl">
          <Link href="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};
