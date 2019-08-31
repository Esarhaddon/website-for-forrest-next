export default props => (
  <div>
    <style jsx global>
      {`
        body,
        html {
          margin: 0;
          padding: 0;
        }

        /* layout */
        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 420px;
        }

        /* Parallax Styles */
        .parallax-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          overflow-y: scroll;
          perspective: 1px;
          perspective-origin: 0 0;
          display: flex;
        }

        .background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-origin: 0 0;
          transform: translateZ(-2px) scale(3);
        }

        .foreground {
          margin-top: auto;
          margin-bottom: 50px;

          transform-origin: 0 0;
          transform: translateZ(0);

          /* Uncomment the code below to see the difference the scale property makes! */
          /* transform: translateZ(3px); */
          /* transform: translateZ(0) scale(1); */
        }

        .foreground h1 {
          font-size: 36px;
        }
      `}
    </style>
    {props.children}
  </div>
);
