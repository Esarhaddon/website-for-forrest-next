import Layout from "../components/Layout";
import { createThumbnailGroup } from "../utils";

export default () => {
  return (
    <Layout isParallax={false}>
      {createThumbnailGroup("ILLUSTRATION", 18)}
    </Layout>
  );
};
