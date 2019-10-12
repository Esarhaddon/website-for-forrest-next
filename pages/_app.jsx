import React from "react";
import App from "next/app";
import ImageContextProvider from "../components/ImageContextProvider";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log("hello from myApp!");
    return (
      // <ImageContext.Provider value={{ someContext: "hello! hello! hello!" }}>
      //   <Component {...pageProps} />
      // </ImageContext.Provider>
      <ImageContextProvider
        value={{ image: { src: "no src", name: "no name" } }}
      >
        <Component {...pageProps} />
      </ImageContextProvider>
    );
  }
}

export default MyApp;
