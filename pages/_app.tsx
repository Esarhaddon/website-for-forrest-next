import React from "react"
import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    )
  }
}

export default MyApp
