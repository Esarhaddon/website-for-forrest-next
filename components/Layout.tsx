import Navbar from "../components/Navbar";

interface LayoutProps {
  isParallax: boolean;
  children?: React.ReactNode;
}

export default (props: LayoutProps) => (
  <div
    className={`font-sans ${
      props.isParallax ? "parallax-container" : "non-parallax-container"
    }`}
  >
    <style jsx global>
      {`
        body,
        html {
          margin: 0;
          padding: 0;
        }

        body {
          // font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
          overflow-y: ${props.isParallax ? "hidden" : "scroll"};
        }

        /* Parallax Styles */
        .parallax-container {
          // border: 1px solid red;
          position: relative;
          height: 100vh;
          overflow-x: hidden;
          overflow-y: scroll;
          //overscroll-behavior: none;
          perspective: 2px;
          perspective-origin: 0 0;
        }

        .non-parallax-container {
          // perspective: 2px;
          // perspective-origin: 0 0;
          // overflow-x: hidden;
          //height: calc(80vh - 3.75rem);
          //overflow-y-scroll;
          //w-screen;
          height: 100vh;
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
          bottom: 100%;
          left: -1.5rem;
        }
      `}
    </style>
    {/* <div
      className={`${
        props.isParallax
          ? "parallax-container"
          : "overflow-y-scroll overflow-x-hidden w-screen"
      }`}
    > */}
    {props.children}
    <Navbar isParallax={props.isParallax} />
    {/* </div> */}
  </div>
);
