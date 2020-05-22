import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Image } from "../utils/fetchImagesFor"
import { GridType } from "../components/Layout"
import Vibrant from "node-vibrant"

interface ThumbnailProps {
  image: Image
  displayHeight?: number
  gridType: GridType
  index: number
}

export default ({ image, displayHeight, gridType, index }: ThumbnailProps) => {
  const [loaded, setLoaded] = useState("")
  const [dominantColor, setDominantColor] = useState("")
  useEffect(() => {
    Vibrant.from(`${image.src}?h=5`)
      .getPalette()
      .then((palette) => {
        setDominantColor(palette.Vibrant.hex)
      })
      .catch((e) => setDominantColor("#696969"))
  }, [])

  return (
    <div>
      <img
        className="hidden"
        src={`${image.src}?h=${displayHeight ? displayHeight : 5}`}
        onLoad={() => {
          setLoaded(`${image.src}?h=${displayHeight ? displayHeight : 5}`)
        }}
      />
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
              className="absolute w-full h-full top-0 left-0"
              style={{
                backgroundColor: dominantColor ? dominantColor : "#A9A9A9",
              }}
            >
              <div
                id={`thumbnail-${index}`}
                className="absolute w-full h-full top-0 left-0 bg-cover bg-no-repeat bg-center text-black"
                style={{
                  ...(loaded && loaded.slice(loaded.length - 4) !== "h=5"
                    ? { backgroundImage: `url(${loaded})` }
                    : null),
                  backgroundSize: "cover",
                }}
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
