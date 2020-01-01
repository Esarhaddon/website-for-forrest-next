import { createContext, useContext, ReactNode } from "react"
import fetch from "node-fetch"

interface IImageContext {
  images: {
    illustration: Image[] | null
    animation: Image[] | null
    "fine-art": Image[] | null
  } | null
}

const ImageContext = createContext({} as IImageContext)

interface ArtWork {
  id: string
  type: "Entry"
  contentType: { sys: { id: "artWork" } }
  fields: {
    type: "illustration" | "animation" | "fine art"
    title: "string"
    description?: "string"
    media: {
      sys: {
        id: string
      }
    }
  }
}

interface Asset {
  id: string
  type: "Asset"
  fields: {
    title: string
    file: {
      url: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
    }
  }
}

interface Image {
  src: string
  name: string
  title: string
  description: string
}

const fetchImages = async () => {
  const res = await fetch(`${process.env.CONTENTFUL_API}?include=1`, {
    headers: {
      Authorization: process.env.CONTENTFUL_API_KEY
    }
  })

  const {
    items,
    includes
  }: { items: any[]; includes: Asset[] } = await res.json()

  const art: ArtWork[] = items.filter(
    item => item.contentType.sys.id === "artWork"
  )

  const illustration: Image[] = []
  const animation: Image[] = []
  const fineArt: Image[] = []
  for (let artWork of art) {
    const asset = includes.find(
      asset => asset.id === artWork.fields.media.sys.id
    )

    const image = {
      src: asset.fields.file.url,
      name: asset.fields.title,
      title: artWork.fields.title,
      ...{
        description: artWork.fields.description
          ? artWork.fields.description
          : null
      }
    }

    switch (artWork.fields.type) {
      case "animation":
        animation.push(image)
        break
      case "illustration":
        illustration.push(image)
        break
      case "fine art":
        fineArt.push(image)
    }
  }

  return { animation, illustration, "fine art": fineArt }
}

const ImageContextProvider = ({ children }: { children: ReactNode }) => {
  const context: IImageContext = {
    images: {
      illustration: [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-9",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-10",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-11",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-12",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-13",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
      ],
      animation: [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
      ],
      "fine-art": [
        {
          src: "fake.com",
          name: "fake-image-1",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-2",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-3",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-4",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-5",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-6",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-7",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-8",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-9",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        },
        {
          src: "fake.com",
          name: "fake-image-10",
          title: "the title text",
          description:
            "a really amazing work of art that you should be really imppressed by and pay a lot of money for"
        }
      ]
    }
  }
  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  )
}

export const useImage = () => {
  const context = useContext(ImageContext)
  return context
}

export default ImageContextProvider
