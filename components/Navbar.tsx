interface NavbarProps {
  className?: string;
  vhFromTop: string;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`absolute bg-white flex justify-center w-screen  border-solid border-t border-gray-500 ${props.className}`}
      style={{
        height: "17vh",
        top: props.vhFromTop
      }}
    >
      <div className="flex h-full w-4/5">
        <div className="flex-grow flex justify-center h-full w-9/12 items-center">
          <style jsx>{`
            .menu {
              top: 17vh;
              left: -1rem;
            }

            .menu-container:hover .menu {
              bottom: calc(17vh - 1px);
              top: auto;
            }
          `}</style>
          <div className="menu-container flex justify-center h-full w-9/12 items-center relative text-black text-4xl">
            <div className="h-full flex items-center relative">
              WORK
              <div className="menu absolute bg-white border-t border-r border-l border-solid border-gray-500 ">
                <div className="text-3xl text-black tracking-tight pl-6 pr-6 pt-4 leading-loose">
                  ILLUSTRATION
                </div>
                <div className="text-3xl text-black tracking-tight pl-6 pr-6 leading-loose">
                  ANIMATION
                </div>
                <div className="border-b border-gray-300 border-solid text-3xl text-black tracking-tight pl-6 pr-6 pb-2 leading-loose">
                  FINE ART
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow flex justify-center h-full w-9/12 items-center">
          <div className="flex justify-center h-full w-9/12 items-center relative text-black text-4xl">
            ABOUT
          </div>
        </div>
        <div className="flex-grow flex justify-center h-full w-9/12 items-center">
          <div className="flex justify-center h-full w-9/12 items-center relative text-black text-4xl">
            CONTACT
          </div>
        </div>
      </div>
    </div>
  );
};
