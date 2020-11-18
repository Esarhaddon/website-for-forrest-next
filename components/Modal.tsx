import ExitX from "./icons/close"
import TallArrow from "./icons/tallArrow"
import { useState, useEffect } from "react"

interface ModalProps {
  imageHeight: number
  src: string
  hideModal: boolean
  setHideModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default ({ imageHeight, src, hideModal, setHideModal }: ModalProps) => {
  return (
    <div
      className={` fixed top-0 left-0 w-full h-full z-50 flex itmes-center justify-center ${
        hideModal ? "hidden" : ""
      }`}
      onClick={() => setHideModal(true)}
    >
      <div
        className="relative top-0 left-0 w-full h-full z-50 flex itmes-center justify-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, .95)",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
      >
        <div
          className="w-full h-full relative"
          style={{
            background: `center / contain no-repeat url(${src}?h=${
              imageHeight * 2
            })`,
          }}
        ></div>
      </div>
      <ArrowButtonArea action="prev" {...{ hideModal }} />
      <ArrowButtonArea action="next" {...{ hideModal }} />
      <ExitX
        className="absolute z-50 text-gray-200 fill-current cursor-pointer"
        style={{
          top: "calc(2% + 1rem)",
          right: "2%",
          width: ".85rem",
          height: ".85rem",
        }}
      />
    </div>
  )
}

interface ArrowButtonAreaProps {
  action: "prev" | "next"
  hideModal: boolean
}

const ArrowButtonArea = ({ action, hideModal }: ArrowButtonAreaProps) => {
  const [showArrow, setShowArrow] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(null)

  const interval = 1500

  const newTimeout = () => {
    clearTimeout(timeoutId)
    const id = setTimeout(() => {
      setShowArrow(false)
      setTimeoutId(null)
    }, interval)
    setTimeoutId(id)
  }

  useEffect(() => {
    if (hideModal === false) {
      setShowArrow(true)
      newTimeout()
    }
  }, [hideModal])

  return (
    <div
      className={`z-50 absolute ${
        action === "prev" ? "left-0 justify-start" : "right-0 justify-end"
      } top-0 h-full w-1/3 text-white flex items-center`}
      onClick={(e) => {
        e.stopPropagation()
        console.log("going ", action)
      }}
      onMouseMove={() => {
        if (!showArrow) {
          setShowArrow(true)
          newTimeout()
        } else {
          newTimeout()
        }
      }}
      onMouseLeave={() => {
        clearTimeout(timeoutId)
        setShowArrow(false)
      }}
    >
      <TallArrow
        className={`${
          showArrow ? "opacity-100" : "opacity-0"
        } mx-10 text-gray-200 fill-current h-10`}
        style={{
          ...(action === "prev"
            ? {
                transform: "scaleX(-1)",
              }
            : null),
          filter: "drop-shadow( 1px 1px 2px rgba(0, 0, 0, .5))",
        }}
      />
    </div>
  )
}
