import React, { useState, useEffect, useRef } from "react"
import { Router } from "next/router"

export default () => {
  const [isLoading, setIsLoading] = useState(false)
  const [showText, setShowText] = useState(false)

  const timeoutRef = useRef<any>()
  useEffect(() => {
    if (isLoading) {
      timeoutRef.current = setTimeout(() => setShowText(true), 1000)
    } else {
      setShowText(false)
      clearTimeout(timeoutRef.current)
    }
  }, [isLoading])

  Router.events.on("routeChangeStart", () => setIsLoading(true))
  Router.events.on("routeChangeComplete", () => setIsLoading(false))

  return (
    <div
      className={`flex items-center justify-center w-full h-full bg-white z-50 ${
        !isLoading ? "hidden" : ""
      }`}
    >
      <div className={`text-gray-800 ${!showText ? "hidden" : ""}`}>
        Loading...
      </div>
    </div>
  )
}
