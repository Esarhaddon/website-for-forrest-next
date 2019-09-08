interface NavbarProps {
  className?: string;
  vhFromTop: string;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`navbar absolute bg-white flex justify-center border-solid border-t-2 border-gray-300 ${props.className}`}
      style={{ height: "17vh", width: "100vw", top: props.vhFromTop }}
    >
      <div className="flex" style={{ height: "100%", width: "80%" }}>
        <div className="relative flex-grow flex justify-center items-center">
          <style jsx>{`
            .menu {
              position: absolute;
              bottom: -17vh;
            }

            .menu-older-sibling:hover + .menu {
              position: absolute;
              bottom: 17vh;
            }
          `}</style>
          <div
            style={{
              width: "75%",
              height: "100%",
              top: "-2px"
            }}
            className="menu-older-sibling flex justify-center items-center relative text-gray-800 text-2xl hover:text-black"
          >
            WORK
          </div>
          <div
            style={{ paddingTop: "1.25rem" }}
            className="menu absolute text-xl bg-white"
          >
            <div className=" pl-4 pr-4" style={{ padding: ".25rem 2rem" }}>
              ILLUSTRATION
            </div>
            <div className=" pl-4 pr-4" style={{ padding: ".25rem 2rem" }}>
              ANIMATION
            </div>
            <div className=" pl-4 pr-4" style={{ padding: ".25rem 2rem" }}>
              FINE ART
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%",
              top: "-2px"
            }}
            className="flex justify-center items-center relative text-gray-800 text-2xl border-solid border-transparent border-t-2 hover:border-black hover:text-black"
          >
            ABOUT
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%",
              top: "-2px"
            }}
            className="flex justify-center items-center relative text-gray-800 text-2xl border-solid border-transparent border-t-2 hover:border-black hover:text-black"
          >
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};
