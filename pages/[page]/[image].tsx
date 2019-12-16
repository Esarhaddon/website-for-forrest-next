import Layout from "../../components/PortfolioLayout";
import Link from "next/Link";
import { useRouter } from "next/router";
import { useState } from "react";
import ExitX from "../../static/icons/close.svg";
import Arrow from "../../static/icons/arrow.svg";
import { useImage } from "../../providers/ImageContextProvider";

export default () => {
  const router = useRouter();
  const { images } = useImage();
  const page = router.query.page ? router.query.page.toString() : null;
  const currentImage = router.query.image
    ? images[page].find(image => image.name === router.query.image)
    : null;

  const nextImage = images[page]
    ? images[page][
        images[page].findIndex(image => {
          if (image) {
            return image.name === currentImage.name;
          } else return -2;
        }) + 1
      ]
    : null;
  const previousImage = images[page]
    ? images[page][
        images[page].findIndex(image => {
          if (image) {
            return image.name === currentImage.name;
          } else return -2;
        }) - 1
      ]
    : null;
  const [hideModal, setHideModal] = useState(true);

  return (
    <div>
      <Layout isFor={page}>
        <div
          style={{
            padding: "0 5vw 2.5vw 5vw"
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
                [ {currentImage ? currentImage.name : ""} ]
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center text-gray-700"
          style={{
            marginBottom: "3vw"
          }}
        >
          {previousImage ? (
            <Link href="/[page]/[image]" as={`/${page}/${previousImage.name}`}>
              <a className="text-lg mx-4">
                <Arrow
                  className="h-5 inline fill-current"
                  style={{
                    transform: "scaleX(-1)"
                  }}
                />
                Prev
              </a>
            </Link>
          ) : (
            <div className="text-lg mx-4 text-gray-500 cursor-pointer">
              <Arrow
                className="h-5 inline fill-current"
                style={{
                  transform: "scaleX(-1)"
                }}
              />
              Prev
            </div>
          )}
          {nextImage ? (
            <Link href="/[page]/[image]" as={`/${page}/${nextImage.name}`}>
              <a className="text-lg mx-4">
                Next
                <Arrow className="h-5 inline fill-current" />
              </a>
            </Link>
          ) : (
            <div className="text-lg mx-4 text-gray-500 cursor-pointer">
              Next
              <Arrow className="h-5 inline fill-current" />
            </div>
          )}
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
              [ {currentImage ? currentImage.name : ""} ]
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
