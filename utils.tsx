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
          className="absolute bg-black opacity-50"
          style={{
            top: "5px",
            left: "5px",
            width: "calc(100% - 10px)",
            height: "calc(100% - 10px)"
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="grid"
      style={{
        display: "grid",
        padding: "5px 5vw 5vw 5vw",
        paddingBottom: "calc(3rem + 5px)"
      }}
    >
      {grid}
    </div>
  );
}
