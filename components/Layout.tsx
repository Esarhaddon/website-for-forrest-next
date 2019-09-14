import Navbar from "../components/Navbar";

interface LayoutProps {
  isParallax: boolean;
  children?: React.ReactNode;
}

export default (props: LayoutProps) => (
  <div className="flex flex-col">
    <style jsx global>
      {`
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* Parallax Styles */
        .parallax-container {
          position: relative;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: scroll;
          //overscroll-behavior: none;
          perspective: 2px;
          perspective-origin: 0 0;
        }

        .background {
          height: 130vh;
          transform-origin: 0 0;
          transform: translateZ(-2px) scale(2);
          background-image: url(../static/landing-background-cropped.png);
          background-size: cover;
          background-positon: top;
          background-repeat: no-repeat;
        }

        .middleground {
          position: absolute;
          top: 0;
          left: 0;
          height: 130vh;
          width: 100vw;
          background-image: url(../static/layer1.png);
          background-size: cover;
          background-position: top;
          background-repeat: no-repeat;
        }

        .foreground {
          transform-origin: 0 0;
          transform: translateZ(1px) scale(0.5);
        }

        .menu {
          bottom: calc(100% - 1px);
          left: -1.5rem;
        }
      `}
    </style>
    <div
      className={`${
        props.isParallax ? "parallax-container" : "overflow-y-scroll"
      }`}
    >
      {props.children}
      <Navbar isParallax={props.isParallax} />
    </div>
  </div>
);
