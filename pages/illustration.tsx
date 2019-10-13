import Layout from "../components/Layout";
import { createGrid } from "../utils";
// import { useImage } from "../components/ImageContextProvider";

// console.log("hello from illustration");
// console.log("image in illustration is", useImage().image);

export default () => {
  // console.log("hello from illustration");
  // console.log("image in illustration is", useImage().image);
  return <Layout isFor="illustration">{createGrid(15, "illustration")}</Layout>;
};
