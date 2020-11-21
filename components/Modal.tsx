import ExitX from "./icons/close"
import TallArrow from "./icons/tallArrow"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useModalContext } from "../providers/ModalProvider"

interface ModalProps {
  imageHeight: number
  src: string
  nextTitle?: string
  prevTitle?: string
  fromGrid: string
}

const Modal = ({
  imageHeight,
  src,
  nextTitle,
  prevTitle,
  fromGrid,
}: ModalProps) => {
  const { hideModal, setHideModal } = useModalContext()

  return (
    <div
      className={` fixed top-0 left-0 w-full h-full z-50 flex itmes-center justify-center ${
        hideModal ? "hidden" : ""
      }`}
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
          onClick={() => {
            setHideModal(true)
          }}
          className="w-full h-full relative"
          style={{
            background: `center / contain no-repeat url(${src}?h=${
              imageHeight * 2
            })`,
          }}
        ></div>
      </div>
      <ArrowButtonArea action="prev" title={prevTitle} {...{ fromGrid }} />
      <ArrowButtonArea action="next" title={nextTitle} {...{ fromGrid }} />
      <ExitX
        className="absolute z-50 text-gray-200 fill-current cursor-pointer"
        style={{
          top: "calc(2% + 1rem)",
          right: "2%",
          width: ".85rem",
          height: ".85rem",
        }}
        onClick={() => {
          setHideModal(true)
        }}
      />
    </div>
  )
}

export default Modal

interface ArrowButtonAreaProps {
  action: "prev" | "next"
  title?: string
  fromGrid: string
}

const ArrowButtonArea = ({ action, fromGrid, title }: ArrowButtonAreaProps) => {
  const [showArrow, setShowArrow] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>(null)

  const { lastClicked, setLastClicked } = useModalContext()

  const interval = 1500

  const newTimeout = (interval: number) => {
    clearTimeout(timeoutId)
    const id = setTimeout(() => {
      setShowArrow(false)
      setTimeoutId(null)
    }, interval)
    setTimeoutId(id)
  }

  useEffect(() => {
    if (lastClicked === action) {
      setShowArrow(true)
      newTimeout(interval)
    }
  }, [lastClicked])

  if (!title) {
    return null
  }

  return (
    <Link
      href="/[grid]/[singleImage]"
      as={`/${fromGrid}/${title.replace(/ /g, "-").toLowerCase()}`}
    >
      <a className="cursor-default">
        <div
          className={`z-50 absolute ${
            action === "prev" ? "left-0 justify-start" : "right-0 justify-end"
          } top-0 h-full w-1/3 text-white flex items-center`}
          onClick={() => setLastClicked(action)}
          onMouseMove={() => {
            if (!showArrow) {
              setShowArrow(true)
              newTimeout(interval)
            } else {
              newTimeout(interval)
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
      </a>
    </Link>
  )
}
