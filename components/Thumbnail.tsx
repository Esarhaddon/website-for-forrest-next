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
  const [loaded, setLoaded] = useState("")
  const imgLoadingColor = useDominantColor(image.src)

  return (
    <div>
      {containerHeight ? (
        <img
          className="hidden"
          src={`${image.src}?h=${Math.round(containerHeight * 1.75)}`}
          onLoad={() => {
            setLoaded(`${image.src}?h=${Math.round(containerHeight * 1.75)}`)
          }}
        />
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
          as={`/${gridType}/${image.title.replace(/ /g, "-").toLowerCase()}`}
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
              className="absolute w-full h-full top-0 left-0"
              style={{
                backgroundColor: imgLoadingColor,
              }}
            >
              <div
                id={`thumbnail-${index}`}
                className="absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat text-black"
                style={{
                  ...(loaded && loaded.slice(loaded.length - 4) !== "h=5"
                    ? { backgroundImage: `url(${loaded})` }
                    : null),
                  backgroundPosition: image.offsets
                    ? `left ${image.offsets.left}% top ${image.offsets.top}%`
                    : "center",
                }}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
