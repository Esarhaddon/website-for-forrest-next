import { relative } from "path";

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
          paddingTop: "100%",
          position: "relative",
          height: 0
        }}
      >
        <div
          className="absolute flex items-center justify-center w-full h-full"
          style={{ top: 0, left: 0 }}
        >
          <div
            className="absolute bg-white off-bg-gray-200"
            style={{
              top: "50px",
              bottom: "50px",
              left: "50px",
              right: "50px"
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "grid",
        padding: "50px",
        paddingBottom: "calc(7.5rem + 50px)",
        gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr)",
        backgroundColor: "rgba(0,0,0, .75)"
      }}
    >
      {grid}
    </div>
  );
}
