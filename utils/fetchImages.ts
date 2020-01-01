import { IImageContext, Image } from "../providers/ImageContextProvider"
import fetch from "node-fetch"

interface ArtWork {
  sys: {
    id: string
    type: "Entry"
    contentType: { sys: { id: "artWork" } }
  }
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
  sys: {
    id: string
    type: "Asset"
  }
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

export default async (): Promise<IImageContext> => {
  console.log("process.env.CONTENTFUL_API is", process.env.CONTENTFUL_API)
  console.log(
    "process.env.CONTENTFUL_API_KEY is",
    process.env.CONTENTFUL_API_KEY
  )
  const res = await fetch(`${process.env.CONTENTFUL_API}?include=1`, {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`
    }
  })

  const json = await res.json()
  //   console.log("res.json() is", json)

  const {
    items,
    includes: { Asset }
  }: { items: any[]; includes: { Asset: Asset[] } } = json

  //   console.log("items are", items)
  //   console.log("Asset is", Asset)

  const art: ArtWork[] = items.filter(item => {
    console.log("item.sys.contentType is", item.sys.contentType)
    console.log("item is", item)
    return item.sys.contentType.sys.id === "artWork"
  })

  const illustration: Image[] = []
  const animation: Image[] = []
  const fineArt: Image[] = []
  for (let artWork of art) {
    const asset = Asset.find(
      asset => asset.sys.id === artWork.fields.media.sys.id
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

  return { images: { animation, illustration, "fine-art": fineArt } }
}
