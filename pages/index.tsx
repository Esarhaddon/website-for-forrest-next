import "../style.css";
import Layout from "../components/Layout";
import TitleText from "../static/title.svg";
import { useImage } from "../components/ImageContextProvider";
import ImageContext from "../components/ImageContextProvider";

export default () => {
  // const { someContext } = useContext(ImageContext);
  // console.log("someContext is", someContext);
  const { image, updateImage } = useImage();
  // updateImage({ src: "Australia", name: "Dundee" });

  if (image.name === "no name") {
    updateImage({ src: "Australia", name: "Dundee" });
    const { image } = useImage();
    console.log("now image is", image);
  }

  console.log("image name is", image.name);
  console.log("image src is", image.src);

  // console.log("image name is now", image.name);
  // console.log("image src is now", image.src);
  return (
    <Layout isFor="home">
      <div
        className="background absolute top-0 left-0 bg-center bg-cover bg-no-repeat w-full"
        style={{
          height: "130vh",
          backgroundImage: "url(../static/landing-background-cropped.png)"
        }}
      />
      <div
        className="bg-cover bg-center bg-no-repeat absolute top-0 left-0 w-full"
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
        {/* <TitleText
        className="w-auto text-white fill-current"
        style={{
          height: "6rem"
        }}
      /> */}
      </div>
    </Layout>
  );
};
