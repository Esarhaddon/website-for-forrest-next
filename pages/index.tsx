import "../style.css";
import Layout from "../components/Layout";
import { callbackify } from "util";

export default () => (
  <Layout isFor="home">
    <div
      className="background absolute top-0 left-0 bg-cover bg-no-repeat w-full"
      style={{
        height: "130vh",
        backgroundImage: "url(../static/landing-background-cropped.png)"
      }}
    />
    <div
      className="bg-cover bg-no-repeat absolute top-0 left-0 w-full"
      style={{
        height: "130vh",
        backgroundImage: "url(../static/layer1.png)"
      }}
    />
    <div
      className="sticky left-0 w-full h-full flex items-center justify-center text-white tracking-tighter leading-none"
      style={{
        top: "0",
        fontSize: "6.875rem",
        backgroundColor: "rgba(0, 0, 0, .15)"
      }}
    >
      forrest dickison
    </div>
  </Layout>
);
