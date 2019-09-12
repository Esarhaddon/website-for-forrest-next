interface NavbarProps {
  className?: string;
  vhFromTop: string;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`navbar absolute bg-white flex justify-center  border-solid border-t border-gray-500 ${props.className}`}
      style={{
        height: "17vh",
        width: "100vw",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        top: props.vhFromTop
      }}
    >
      <div className="flex" style={{ height: "100%", width: "80%" }}>
        <div className="relative flex-grow flex justify-center items-center">
          <style jsx>{`
            .menu {
              position: absolute;
              top: 17vh;
              left: -1.5rem;
              //box-shadow: inset 0 0 1em 1em gray;
            }

            .menu-container:hover .menu {
              position: absolute;
              bottom: calc(17vh - 1px);
              //bottom: 17vh;
              top: auto;
            }

            .bottom-item {
              text-decoration: underline;
            }

            .upper-item:hover ~ .bottom-item {
              text-decoration: none;
            }
          `}</style>
          <div
            style={{
              width: "75%",
              height: "100%"
            }}
            className="menu-container flex justify-center items-center relative text-black text-4xl"
          >
            <div className="h-full flex items-center relative">
              WORK
              <div className="menu absolute bg-white border-b border-solid">
                <div className="upper-item text-3xl tracking-tight pl-6 pr-6 pt-4 leading-relaxed hover:underline">
                  ILLUSTRATION
                </div>
                <div className="upper-item  text-3xl tracking-tight pl-6 pr-6 leading-relaxed hover:underline">
                  ANIMATION
                </div>
                <div className="bottom-item text-3xl tracking-tight pl-6 pr-6 pb-4 leading-relaxed  hover:underline">
                  FINE ART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%"
            }}
            className="flex justify-center items-center relative text-black text-4xl hover:underline"
          >
            ABOUT
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%"
            }}
            className="flex justify-center items-center relative text-black text-4xl hover:underline"
          >
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};
