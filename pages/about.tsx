import fetch from "node-fetch"
import ErrorMessage from "../components/ErrorMessage"

interface AboutPageProps {
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
  errorMessage,
  errorCode,
}: AboutPageProps) => {
  if (errorMessage || errorCode) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          height: "40vh",
        }}
      >
        <ErrorMessage text={errorMessage} code={errorCode} />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center px-4">
      <div className="w-11/12 sm:w-7/12 md:w-6/12 leading-loose flex flex-col items-center lg:block lg:ml-16 mt-20 md:mt-8 sm:mt-20 lg:text-left text-justify mb-4">
        <div className="relative w-6/12 lg:float-left lg:mr-6 lg:ml-0 ml-16 lg:mb-0 mb-6">
          <div
            className="border border-solid border-black w-full h-0"
            style={{ paddingTop: "120%" }}
          >
            <div
              className="bg-gray-500 absolute right-0 bottom-0 text-center flex items-center justify-center text-gray-100 text-3xl"
              style={{
                width: "calc(100% + 4rem)",
                height: "calc(100% + 4rem)",
              }}
            >
              [a cool image]
            </div>
          </div>
        </div>
        {textContent.map((paragraph, i) => (
          <p className={`${i < textContent.length - 1 ? "mb-4" : ""}`}>
            {paragraph.content.map((item) => {
              if (item.nodeType === "text") {
                return item.value
              } else {
                return (
                  <a className="underline text-gray-700" href={item.data.uri}>
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

AboutPage.getInitialProps = async (): Promise<Partial<any>> => {
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
    return { textContent }
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
