import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import { GridType } from "../../components/Layout"
import React, { useState, useEffect } from "react"
import Thumbnail from "../../components/Thumbnail"

interface GridProps {
  gridType: GridType
  toDisplay: Image[]
}

const Grid = ({ gridType, toDisplay }: GridProps) => {
  const [displayHeight, setDisplayHeight] = useState(0)
  useEffect(() => {
    const thumbnail = document.getElementById("thumbnail-0")
    if (thumbnail) {
      const thumbnailHeight = thumbnail.offsetHeight
      setDisplayHeight(thumbnailHeight)
    }
  })

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        paddingRight: "5vw",
        paddingLeft: "5vw",
        // marginBottom: "-5px",
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
  )
}

Grid.getInitialProps = async (ctx): Promise<GridProps> => {
  const gridType = ctx.query.grid
  const toDisplay = await fetchImagesFor(gridType)

  return { gridType, toDisplay }
}

export default Grid
