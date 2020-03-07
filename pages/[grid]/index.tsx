import React from "react"

interface GridProps {
  gridType: "illustration" | "animation" | "fine art"
}

const Grid = (props: GridProps) => `You have reached the ${props.gridType} page`

Grid.getInitialProps = async ctx => {
  const gridType = ctx.query.grid

  return { gridType }
}

export default Grid
