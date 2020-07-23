import { useRef, useCallback } from "react"

// seems that with SSR image onLoad events sometimes might not fire (https://github.com/facebook/react/issues/15446)
export const useImgOnLoad = (cb: () => void) => {
  const listener = useRef<() => void>(null)
  const prevImg = useRef<HTMLImageElement>(null)

  const callbackRef = useCallback((img: HTMLImageElement | null) => {
    if (img) {
      prevImg.current = img
      if (img.complete) {
        cb()
      } else {
        listener.current = cb
        img.addEventListener("load", listener.current)
      }
    } else if (prevImg.current && listener.current) {
      prevImg.current.removeEventListener("load", listener.current)
    }
  }, [])

  return callbackRef
}
