import React from "react"
import Layout from "../../components/Layout"

const ImagePage = () => (
  <Layout isFor="about">
    <div className="w-full h-full flex justify-center items-center text-6xl text-bold text-gray-500">
      [IMAGE]
    </div>
  </Layout>
)

ImagePage.getInitialProps = ctx => {
  console.log("ctx is", ctx)
  return {}
}

export default ImagePage
