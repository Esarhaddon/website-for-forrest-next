import Link from "next/Link";

export function createGrid(numOfImages: number, gridForPage: string) {
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
        <Link href="/[page]/[image]" as={`/${gridForPage}/image-${i + 1}`}>
          <a
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
      }}
    >
      {grid}
    </div>
  );
}
