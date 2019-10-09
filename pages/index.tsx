import "../style.css";
import Layout from "../components/Layout";
import TitleText from "../static/title.svg";

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
      <TitleText
        className="w-auto text-white fill-current"
        style={{
          height: "6rem"
        }}
      />
    </div>
  </Layout>
);
