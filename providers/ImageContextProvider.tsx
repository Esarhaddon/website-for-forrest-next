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

const ImageContextProvider = (props: ImageContextProviderProps) => {
  // const context: IImageContext = {
  //   images: {
  //     illustration: [
  //       {
  //         src: "fake.com",
  //         name: "fake-image-1",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-2",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-3",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-4",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-5",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-6",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-7",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-8",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-9",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-10",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-11",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-12",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-13",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       }
  //     ],
  //     animation: [
  //       {
  //         src: "fake.com",
  //         name: "fake-image-1",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-2",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-3",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-4",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-5",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-6",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-7",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-8",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       }
  //     ],
  //     "fine-art": [
  //       {
  //         src: "fake.com",
  //         name: "fake-image-1",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-2",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-3",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-4",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-5",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-6",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-7",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-8",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-9",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       },
  //       {
  //         src: "fake.com",
  //         name: "fake-image-10",
  //         title: "the title text",
  //         description:
  //           "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
  //       }
  //     ]
  //   }
  // }
  return (
    <ImageContext.Provider value={props.context}>
      {props.children}
    </ImageContext.Provider>
  )
}

export const useImage = () => {
  const context = useContext(ImageContext)
  return context
}

export default ImageContextProvider
