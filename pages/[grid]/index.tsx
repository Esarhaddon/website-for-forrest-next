import fetchImagesFor, { IImage } from "../../utils/fetchImagesFor"
import Layout from "../../components/Layout"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import Vibrant from "node-vibrant"

// TO DO: get rid of scroll bounce on grid and mobile nav 'cause its wreaking havoc on those features

interface GridProps {
  gridType: "illustration" | "animation" | "fine art"
  toDisplay: IImage[]
}

const Grid = ({ gridType, toDisplay }: GridProps) => {
  const [displayHeight, setDisplayHeight] = useState(0)
  useEffect(() => {
    console.log("running effect...")
    const thumbnail = document.getElementById("thumbnail-0")
    const thumbnailHeight = thumbnail.offsetHeight
    setDisplayHeight(thumbnailHeight)
  }, []) // TO DO: set to run on resize?

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
          const [loaded, setLoaded] = useState("")
          const [dominantColor, setDominantColor] = useState("")
          useEffect(() => {
            Vibrant.from(`${image.src}?h=5`)
              .getPalette()
              .then(palette => {
                setDominantColor(palette.Vibrant.hex)
              })
              .catch(e => setDominantColor("#898382"))
          }, [])

          return (
            <div key={i}>
              <img
                className="hidden"
                src={`${image.src}?h=${displayHeight ? displayHeight : 5}`}
                onLoad={() => {
                  setLoaded(
                    `${image.src}?h=${displayHeight ? displayHeight : 5}`
                  )
                }}
              />
              <div
                style={{
                  paddingTop: "calc(150% - 5px)",
                  position: "relative",
                  height: 0
                }}
              >
                {/* REMEMBER: you will need do the opposite of this when querying for the image by title */}
                <Link
                  href="/[grid]/[singleImage]"
                  as={`/${gridType}/${image.title
                    .replace(/-/g, "|-")
                    .replace(/ /g, "-")}`}
                >
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
                      className="absolute w-full h-full top-0 left-0"
                      style={{ backgroundColor: dominantColor }}
                    >
                      <div
                        id={`thumbnail-${i}`}
                        className="absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center text-black"
                        style={{
                          ...(loaded &&
                          loaded.slice(loaded.length - 4) !== "h=5"
                            ? { backgroundImage: `url(${loaded})` }
                            : null),
                          backgroundSize: "cover"
                        }}
                      />
                    </div>
                  </a>
                </Link>
              </div>
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
