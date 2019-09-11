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

            .menu:hover {
              position: absolute;
              bottom: 17vh;
              top: auto;
            }

            .menu-option:hover .menu {
              position: absolute;
              bottom: 17vh;
              top: auto;
            }

            .menu-option {
              position: relative;
              height: 100%;
            }
          `}</style>
          <div
            style={{
              width: "75%",
              height: "100%"
            }}
            className="menu-option off-non-option off-menu-container flex justify-center items-center relative text-black text-2xl"
          >
            <div>
              WORK
              <div className="menu absolute">
                <div className="menu-item hover:underline">ILLUSTRATION</div>
                <div className="menu-item hover:underline">ANIMATION</div>
                <div className="menu-item hover:underline">FINE ART</div>
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
