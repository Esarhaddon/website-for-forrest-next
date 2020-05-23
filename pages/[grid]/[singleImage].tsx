import React, { useEffect, useState } from "react"
import { GridType } from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Vibrant from "node-vibrant"
import Link from "next/link"
import { useRouter } from "next/router"
import Arrow from "../../static/icons/arrow.svg"
import ExitX from "../../static/icons/close.svg"
import Loading from "../../components/Loading"

interface Dimensions {
  h: number
  w: number
}

export default () => {
  const [fromGrid, setFromGrid] = useState<GridType | undefined>(undefined)
  const [current, setCurrent] = useState<Image | undefined>(undefined)
  const [previous, setPrevious] = useState<Image | undefined>(undefined)
  const [next, setNext] = useState<Image | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    if (router.query.grid && router.query.singleImage) {
      const grid = router.query.grid as GridType
      const title = (router.query.singleImage as string).replace(/-/g, " ")
      fetchImagesFor(grid).then((images) => {
        const currentIndex = images.findIndex((image) => image.title === title)
        setPrevious(images[currentIndex - 1])
        setCurrent(images[currentIndex])
        setNext(images[currentIndex + 1])
        setFromGrid(grid)
      })
    }
  }, [router.query])

  const [dimensions, setDimensions] = useState<Dimensions>({
    h: 0,
    w: 0,
  })

  useEffect(() => {}, [dimensions])

  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState("")
  const [hideModal, setHideModal] = useState(true)

  useEffect(() => {
    if (screen && screen.height && current) {
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
    }
  }, [current])

  useEffect(() => {
    if (current) {
      Vibrant.from(`${current.src}?h=5`)
        .getPalette()
        .then((palette) => {
          setDominantColor(palette.Vibrant.hex)
        })
        .catch((e) => setDominantColor("#696969"))
    }
  }, [current])

  if (!current) {
    // TO DO: do you want some kind of loading indicator here?
    console.log("using placeholder...")
    return <div className="w-full h-full" />
  }

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={
        imageHasLoaded ? { paddingRight: "5vw", paddingLeft: "5vw" } : null
      }
    >
      {dimensions.h ? (
        <img
          className="hidden"
          src={`${current.src}?h=${dimensions.h}`}
          onLoad={() => setImageHasLoaded(true)}
        />
      ) : null}
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
              parseFloat((dimensions.h / dimensions.w).toFixed(6)) * 100 + "%",
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
            href="/[grid]/[singleImage]"
            as={`/${fromGrid}/${previous.title
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
            href="/[grid]/[singleImage]"
            as={`/${fromGrid}/${next.title
              .replace(/-/g, "|-")
              .replace(/ /g, "-")}`}
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
  )
}
