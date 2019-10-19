import React from "react";
import App from "next/app";
import ImageContextProvider from "../components/ImageContextProvider";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ImageContextProvider
        value={{
          images: {
            illustration: [{ src: "fake.com", name: "fake-image" }],
            animation: null,
            "fine-art": null
          }
        }}
      >
        <Component {...pageProps} />
      </ImageContextProvider>
    );
  }
}

export default MyApp;
