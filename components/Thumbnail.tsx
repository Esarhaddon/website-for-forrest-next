import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Image } from "../utils/fetchImagesFor"
import { GridType } from "../components/Layout"
import Vibrant from "node-vibrant"

export const useDominantColor = (src: string) => {
  const [dominantColor, setDominantColor] = useState("#A9A9A9")
  useEffect(() => {
    Vibrant.from(`${src}?h=5`)
      .getPalette()
      .then((palette) => {
        setDominantColor(palette.Vibrant.hex)
      })
      .catch((e) => setDominantColor("#696969"))
  }, [src])

  return dominantColor
}

interface ThumbnailProps {
  image: Image
  containerHeight?: number
  gridType: GridType
  index: number
}

export default ({
  image,
  containerHeight,
  gridType,
  index,
}: ThumbnailProps) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgLoadingColor = useDominantColor(image.src)
  const imgSrc = `${image.src}?h=${Math.round(containerHeight * 1.75)}`

  return (
    <div>
      {containerHeight ? (
        <img className="hidden" src={imgSrc} onLoad={() => setIsLoaded(true)} />
      ) : null}
      <div
        style={{
          paddingTop: "calc(150% - 5px)",
          position: "relative",
          height: 0,
        }}
      >
        <Link
          href="/[grid]/[singleImage]"
          as={`/${gridType}/${image.title.replace(/ /g, "-")}`}
        >
          <a
            className="absolute flex items-center justify-center text-3xl text-white"
            style={{
              top: "5px",
              left: "5px",
              width: "calc(100% - 10px)",
              height: "calc(100% - 10px)",
            }}
          >
            <div
              id={`thumbnail-${index}`}
              className="absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat"
              style={{
                ...(isLoaded ? { backgroundImage: `url(${imgSrc})` } : null),
                backgroundPosition: image.offsets
                  ? `left ${image.offsets.left}% top ${image.offsets.top}%`
                  : "center",
              }}
            >
              <div
                className="absolute w-full h-full top-0 left-0"
                style={{
                  backgroundColor: isLoaded ? "transparent" : imgLoadingColor,
                  transition: "background-color 200ms ease-in",
                }}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
