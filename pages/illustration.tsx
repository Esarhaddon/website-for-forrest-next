import Layout from "../components/Layout";
import { createGrid } from "../utils";

export default () => <Layout isFor="illustration">{createGrid(15)}</Layout>;
