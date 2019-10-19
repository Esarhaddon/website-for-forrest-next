import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { createGrid } from "../utils";
import { useImage } from "../components/ImageContextProvider";
import Link from "next/Link";

export default () => {
  const { images } = useImage();
  const router = useRouter();
  const page = router.query.page
    ? router.query.page.toString()
    : "illustration";

  return (
    <Layout isFor={page}>
      <div
        className="grid"
        style={{
          display: "grid",
          padding: "5vw",
          paddingTop: 0
        }}
      >
        {images[page]
          ? images[page].map((image, i) => (
              <div
                key={i}
                className=""
                style={{
                  paddingTop: "calc(150% - 5px)",
                  position: "relative",
                  height: 0
                }}
              >
                <Link href="/[page]/[image]" as={`/${page}/${image.name}`}>
                  <a
                    className="absolute flex items-center justify-center bg-black opacity-50 text-3xl text-white"
                    style={{
                      top: "5px",
                      left: "5px",
                      width: "calc(100% - 10px)",
                      height: "calc(100% - 10px)"
                    }}
                  >
                    [ {image.name} ]
                  </a>
                </Link>
              </div>
            ))
          : null}
      </div>
    </Layout>
  );
};
