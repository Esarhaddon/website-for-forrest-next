import { createContext, useContext, useState } from "react"

interface IImageContext {
  preLoaded: string[]
  setPreLoaded: React.Dispatch<React.SetStateAction<string[]>>
}

const ImageContext = createContext({} as IImageContext)
export function useImageContext() {
  return useContext(ImageContext)
}

export default function ImageProvider(props: any) {
  const [preLoaded, setPreLoaded] = useState([] as string[])

  return (
    <ImageContext.Provider value={{ preLoaded, setPreLoaded }}>
      {props.children}
    </ImageContext.Provider>
  )
}
