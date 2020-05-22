import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Layout from "../../components/Layout"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Thumbnail from "../../components/Thumbnail"

// TO DO: get rid of scroll bounce on grid and mobile nav 'cause its wreaking havoc on those features
const Grid = () => {
  const router = useRouter()
  const gridType = (router.query.grid as any) || ""
  const [toDisplay, setToDisplay] = useState([] as Image[])

  useEffect(() => {
    if (gridType) {
      fetchImagesFor(gridType)
        .then((images) => {
          setToDisplay(images)
        })
        .catch((e) => {
          // TO DO: figure out how you are actually going to handle errors
          console.log(
            `Something went wrong while fetching artwork for ${gridType}`
          )
        })
    }
  }, [gridType])

  const [displayHeight, setDisplayHeight] = useState(0)
  useEffect(() => {
    const thumbnail = document.getElementById("thumbnail-0")
    if (thumbnail) {
      const thumbnailHeight = thumbnail.offsetHeight
      setDisplayHeight(thumbnailHeight)
    }
  })

  return (
    <Layout isFor={gridType}>
      <div
        className="grid"
        style={{
          display: "grid",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          marginBottom: "-5px",
        }}
      >
        {toDisplay.map((image, index) => {
          return (
            <Thumbnail
              key={image.title}
              {...{ image, index, gridType, displayHeight }}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Grid
