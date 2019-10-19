import React from "react";
import App from "next/app";
import ImageContextProvider from "../components/ImageContextProvider";

class MyApp extends App {
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
