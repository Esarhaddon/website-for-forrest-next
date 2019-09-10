interface NavbarProps {
  className?: string;
  vhFromTop: string;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`navbar absolute bg-white flex justify-center ${props.className}`}
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
            }

            .menu-container:hover .menu {
              //position: absolute;
              bottom: 17vh;
              top: auto;
            }

            .non-option:hover .bottom-item {
              text-decoration: underline;
            }

            .higher-item:hover ~ .bottom-item {
              text-decoration: none;
            }
          `}</style>
          <div
            style={{
              width: "75%",
              height: "100%"
              // top: "-2px"
            }}
            className="non-option menu-container flex justify-center items-center relative text-black text-2xl"
          >
            <div>WORK</div>
            <div className="menu text-xl text-black bg-white">
              <div
                className="higher-item pl-4 pr-4 hover:underline"
                style={{ padding: "1.5rem 2rem .25rem 2rem" }}
              >
                ILLUSTRATION
              </div>
              <div
                className="higher-item pl-4 pr-4 hover:underline"
                style={{ padding: ".25rem 2rem" }}
              >
                ANIMATION
              </div>
              <div
                className="bottom-item pl-4 pr-4 hover:underline"
                style={{ padding: ".25rem 2rem" }}
              >
                FINE ART
              </div>
            </div>
          </div>
          {/* <div
            style={{ paddingTop: "1.25rem" }}
            className="menu absolute text-xl bg-white"
          >
            <div
              className="pl-4 pr-4"
              style={{ padding: ".25rem 2rem" }}
            >
              ILLUSTRATION
            </div>
            <div
              className="pl-4 pr-4"
              style={{ padding: ".25rem 2rem" }}
            >
              ANIMATION
            </div>
            <div
              className="pl-4 pr-4"
              style={{ padding: ".25rem 2rem" }}
            >
              FINE ART
            </div>
          </div> */}
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%"
              // top: "-2px"
            }}
            className="flex justify-center items-center relative text-black text-2xl hover:underline"
          >
            ABOUT
          </div>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div
            style={{
              width: "75%",
              height: "100%"
              // top: "-2px"
            }}
            className="flex justify-center items-center relative text-black text-2xl hover:underline"
          >
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};
