import React, { useEffect, useState, useRef } from "react"
import Layout from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Vibrant from "node-vibrant"

interface ImageDimensions {
  h: number
  w: number
}

interface ImagePageProps {
  fromGrid: "illustration" | "animation" | "fine art"
  current: Image
  previous: string | undefined
  next: string | undefined
}

const ImagePage = ({ fromGrid, current, previous, next }: ImagePageProps) => {
  const [imageDimensions, setImageDimensions] = useState({} as ImageDimensions)
  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState("")

  useEffect(() => {
    const maxHeight = Math.round(window.innerHeight * 1.5)
    const maxWidth = Math.round(window.innerWidth * 0.9)
    const dimensions: ImageDimensions = {
      h: current.originalHeight,
      w: current.originalWidth
    }

    if (dimensions.h > maxHeight) {
      const shrinkFactor = maxHeight / dimensions.h
      dimensions.h = maxHeight
      dimensions.w = Math.round(dimensions.w * shrinkFactor)
    }

    if (dimensions.w > maxWidth) {
      const shrinkFactor = maxWidth / dimensions.w
      dimensions.w = maxWidth
      dimensions.h = Math.round(dimensions.h * shrinkFactor)
    }

    setImageDimensions(dimensions)
  }, [])

  useEffect(() => {
    Vibrant.from(`${current.src}?h=5`)
      .getPalette()
      .then(palette => {
        setDominantColor(palette.Vibrant.hex)
      })
      .catch(e => setDominantColor("#696969"))
  }, [])

  return (
    <Layout isFor={fromGrid}>
      <div
        className="flex justify-center items-center"
        style={
          imageHasLoaded ? { paddingRight: "5vw", paddingLeft: "5vw" } : null
        }
      >
        <div
          style={{
            // TO DO: Start with height at 100vh to avoid tacky bounce thing?
            height: imageDimensions.h + "px",
            width: imageDimensions.w + "px",
            ...(imageHasLoaded
              ? null
              : dominantColor
              ? { backgroundColor: dominantColor }
              : { backgroundColor: "#A9A9A9" })
          }}
          className={`flex justify-center items-center`}
        >
          <img
            src={`${current.src}${
              imageDimensions.h ? `?h=${imageDimensions.h}` : ""
            }`}
            onLoad={() => setImageHasLoaded(true)}
          />
        </div>
      </div>
    </Layout>
  )
}

ImagePage.getInitialProps = async (ctx): Promise<ImagePageProps> => {
  const fromGrid = ctx.query.grid
  const title = ctx.query.singleImage
    .replace(/(?<!\|)-/g, " ")
    .replace("|-", "-")
  // TO DO: Will the contentful api let me fetch just only 3 entries I actually need? Would that make things any faster?
  const images = await fetchImagesFor(fromGrid)
  const currentIndex = images.findIndex(image => image.title === title)
  const current = images[currentIndex]
  const previous: Image | undefined = images[currentIndex - 1]
  const next: Image | undefined = images[currentIndex + 1]

  return { fromGrid, current, previous: previous?.title, next: next?.title }
}

export default ImagePage
