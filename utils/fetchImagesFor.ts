import fetch from "node-fetch"

export interface Image {
  src: string
  title: string
  description?: string
  originalHeight: number
  originalWidth: number
}

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
    image: {
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

export default async (
  imagesFor: "animation" | "illustration" | "fine art"
): Promise<Image[]> => {
  const res = await fetch(
    `${process.env.CONTENTFUL_API}?content_type=artWork&fields.type=${imagesFor}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`
      }
    }
  )
  const json = await res.json()
  const {
    items,
    includes: { Asset }
  }: { items: ArtWork[]; includes: { Asset: Asset[] } } = json

  const images: Image[] = items.map(item => {
    const asset = Asset.find(Asset => Asset.sys.id === item.fields.image.sys.id)
    return {
      title: item.fields.title,
      description: item.fields.description,
      src: asset.fields.file.url,
      originalHeight: asset.fields.file.details.image.height,
      originalWidth: asset.fields.file.details.image.width
    }
  })

  return images
}
