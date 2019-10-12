import { relative } from "path";
import { callbackify } from "util";

export function createGrid(
  // groupTitle: string,
  numOfImages: number
) {
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
        <div
          className="absolute flex items-center justify-center bg-black opacity-50 text-3xl text-white"
          style={{
            top: "5px",
            left: "5px",
            width: "calc(100% - 10px)",
            height: "calc(100% - 10px)"
          }}
        >
          [ {i + 1} ]
        </div>
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
