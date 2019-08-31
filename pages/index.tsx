import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="parallax-container">
      <div className="background"></div>
      <div className="foreground">
        <div
          className="nav-bar"
          style={{
            height: "9vh",
            backgroundColor: "black",
            color: "white",
            marginTop: "100vh"
          }}
        >
          about contact work
        </div>
      </div>
    </div>
  </Layout>
);
