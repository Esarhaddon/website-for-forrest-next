import Layout from "../components/Layout";
import { createGrid } from "../utils";

export default () => <Layout isFor="work">{createGrid(15)}</Layout>;
