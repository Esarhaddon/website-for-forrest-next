import Layout from "../components/Layout";
import { createGrid } from "../utils";

export default () => (
  <Layout isFor="fine-art">{createGrid(10, "fine-art")}</Layout>
);
