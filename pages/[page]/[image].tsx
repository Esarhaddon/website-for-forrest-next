import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useState } from "react";
import ExitX from "../../static/icons/close.svg";

export default () => {
  const router = useRouter();
  const [hideModal, setHideModal] = useState(true);
  return (
    <div>
      <Layout isFor={router.query ? router.query.page : ""}>
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
                [ {router.query ? router.query.image : "no image"} ]
              </div>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full ${
            hideModal ? "hidden" : ""
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, .95)"
            // paddingTop: "1vw",
            // paddingBottom: "1vw",
            // paddingRight: "2vw",
            // paddingLeft: "2vw"
          }}
        >
          <ExitX
            className="absolute text-gray-200 fill-current cursor-pointer"
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
            style={{ maxWidth: "72vh", top: "2vh" }}
          >
            <div
              className="h-0 w-full"
              style={{
                paddingTop: "133.333333%"
              }}
            />
            <div
              className="absolute top-0 left-0 w-full h-full text-white flex items-center justify-center text-xl"
              style={{ backgroundColor: "rgba(127, 127, 127)" }}
            >
              [ {router.query ? router.query.image : "no image"} ]
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
