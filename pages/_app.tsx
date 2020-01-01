import React from "react"
import App from "next/app"
import ImageContextProvider from "../providers/ImageContextProvider"
import fetchImages from "../utils/fetchImages"

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const imageContext = await fetchImages()
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, imageContext }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ImageContextProvider context={(this.props as any).imageContext}>
        <Component {...pageProps} />
      </ImageContextProvider>
    )
  }
}

export default MyApp
