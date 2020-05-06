import React, { useEffect, useState, useRef } from "react"
import Layout from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Vibrant from "node-vibrant"
import Link from "next/link"
import Arrow from "../../static/icons/arrow.svg"
import ExitX from "../../static/icons/close.svg"

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
  const [imageDimensions, setImageDimensions] = useState({
    h: 0,
    w: 0,
  })
  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState("")
  const [hideModal, setHideModal] = useState(true)

  useEffect(() => {
    const maxHeight = Math.round(window.innerHeight * 1.5)
    const maxWidth = Math.round(window.innerWidth * 0.9)
    const dimensions: ImageDimensions = {
      h: current.originalHeight,
      w: current.originalWidth,
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
      .then((palette) => {
        setDominantColor(palette.Vibrant.hex)
      })
      .catch((e) => setDominantColor("#696969"))
  }, [])

  return (
    <Layout isFor={fromGrid}>
      <div
        className="flex flex-col justify-center items-center"
        style={
          imageHasLoaded ? { paddingRight: "5vw", paddingLeft: "5vw" } : null
        }
      >
        <div
          style={{
            // TO DO: Start with height at 100vh to avoid tacky bounce thing?
            maxHeight: imageDimensions.h + "px",
            maxWidth: imageDimensions.w + "px",
            ...(imageHasLoaded
              ? null
              : dominantColor
              ? { backgroundColor: dominantColor }
              : { backgroundColor: "#A9A9A9" }),
          }}
          className={`flex justify-center items-center`}
        >
          <img
            className="cursor-pointer"
            src={`${current.src}${
              imageDimensions.h ? `?h=${imageDimensions.h}` : ""
            }`}
            onLoad={() => setImageHasLoaded(true)}
            onClick={() => setHideModal(false)}
          />
        </div>
        <div
          className="leading-tight text-center text-2xl font-semibold tracking-wider text-gray-900"
          style={
            imageDimensions.h
              ? { marginTop: "calc(3vw + .75rem)" }
              : { marginTop: "100vh" }
          }
        >
          {current.title.toUpperCase()}
        </div>
        {current.description ? (
          <div
            className="leading-tight text-center px-4"
            style={{ marginTop: "calc(1.5vw + .375rem)" }}
          >
            {current.description}
          </div>
        ) : null}
        <div
          className="flex justify-center items-center text-gray-700 leading-none"
          style={{
            marginTop: "calc(5vw + 1.25rem + 5px)",
            marginBottom: "calc(2vw + .75rem)",
          }}
        >
          {previous ? (
            <Link
              href="/[page]/[image]"
              as={`/${fromGrid}/${previous
                .replace(/-/g, "|-")
                .replace(/ /g, "-")}`}
            >
              <a className="text-lg px-8">
                <Arrow
                  className="h-5 inline fill-current"
                  style={{
                    transform: "scaleX(-1)",
                  }}
                />
                Prev
              </a>
            </Link>
          ) : (
            <div className="text-lg text-gray-500 cursor-pointer px-8">
              <Arrow
                className="h-5 inline fill-current"
                style={{
                  transform: "scaleX(-1)",
                }}
              />
              Prev
            </div>
          )}
          {next ? (
            <Link
              href="/[page]/[image]"
              as={`/${fromGrid}/${next.replace(/-/g, "|-").replace(/ /g, "-")}`}
            >
              <a className="text-lg  px-8">
                Next
                <Arrow className="h-5 inline fill-current" />
              </a>
            </Link>
          ) : (
            <div className="text-lg text-gray-500 cursor-pointer px-8">
              Next
              <Arrow className="h-5 inline fill-current" />
            </div>
          )}
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full z-50 flex itmes-center justify-center ${
            hideModal ? "hidden" : ""
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, .95)",
            paddingRight: "5vw",
            paddingLeft: "5vw",
            paddingTop: "2vh",
            paddingBottom: "2vh",
          }}
          onClick={() => {
            setHideModal(true)
          }}
        >
          <ExitX
            className="absolute z-10 text-gray-200 fill-current cursor-pointer"
            style={{
              top: "calc(2% + 1rem)",
              right: "2%",
              width: ".85rem",
              height: ".85rem",
            }}
          />
          <img
            className="max-h-full h-auto max-w-full w-auto"
            src={`${current.src}?h=${imageDimensions.h}`}
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
  const currentIndex = images.findIndex((image) => image.title === title)
  const current = images[currentIndex]
  const previous: Image | undefined = images[currentIndex - 1]
  const next: Image | undefined = images[currentIndex + 1]

  return { fromGrid, current, previous: previous?.title, next: next?.title }
}

export default ImagePage
