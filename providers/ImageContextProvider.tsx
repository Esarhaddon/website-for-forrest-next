import { createContext, useContext, ReactNode } from "react"
import fetch from "node-fetch"

export interface IImageContext {
  images: {
    illustration: Image[] | null
    animation: Image[] | null
    "fine-art": Image[] | null
  } | null
}

export interface Image {
  src: string
  name: string
  title: string
  description: string
}

const ImageContext = createContext({} as IImageContext)

interface ImageContextProviderProps {
  context: IImageContext
  children: ReactNode
}

const ImageContextProvider = (props: ImageContextProviderProps) => (
  <ImageContext.Provider value={props.context}>
    {props.children}
  </ImageContext.Provider>
)

export const useImage = () => {
  const context = useContext(ImageContext)
  return context
}

export default ImageContextProvider
