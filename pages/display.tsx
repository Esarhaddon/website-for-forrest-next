import Layout from "../components/Layout";
import { useImage } from "../components/ImageContextProvider";
import { useRouter, Router } from "next/router";
import { loadGetInitialProps } from "next-server/dist/lib/utils";

export default () => {
  const router = useRouter();
  const { image } = useImage();
  // console.log(image.name);
  // if (image === null) {
  //   router.push("/illustration");
  // }

  return (
    <div>
      {/* {image === null ? router.push("/illustration") : null} */}
      <Layout isFor={router.query.fromPage}>
        {/* {image === null ? router.push("/animation") : null} */}
        {/* {image.name !== "2" ? router.push("/illustration") : null} */}
        {/* <div
        className="w-1/2 border border-solid border-red-500"
        style={
          {
            //   padding: "5vw",
            //   paddingTop: 0
          }
        }
      >
        <div
          className="bg-black"
          style={{
            width: "50px",
            height: 0,
            paddingTop: "100%"
          }}
        />
      </div> */}
        <div
          style={{
            padding: "5vw",
            paddingTop: 0
          }}
        >
          <div
            className="mx-auto relative"
            style={{
              maxWidth: "53rem"
            }}
          >
            <div
              className="relative w-full bg-black opacity-50"
              style={{
                paddingTop: "127.208%"
              }}
            >
              <div className="absolute top-0 left-0 flex items-center justify-center text-white text-6xl w-full h-full">
                [ image ]{/* [ {image.name} ] */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
