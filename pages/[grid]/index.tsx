import React from "react"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"

interface GridProps {
  gridType: "illustration" | "animation" | "fine art"
  toDisplay: Image[]
}

const Grid = (props: GridProps) => `You have reached the ${props.gridType} page`

Grid.getInitialProps = async (ctx): Promise<GridProps> => {
  const gridType = ctx.query.grid
  const toDisplay = await fetchImagesFor(gridType)

  return { gridType, toDisplay }
}

export default Grid
