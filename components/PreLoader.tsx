import { useState, useEffect, useRef } from "react"
import { GridType } from "./Layout"
import fetchImagesFor, { Image } from "../utils/fetchImagesFor"
import { useImageContext } from "../providers/ImageProvider"
import { useScreenContext } from "../providers/ScreenProvider"
import { Dimensions } from "../pages/[grid]/[singleImage]"

interface PreLoaderProps {
  grid: GridType
}

export default function PreLoader({ grid }: PreLoaderProps) {
  const [images, setImages] = useState<Image[]>()
  const { preLoaded, setPreLoaded } = useImageContext()

  const screenCxt = useScreenContext()
  const {
    value: { width },
  } = screenCxt

  const [dimensions, setDimensions] = useState<Dimensions>(null)

  // re-preload if screen gets resized
  useEffect(() => {
    setPreLoaded([])
  }, [width, setPreLoaded])

  useEffect(() => {
    fetchImagesFor(grid).then((images) => setImages(images))
  }, [])

  if (images && images[0]?.src) {
    return (
      <div>
        {images
          .filter((image) => !preLoaded.includes(image.title))
          .map((image) => (
            <ImageItem {...{ image }} key={image.title} />
          ))}
      </div>
    )
  }

  return <div className="hidden" />
}

function ImageItem({ image }: { image: Image }) {
  const { setPreLoaded } = useImageContext()
  const imgRef = useRef<HTMLImageElement>(null)
  const screenCxt = useScreenContext()

  const [dimensions, setDimensions] = useState<Dimensions>(null)

  // TO DO: this should be a custom hook since its repeated in [singleimage].tsx
  useEffect(() => {
    if (image && screenCxt.value) {
      const maxHeight = Math.round(screenCxt.value.height * 1.5)
      const maxWidth = Math.round(screenCxt.value.width * 0.9)
      const dimensions = {
        h: image.originalHeight,
        w: image.originalWidth,
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
  }, [image, screenCxt])

  // 'cause there are still issues with onLoad events sometimes not firing?
  useEffect(() => {
    if (imgRef.current?.complete) {
      setPreLoaded((current) => {
        const changed = [...current]
        changed.push(image.title)
        return changed
      })
    }
  }, [])

  if (dimensions?.h) {
    return (
      <img
        ref={imgRef}
        src={`${image.src}?h=${dimensions.h * 2}`}
        className="hidden h-0 w-0"
        onLoad={() => {
          console.log("an image has been preloaded!")
          setPreLoaded((current) => {
            const changed = [...current]
            changed.push(image.title)
            return changed
          })
        }}
      />
    )
  }

  return <div />
}
