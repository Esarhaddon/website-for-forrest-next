import { relative } from "path";

export function createThumbnailGroup(
  groupTitle: string,
  numOfThumbnails: number
) {
  const thumbnails: JSX.Element[] = [];
  for (let i = 0; i < numOfThumbnails; i++) {
    thumbnails.push(
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
            className="absolute bg-gray-500"
            style={{ top: "30px", bottom: "30px", left: "30px", right: "30px" }}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          display: "grid",
          margin: "30px",
          paddingBottom: "7.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr)"
        }}
      >
        {thumbnails}
      </div>
    </>
  );
}
