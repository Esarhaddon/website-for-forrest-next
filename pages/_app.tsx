import React from "react"
import App from "next/app"
import Head from "next/head"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}

export default MyApp
