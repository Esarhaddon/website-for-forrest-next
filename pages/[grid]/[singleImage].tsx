import React, { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Vibrant from "node-vibrant"
import Link from "next/link"
import Arrow from "../../static/icons/arrow.svg"
import ExitX from "../../static/icons/close.svg"

interface Dimensions {
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
  const [dimensions, setDimensions] = useState<Dimensions>({
    h: 0,
    w: 0,
  })

  useEffect(() => {
    console.log("imageDimensions are", dimensions)
  }, [dimensions])

  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState("")
  const [hideModal, setHideModal] = useState(true)

  useEffect(() => {
    console.log("running window effect...")
    if (screen && screen.height) {
      console.log("window is", window)
      console.log("window.innerWidth is", window.innerWidth)
      const maxHeight = Math.round(screen.height * 1.5)
      const maxWidth = Math.round(screen.width * 0.9)
      const dimensions = {
        h: current.originalHeight,
        w: current.originalWidth,
      } as Dimensions

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

      setDimensions(dimensions)
    } else {
      // TODO: could this happen ?
      console.log("no such thing as screen")
    }
  }, [])

  useEffect(() => {
    Vibrant.from(`${current.src}?h=5`)
      .getPalette()
      .then((palette) => {
        setDominantColor(palette.Vibrant.hex)
      })
      .catch((e) => setDominantColor("#696969"))
  }, [])

  console.log("dimensions are", dimensions)
  console.log(
    "paddingTop will be",
    parseFloat((dimensions.h / dimensions.w).toFixed(6)) * 100 + "%"
  )

  return (
    <Layout isFor={fromGrid}>
      <div
        className="flex flex-col justify-center items-center"
        style={
          imageHasLoaded ? { paddingRight: "5vw", paddingLeft: "5vw" } : null
        }
      >
        <img
          className="hidden"
          src={`${current.src}${dimensions.h ? `?h=${dimensions.h}` : ""}`}
          onLoad={() => setImageHasLoaded(true)}
        />
        <div
          style={{
            // TO DO: Start with height at 100vh to avoid tacky bounce thing?
            maxWidth: "90vw",
            width: dimensions.w + "px",
            ...(imageHasLoaded
              ? null
              : dominantColor
              ? { backgroundColor: dominantColor }
              : { backgroundColor: "#A9A9A9" }),
          }}
          onClick={() => setHideModal(false)}
          className={`cursor-pointer relative`}
        >
          <div
            className="w-full h-0"
            style={{
              paddingTop:
                parseFloat((dimensions.h / dimensions.w).toFixed(6)) * 100 +
                "%",
              background: `no-repeat center / contain url(${current.src}?h=${dimensions.h})`,
            }}
          />
        </div>
        <div
          className="leading-tight text-center text-2xl font-semibold tracking-wider text-gray-900"
          style={
            dimensions.h
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
            src={`${current.src}?h=${dimensions.h}`}
          />
        </div>
      </div>
    </Layout>
  )
}

ImagePage.getInitialProps = async (ctx): Promise<ImagePageProps> => {
  const fromGrid = ctx.query.grid
  const title = ctx.query.singleImage
    // TODO: make "-" illegal for contentful art work titles
    .replace(/-/g, " ")
  // TO DO: Will the contentful api let me fetch just only 3 entries I actually need? Would that make things any faster?
  const images = await fetchImagesFor(fromGrid)
  const currentIndex = images.findIndex((image) => image.title === title)
  const current = images[currentIndex]
  const previous: Image | undefined = images[currentIndex - 1]
  const next: Image | undefined = images[currentIndex + 1]

  return { fromGrid, current, previous: previous?.title, next: next?.title }
}

export default ImagePage
