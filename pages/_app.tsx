import React, { useState } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import ScreenProvider from "../providers/ScreenProvider"
import ModalProvider from "../providers/ModalProvider"
import ImageProvider from "../providers/ImageProvider"
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
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
        <ImageProvider>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </ImageProvider>
      </ScreenProvider>
    </div>
  )
}

export default MyApp
