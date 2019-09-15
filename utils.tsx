export function createThumbnailGroup(
  groupTitle: string,
  numOfThumbnails: number
) {
  const thumbnails: JSX.Element[] = [];
  for (let i = 0; i < numOfThumbnails; i++) {
    thumbnails.push(
      <div
        key={i}
        className="relative bg-gray-300"
        style={{
          width: "15.25%",
          marginRight: "4.75%",
          marginBottom: "4.75%"
        }}
      >
        <div style={{ paddingTop: "100%" }}></div>
      </div>
    );
  }
  return (
    <>
      <div
        className="flex items-center justify-center text-gray-400 tracking-wide"
        style={{
          marginTop: "5vw",
          height: "7rem",
          fontSize: "10rem"
        }}
      >
        {groupTitle}
      </div>
      <div
        className="flex flex-wrap"
        style={{
          marginBottom: "16vh",
          paddingLeft: "5%",
          paddingTop: "5%"
        }}
      >
        {thumbnails}
      </div>
    </>
  );
}
