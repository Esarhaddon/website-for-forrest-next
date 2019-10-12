import React from "react";
import App from "next/app";
import ImageContext from "../components/ImageContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log("hello from myApp!");
    return (
      <ImageContext.Provider value={{ someContext: "hello hello hello" }}>
        <Component {...pageProps} />
      </ImageContext.Provider>
    );
  }
}

export default MyApp;
