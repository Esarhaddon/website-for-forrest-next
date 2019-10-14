import Link from "next/Link";
// import { useImage } from "./components/ImageContextProvider";

export function createGrid(
  numOfImages: number,
  gridForPage: "illustration" | "animation" | "fine-art"
) {
  // const { image, updateImage } = useImage();
  // const handleClick = () => {
  //   updateImage({src: 'http://fake-url.com', name: })
  //   // console.log("hello! I have been clicked!");
  // };
  const grid: JSX.Element[] = [];
  for (let i = 0; i < numOfImages; i++) {
    grid.push(
      <div
        key={i}
        className=""
        style={{
          paddingTop: "calc(150% - 5px)",
          position: "relative",
          height: 0
        }}
      >
        <Link
          // href={`/display?slug={"fromPage":"${gridForPage}", "imageName":"${i +
          //   1}"}`}
          href="/[page]/[image]"
          as={`/${gridForPage}/image-${i + 1}`}
          // as={`/${i + 1}`}
          // href={`/display?fromPage=${gridForPage}`}
        >
          <a
            // onClick={() => {
            //   updateImage({
            //     src: "http://fake-url.com",
            //     name: `${i + 1}`,
            //     fromPage: gridForPage
            //   });
            // console.log("hello! I have been clicked!");
            // }}
            className="absolute flex items-center justify-center bg-black opacity-50 text-3xl text-white"
            style={{
              top: "5px",
              left: "5px",
              width: "calc(100% - 10px)",
              height: "calc(100% - 10px)"
            }}
          >
            [ image-{i + 1} ]
          </a>
        </Link>
      </div>
    );
  }
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        padding: "5vw",
        paddingTop: 0
        // paddingBottom: "calc(3rem + 5px)"
      }}
    >
      {grid}
    </div>
  );
}
