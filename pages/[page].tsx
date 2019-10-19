import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { createGrid } from "../utils";
import { useContext } from "react";
import { useImage } from "../components/ImageContextProvider";

export default () => {
  const { images } = useImage();
  console.log("image is", images);
  const router = useRouter();
  const page = router.query.page ? router.query.page.toString() : "";

  return <Layout isFor={page}>{createGrid(13, page)}</Layout>;
};
