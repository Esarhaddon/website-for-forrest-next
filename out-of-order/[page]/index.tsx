import Layout from "../../components/PortfolioLayout"
import { useRouter } from "next/router"
import { useImage } from "../../providers/ImageContextProvider"
// import Link from "next/link"

export default () => {
  const { images } = useImage()
  const router = useRouter()
  const page = router.query.page ? router.query.page.toString() : "illustration"

  return (
    <Layout isFor={page}>
      <div
        className="grid"
        style={{
          display: "grid",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          marginBottom: "-5px"
        }}
      >
        {images[page]
          ? images[page].map((image, i) => {
              // TO DO: make a new Image to detect when the background image loads etc
              return (
                <div
                  key={i}
                  className=""
                  style={{
                    paddingTop: "calc(150% - 5px)",
                    position: "relative",
                    height: 0
                  }}
                >
                  {/* <Link href="/[page]/[image]" as={`/${page}/${image.name}`}>
                    <a
                      className="absolute flex items-center justify-center text-3xl text-white"
                      style={{
                        top: "5px",
                        left: "5px",
                        width: "calc(100% - 10px)",
                        height: "calc(100% - 10px)"
                      }}
                    >
                      <div
                        className="absolute w-full h-full off-bg-cover bg-no-repeat bg-center text-black off-bg-auto"
                        style={{
                          backgroundImage: `url(${image.src}?h=520)`, // TO DO: use src set to set smaller images for phone size
                          backgroundSize: "cover"
                        }}
                      />
                    </a>
                  </Link> */}
                </div>
              )
            })
          : null}
      </div>
    </Layout>
  )
}
