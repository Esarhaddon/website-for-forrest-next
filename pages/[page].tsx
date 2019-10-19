import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { createGrid } from "../utils";

export default () => {
  const router = useRouter();
  const page = router.query.page ? router.query.page.toString() : "";

  return <Layout isFor={page}>{createGrid(13, page)}</Layout>;
};
