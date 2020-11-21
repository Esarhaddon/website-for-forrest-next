import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import { GridType } from "../../components/Layout"
import React, { useState, useEffect } from "react"
import Thumbnail from "../../components/Thumbnail"
import ErrorMessage from "../../components/ErrorMessage"
import LayoutPaddingContainer from "../../components/LayoutPaddingContainer"
import toTitleCase from "../../utils/toTitleCase"
import PreLoader from "../../components/PreLoader"
import Head from "next/head"

interface GridProps {
  gridType: GridType
  toDisplay: Image[]
  errorMessage?: string
  errorCode?: number
}

const Grid = ({ gridType, toDisplay, errorMessage, errorCode }: GridProps) => {
  const [containerHeight, setContainerHeight] = useState(0)
  useEffect(() => {
    const thumbnail = document.getElementById("thumbnail-0")
    if (thumbnail) {
      const thumbnailHeight = thumbnail.offsetHeight
      setContainerHeight(thumbnailHeight)
    }
  })

  if (errorMessage || errorCode) {
    return (
      <LayoutPaddingContainer>
        <ErrorMessage text={errorMessage} code={errorCode} />
      </LayoutPaddingContainer>
    )
  }

  return (
    <>
      <PreLoader grid={gridType} />
      <div
        className="grid"
        style={{
          display: "grid",
          paddingRight: "5vw",
          paddingLeft: "5vw",
        }}
      >
        <Head>
          <title key="title">
            {toTitleCase(gridType.split("-").join(" "))}
          </title>
        </Head>
        {toDisplay.map((image, index) => {
          return (
            <Thumbnail
              key={image.title}
              {...{ image, index, gridType, containerHeight }}
            />
          )
        })}
      </div>
    </>
  )
}

Grid.getInitialProps = async (ctx): Promise<Partial<GridProps>> => {
  const gridType = ctx.query.grid

  try {
    const toDisplay = await fetchImagesFor(ctx.query.grid)

    return { gridType, toDisplay }
  } catch (e) {
    let errorCode: number | undefined = undefined
    const regex = /^[0-9]+$/
    if (regex.test(e.message)) {
      errorCode = parseInt(e.message)
    }

    const errorMessage =
      errorCode === 404
        ? "Sorry! couldn't find what you're looking for."
        : `Something went wrong while trying to load content for /${gridType}.`

    return { gridType, errorMessage, errorCode }
  }
}

export default Grid
