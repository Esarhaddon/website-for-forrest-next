interface NavbarProps {
  className?: string;
  vhFromTop: string;
}

export default (props: NavbarProps) => {
  return (
    <div
      className={`navbar absolute bg-gray-200 flex justify-center ${props.className}`}
      style={{ height: "17vh", width: "100vw", top: props.vhFromTop }}
    >
      <div className="flex" style={{ height: "100%", width: "80%" }}>
        <div className="flex-grow flex justify-center items-center text-gray-800 text-2xl">
          WORK
        </div>
        <div className="flex-grow flex justify-center items-center text-gray-800 text-2xl">
          ABOUT
        </div>
        <div className="flex-grow flex justify-center items-center text-gray-800 text-2xl">
          CONTACT
        </div>
      </div>
    </div>
  );
};
