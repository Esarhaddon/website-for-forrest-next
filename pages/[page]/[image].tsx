import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import ExitX from "../../static/icons/close.svg";

export default () => {
  const router = useRouter();
  const page = router.query.page ? router.query.page.toString() : "";
  const image = router.query.image ? router.query.image.toString() : null;
  const [hideModal, setHideModal] = useState(true);
  return (
    <div>
      <Layout isFor={page}>
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
              <div
                className="absolute top-0 left-0 flex items-center justify-center text-white text-6xl w-full h-full cursor-pointer"
                onClick={() => {
                  setHideModal(false);
                }}
              >
                [ {image} ]
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full ${
            hideModal ? "hidden" : ""
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, .95)",
            paddingRight: "2vw",
            paddingLeft: "2vw"
          }}
        >
          <ExitX
            className="absolute z-10 text-gray-200 fill-current cursor-pointer"
            style={{
              top: "calc(2% + 1rem)",
              right: "2%",
              width: ".85rem",
              height: ".85rem"
            }}
            onClick={() => {
              setHideModal(true);
            }}
          />
          <div
            className="relative mx-auto"
            style={{ maxWidth: "72vh", top: "0" }}
          >
            <div
              className="h-0 w-full"
              style={{
                paddingTop: "133.333333%"
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full text-white flex items-center justify-center text-xl"
              style={{
                backgroundColor: "rgba(127, 127, 127)",
                marginTop: "calc(50vh - 66.666666%)"
              }}
            >
              [ {image} ]
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
