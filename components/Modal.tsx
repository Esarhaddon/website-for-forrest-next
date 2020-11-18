import {useState } from 'react'
import ExitX from './icons/close'

interface ModalProps {
    imageHeight: number,
    src: string,
    hideModal: boolean,
    setHideModal: React.Dispatch<React.SetStateAction<boolean>>

}

export default (props: ModalProps) => {
    return (
        <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex itmes-center justify-center ${
          props.hideModal ? "hidden" : ""
        }`}
        style={{
          backgroundColor: "rgba(0, 0, 0, .95)",
          paddingRight: "5vw",
          paddingLeft: "5vw",
          paddingTop: "2vh",
          paddingBottom: "2vh",
        }}
        onClick={() => {
          props.setHideModal(true)
        }}
      >
        <ExitX
          className="absolute z-10 text-gray-200 fill-current cursor-pointer"
          style={{
            top: "calc(2% + 1rem)",
            right: "2%",
            width: ".85rem",
            height: ".85rem",
          }}
        />
        <div
          className="w-full h-full"
          style={{
            background: `center / contain no-repeat url(${props.src}?h=${
              props.imageHeight * 2
            })`,
          }}
        />
      </div>
    )
}