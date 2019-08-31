export default props => (
  <div>
    <style jsx global>
      {`
        body,
        html {
          margin: 0;
          padding: 0;
        }

        /* Parallax Styles */
        .parallax-container {
          height: 100vh;
          overflow-x: hidden;
          overflow-y: scroll;
          perspective: 1px;
          perspective-origin: 0 0;
        }

        .background {
          height: 110vh;
          transform-origin: 0 0;
          transform: translateZ(-2px) scale(3);
          background-image: url(../static/layer2.png);
          background-size: cover;
          background-repeat: no-repeat;
        }

        .foreground {
          position: absolute;
          top: 0;
          left: 0;
          height: 110vh;
          width: 100vw;
          background-image: url(../static/layer1.png);
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}
    </style>
    {props.children}
  </div>
);
