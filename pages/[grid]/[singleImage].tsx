import React, { useEffect, useState } from "react"
import { GridType } from "../../components/Layout"
import fetchImagesFor, { Image } from "../../utils/fetchImagesFor"
import Vibrant from "node-vibrant"
import Link from "next/link"
import Arrow from "../../components/icons/arrow"
import ExitX from "../../components/icons/close"
import ErrorMessage from "../../components/ErrorMessage"
import Head from "next/head"
import { useScreenContext } from "../../providers/ScreenProvider"
import LayoutPaddingContainer from "../../components/LayoutPaddingContainer"

interface Dimensions {
  h: number
  w: number
}

interface SingleImageProps {
  fromGrid: GridType
  previous: Image
  current: Image
  next: Image
  errorMessage?: string
  errorCode?: number
}

const SingleImage = ({
  fromGrid,
  previous,
  current,
  next,
  errorMessage,
  errorCode,
}: SingleImageProps) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    h: 1,
    w: 1,
  })

  const [imageHasLoaded, setImageHasLoaded] = useState(false)
  const [dominantColor, setDominantColor] = useState("")
  const [hideModal, setHideModal] = useState(true)

  const screenCxt = useScreenContext()
  useEffect(() => {
    setImageHasLoaded(false)
    if (current && screenCxt.value) {
      const maxHeight = Math.round(screenCxt.value.height * 1.5)
      const maxWidth = Math.round(screenCxt.value.width * 0.9)
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
  }, [current, screenCxt])

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

  if (errorMessage || errorCode) {
    return (
      <LayoutPaddingContainer>
        <ErrorMessage text={errorMessage} code={errorCode} />
      </LayoutPaddingContainer>
    )
  }

  return (
    <div
      className="flex flex-col justify-center items-center"
      style={
        imageHasLoaded ? { paddingRight: "5vw", paddingLeft: "5vw" } : null
      }
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favicon-16x16.png"
        />
      </Head>
      {dimensions.h ? (
        <img
          className="hidden"
          src={`${current.src}?h=${dimensions.h * 2}`}
          onLoad={() => setImageHasLoaded(true)}
        />
      ) : null}
      <LayoutPaddingContainer>
        <div
          style={{
            maxWidth: "90vw",
            width: dimensions.w + "px",
          }}
          onClick={() => setHideModal(false)}
          className={`cursor-pointer relative`}
        >
          <div
            className="absolute h-0"
            style={{
              top: "1px",
              left: "1px",
              width: "calc(100% - 2px)",
              paddingTop: `calc(${
                parseFloat((dimensions.h / dimensions.w).toFixed(6)) * 100
              }% - 2px)`,
              backgroundColor: dominantColor,
            }}
          />
          <div
            className="relative top-0 right-0 w-full h-0"
            style={{
              paddingTop:
                parseFloat((dimensions.h / dimensions.w).toFixed(6)) * 100 +
                "%",
              background: `no-repeat center / contain url(${current.src}?h=${
                dimensions.h * 2
              })`,
            }}
          />
        </div>
        <div
          className="leading-tight text-center text-2xl font-semibold tracking-wider text-gray-900"
          style={
            dimensions.h > 1
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
      </LayoutPaddingContainer>
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
        <div
          className="w-full h-full"
          style={{
            background: `center / contain no-repeat url(${current.src}?h=${
              dimensions.h * 2
            })`,
          }}
        />
      </div>
    </div>
  )
}

SingleImage.getInitialProps = async (
  ctx
): Promise<Partial<SingleImageProps>> => {
  const fromGrid = ctx.query.grid
  const title = ctx.query.singleImage.replace(/-/g, " ")

  try {
    const images = await fetchImagesFor(fromGrid)
    const currentIndex = images.findIndex(
      (image) => image.title.toLocaleLowerCase() === title.toLocaleLowerCase()
    )
    if (currentIndex === -1) {
      throw new Error("404")
    }
    const previous = images[currentIndex - 1]
    const current = images[currentIndex]
    const next = images[currentIndex + 1]
    return { previous, current, next, fromGrid }
  } catch (e) {
    let errorCode: number | undefined = undefined
    const regex = /^[0-9]+$/
    if (regex.test(e.message)) {
      errorCode = parseInt(e.message)
    }
    const errorMessage =
      errorCode === 404
        ? `Sorry! couldn't find ${title}.`
        : `Something went wrong while trying to load ${title}.`
    return { errorCode, errorMessage }
  }
}

export default SingleImage
