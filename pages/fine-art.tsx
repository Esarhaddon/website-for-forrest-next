import Layout from "../components/Layout";
import { createThumbnailGroup } from "../utils";

export default () => {
  return (
    <Layout isParallax={false}>{createThumbnailGroup("FINE ART", 26)}</Layout>
  );
};
