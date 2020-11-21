import { useState, useEffect, useRef } from "react"
import { GridType } from "./Layout"
import fetchImagesFor, { Image } from "../utils/fetchImagesFor"
import { useImageContext } from "../providers/ImageProvider"

interface PreLoaderProps {
  grid: GridType
}

export default function PreLoader({ grid }: PreLoaderProps) {
  const [images, setImages] = useState<Image[]>()
  const { preLoaded } = useImageContext()

  useEffect(() => {
    fetchImagesFor(grid).then((images) => setImages(images))
  }, [])

  if (images && images[0]?.src) {
    return (
      <div>
        {images
          .filter((image) => !preLoaded.includes(image.title))
          .map((image) => (
            <ImageItem title={image.title} src={image.src} />
          ))}
      </div>
    )
  }

  return <div className="hidden" />
}

function ImageItem({ src, title }: { src: string; title: string }) {
  const { setPreLoaded } = useImageContext()
  const imgRef = useRef<HTMLImageElement>(null)

  // 'cause there are still issues with onLoad events sometimes not firing?
  useEffect(() => {
    if (imgRef.current?.complete) {
      setPreLoaded((current) => {
        const changed = [...current]
        changed.push(title)
        return changed
      })
    }
  }, [])

  return (
    <img
      ref={imgRef}
      src={src}
      className="hidden h-0 w-0"
      onLoad={() => {
        console.log("an image has been preloaded!")
        setPreLoaded((current) => {
          const changed = [...current]
          changed.push(title)
          return changed
        })
      }}
    />
  )
}
