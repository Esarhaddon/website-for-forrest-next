import "../style.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default () => (
  <Layout>
    <div className="parallax-container">
      <div className="background" />
      <div className="middleground" />
      <Navbar vhFromTop="72vh" className="foreground" />
    </div>
  </Layout>
);
