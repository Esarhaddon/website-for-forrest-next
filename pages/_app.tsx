import React from "react"
import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import ScreenProvider from "../providers/ScreenProvider"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="default-div-height-layout-container">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon-16x16.png"
          />
        </Head>
        <ScreenProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScreenProvider>
      </div>
    )
  }
}

export default MyApp
