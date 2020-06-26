import fetch from "node-fetch"

export interface Image {
  src: string
  title: string
  description?: string
  originalHeight: number
  originalWidth: number
  offsets?: Offsets
}
interface IllustrationPageContent {
  total: number
  items: [
    {
      fields: {
        illustrations: Reference[]
      }
    }
  ]
  includes: {
    Entry: ArtWork[]
    Asset: Asset[]
  }
}

interface Reference {
  sys: {
    id: string
  }
}

// in future maybe a generic type Entry<U>
interface ArtWork {
  sys: {
    id: string
    type: "Entry"
    contentType: { sys: { id: "artWork" } }
  }
  fields: {
    title: "string"
    description?: "string"
    offsets?: Offsets
    image: {
      sys: {
        id: string
      }
    }
  }
}

interface Offsets {
  left: number
  top: number
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

export default async (imagesFor: "illustration"): Promise<Image[]> => {
  const res = await fetch(
    `${process.env.CONTENTFUL_API}?content_type=illustration&include=2`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
      },
    }
  )

  // at some point you need to figure out pagination
  const content: IllustrationPageContent = await res.json()
  const illustrations: Reference[] = content.items[0].fields.illustrations
  const entries: ArtWork[] = illustrations.map((illustration) =>
    content.includes.Entry.find((entry) => illustration.sys.id === entry.sys.id)
  )
  const images: Image[] = entries.map((entry) => {
    const asset = content.includes.Asset.find(
      (asset) => asset.sys.id === entry.fields.image.sys.id
    )
    return {
      title: entry.fields.title,
      description: entry.fields.description,
      src: asset.fields.file.url,
      originalHeight: asset.fields.file.details.image.height,
      originalWidth: asset.fields.file.details.image.width,
      offsets: entry.fields.offsets,
    }
  })

  return images
}
