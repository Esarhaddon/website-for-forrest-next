import { useState, useEffect } from "react"
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
