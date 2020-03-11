import React from "react"
import Layout from "../../components/Layout"
import fetchImagesFor, { IImage } from "../../utils/fetchImagesFor"

interface ImagePageProps {
  fromGrid: "illustration" | "animation" | "fine art"
  current: IImage
  previous: string | undefined
  next: string | undefined
}

const ImagePage = (props: ImagePageProps) => {
  console.log("ImagePage props are", props)
  return (
    <Layout isFor={props.fromGrid}>
      <div className="w-full h-full flex justify-center items-center text-6xl text-bold text-gray-500">
        [IMAGE]
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
  console.log("currentIndex is", currentIndex)
  const current = images[currentIndex]
  const previous: IImage | undefined = images[currentIndex - 1]
  const next: IImage | undefined = images[currentIndex + 1]

  return { fromGrid, current, previous: previous?.title, next: next?.title }
}

export default ImagePage
