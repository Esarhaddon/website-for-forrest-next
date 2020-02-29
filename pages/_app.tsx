import React from "react"
import App from "next/app"
import Head from "next/head"
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
      <div>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <ImageContextProvider context={(this.props as any).imageContext}>
          <Component {...pageProps} />
        </ImageContextProvider>
      </div>
    )
  }
}

export default MyApp
