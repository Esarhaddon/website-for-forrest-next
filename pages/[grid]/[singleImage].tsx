import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"

// interface Height {
//   height: number
// }

// interface Width {
//   width: number
// }

interface Dimension {
  kind: "h" | "w"
  value: number
}

interface EitherHeight {
  h: number
  w?: never
}

interface OrWidth {
  w: number
  h?: never
}

// type Dimensions = Height & Width

// const calcMaxDimension = (
//   windowDimensions: Dimensions,
//   imageDimensions: Dimensions
// ): EitherHeight | OrWidth => {
// if(imageDimensions.height > windowDimensions.height * 1.3333) {
//   return {height: windowDimensions.height}
// }
// if(imageDimensions.width > windowDimensions.width * .9) {
//   return {width: windowDimensions.width * .9}
// }

//   return {height: imageDimensions.height}
// }

interface ImagePageProps {
  fromGrid: "illustration" | "animation" | "fine art"
  current: Image
  previous: string | undefined
  next: string | undefined
}

const ImagePage = ({ fromGrid, current, previous, next }: ImagePageProps) => {
  const [imageDimension, setImageDimension] = useState(
    {} as Dimension | undefined
  )
  useEffect(() => {
    if (current.originalHeight > window.innerHeight * 1.5) {
      setImageDimension({
        kind: "h",
        value: Math.round(window.innerHeight * 1.5)
      })
    } else if (current.originalWidth > window.innerWidth * 0.9) {
      setImageDimension({
        kind: "w",
        value: Math.round(window.innerWidth * 0.9)
      })
    }
  }, [])
  return (
    <Layout isFor={fromGrid}>
      <div
        className="flex justify-center items-center"
        style={{ paddingRight: "5vw", paddingLeft: "5vw" }}
      >
        <img
          src={`${current.src}${
            imageDimension
              ? `?${imageDimension.kind}=${imageDimension.value}`
              : ""
          }`}
        />
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
