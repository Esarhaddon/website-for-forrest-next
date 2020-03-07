import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Layout from "../../components/PortfolioLayout"
import Link from "next/link"

interface GridProps {
  gridType: "illustration" | "animation" | "fine art"
  toDisplay: Image[]
}

const Grid = ({ gridType, toDisplay }: GridProps) => {
  return (
    <Layout isFor={gridType}>
      <div
        className="grid"
        style={{
          display: "grid",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          marginBottom: "-5px"
        }}
      >
        {toDisplay.map((image, i) => {
          return (
            <div
              key={i}
              className=""
              style={{
                paddingTop: "calc(150% - 5px)",
                position: "relative",
                height: 0
              }}
            >
              <Link href="/[page]/[image]" as={`/${gridType}/${image.title}`}>
                <a
                  className="absolute flex items-center justify-center text-3xl text-white"
                  style={{
                    top: "5px",
                    left: "5px",
                    width: "calc(100% - 10px)",
                    height: "calc(100% - 10px)"
                  }}
                >
                  <div
                    className="absolute w-full h-full bg-cover bg-no-repeat bg-center text-black"
                    style={{
                      backgroundImage: `url(${image.src}?h=520)`, // TO DO: use src set to set smaller images for phone size
                      backgroundSize: "cover"
                    }}
                  />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

Grid.getInitialProps = async (ctx): Promise<GridProps> => {
  const gridType = ctx.query.grid
  const toDisplay = await fetchImagesFor(gridType)

  return { gridType, toDisplay }
}

export default Grid
