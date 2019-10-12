import Layout from "../components/Layout";
import { createGrid } from "../utils";

export default () => (
  <Layout isFor="animation">{createGrid(13, "animation")}</Layout>
);
