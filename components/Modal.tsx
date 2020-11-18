import ExitX from "./icons/close"
import TallArrow from "./icons/tallArrow"
import { useState } from "react"

interface ModalProps {
  imageHeight: number
  src: string
  hideModal: boolean
  setHideModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default (props: ModalProps) => {
  return (
    <div
      className={`border border-solid border-red-500 fixed top-0 left-0 w-full h-full z-50 flex itmes-center justify-center ${
        props.hideModal ? "hidden" : ""
      }`}
      onClick={() => props.setHideModal(true)}
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
            background: `center / contain no-repeat url(${props.src}?h=${
              props.imageHeight * 2
            })`,
          }}
        ></div>
      </div>
      <ArrowButtonArea action="prev" />
      <ArrowButtonArea action="next" />
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

const ArrowButtonArea = ({ action }: { action: "prev" | "next" }) => {
  const [showArrow, setShowwArrow] = useState(false)
  return (
    <div
      className={`z-50 absolute ${
        action === "prev" ? "left" : "right"
      }-0 top-0 h-full w-1/3 border border-solid border-red-500 text-white flex items-center justify-center`}
      onClick={(e) => {
        e.stopPropagation()
        console.log("going ", action)
      }}
    >
      <TallArrow
        className="text-gray-300 fill-current h-10"
        style={
          action === "prev"
            ? {
                transform: "scaleX(-1)",
              }
            : null
        }
      />
    </div>
  )
}
