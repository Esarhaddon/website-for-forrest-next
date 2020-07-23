import fetch from "node-fetch"
import ErrorMessage from "../components/ErrorMessage"
import { useState, useEffect, useRef } from "react"
import { useDominantColor } from "../hooks/useDominantColor"
import LayoutPaddingContainer from "../components/LayoutPaddingContainer"
import Head from "next/head"

interface AboutPageProps {
  imageSrc: string
  textContent: Paragraph[]
  errorMessage?: string
  errorCode?: number
}

interface Paragraph {
  nodeType: "paragraph"
  content: (Link | Text)[]
}

interface Link {
  nodeType: "hyperlink"
  content: Text[]
  data: {
    uri: string
  }
}

interface Text {
  nodeType: "text"
  value: string
}

const AboutPage = ({
  textContent,
  imageSrc,
  errorMessage,
  errorCode,
}: AboutPageProps) => {
  const imgLoadingColor: string = useDominantColor(imageSrc)
  const [imgContainerHeight, setImgContainerHeight] = useState(0)
  const [imgIsLoaded, setImgIsLoaded] = useState(false)

  const imgContainerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const el = imgContainerRef.current
    if (el) {
      setImgContainerHeight(el.offsetHeight * 2)
    }
  }, [])

  if (errorMessage || errorCode) {
    return (
      <LayoutPaddingContainer>
        <ErrorMessage text={errorMessage} code={errorCode} />
      </LayoutPaddingContainer>
    )
  }

  return (
    <div className="flex flex-col items-center px-4">
      <Head>
        <title key="title">About</title>
      </Head>
      {imgContainerHeight ? (
        <img
          className="hidden"
          src={`${imageSrc}?h=${imgContainerHeight}`}
          onLoad={() => setImgIsLoaded(true)}
        />
      ) : null}
      <div className="max-w-3xl w-11/12 sm:w-7/12 md:w-6/12 leading-loose flex flex-col items-center lg:block lg:ml-16 mt-20 sm:mt-16 lg:mt-8 lg:text-left text-justify mb-4">
        <div className="relative w-6/12 lg:float-left lg:mr-6 lg:ml-0 ml-16 lg:mb-0 mb-6">
          <div className="w-full h-0" style={{ paddingTop: "120%" }}>
            <div
              ref={imgContainerRef}
              className="absolute right-0 bottom-0"
              style={{
                ...(imgIsLoaded
                  ? {
                      background: `center / cover no-repeat url(${imageSrc}?h=${imgContainerHeight})`,
                    }
                  : null),
                width: "calc(100% + 4rem)",
                height: "calc(100% + 4rem)",
              }}
            />
            <div
              className="absolute right-0 bottom-0"
              style={{
                width: "calc(100% + 4rem)",
                height: "calc(100% + 4rem)",
                backgroundColor: imgIsLoaded ? "transparent" : imgLoadingColor,
                transition: "background-color 200ms ease-out",
              }}
            />
          </div>
        </div>
        {textContent.map((paragraph, i) => (
          <p
            className={`${i < textContent.length - 1 ? "mb-4" : ""}`}
            key={"paragraph_" + i}
          >
            {paragraph.content.map((item, j) => {
              if (item.nodeType === "text") {
                return item.value
              } else {
                return (
                  <a
                    className="underline text-gray-600 hover:text-black"
                    key={"link_" + j}
                    href={item.data.uri}
                  >
                    {item.content[0].value}
                  </a>
                )
              }
            })}
          </p>
        ))}
      </div>
    </div>
  )
}

AboutPage.getInitialProps = async (): Promise<Partial<AboutPageProps>> => {
  try {
    const res = await fetch(
      `${process.env.CONTENTFUL_API}?content_type=about`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
        },
      }
    )

    if (!res.ok) {
      throw new Error(`${res.status}`)
    }

    const json = await res.json()
    const textContent = json.items[0].fields.bio.content
    const imageAsset = json.includes.Asset.find(
      (asset) => asset.sys.id === json.items[0].fields.image.sys.id
    )
    const imageSrc = imageAsset.fields.file.url

    return { textContent, imageSrc }
  } catch (e) {
    let errorCode: number | undefined = undefined
    const regex = /^[0-9]+&/
    if (regex.test(e.message)) {
      errorCode = parseInt(e.message)
    }

    const errorMessage =
      "Something went wrong while loading content for /about."

    return { errorMessage, errorCode }
  }
}

export default AboutPage
