import React, { useState } from "react"
import Head from "next/head"
import Layout from "../components/Layout"
import ScreenProvider from "../providers/ScreenProvider"
import ModalProvider from "../providers/ModalProvider"
import "../styles/style.css"

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0)

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
        <ModalProvider>
          <Layout>
            <Component {...{ ...pageProps, count, setCount }} />
          </Layout>
        </ModalProvider>
      </ScreenProvider>
    </div>
  )
}

export default MyApp
