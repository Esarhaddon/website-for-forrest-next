import React, { useState, useEffect, useRef } from "react"

export default () => {
  const [showText, setShowText] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  useEffect(() => {
    timeoutRef.current = setTimeout(() => setShowText(true), 500)
    return () => {
      clearTimeout(timeoutRef.current)
    }
  })

  return (
    <>
      <div className="w-screen h-screen pointer-events-none" />
      <div
        className={`${
          showText ? "opacity-100" : "opacity-0"
        } w-screen h-screen absolute top-0 right-0 flex items-center justify-center pointer-events-none`}
        style={{
          transition: "opacity .2s linear",
        }}
      >
        Loading
        <span
          style={{
            marginLeft: ".1rem",
            animation: "dot-one 2s linear infinite",
          }}
        >
          .
        </span>
        <span
          style={{
            marginLeft: ".1rem",
            animation: "dot-two 2s linear  infinite",
          }}
        >
          .
        </span>
        <span
          style={{
            marginLeft: ".1rem",
            animation: "dot-three 2s linear infinite",
          }}
        >
          .
        </span>
      </div>
    </>
  )
}
