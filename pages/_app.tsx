import React from "react";
import App from "next/app";
import ImageContextProvider from "../providers/ImageContextProvider";
import cookie from "js-cookie";
import { useEffect } from "react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ImageContextProvider>
        <Component {...pageProps} />
      </ImageContextProvider>
    );
  }
}

export default MyApp;
