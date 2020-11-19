import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react"

interface IModalContext {
  hideModal: boolean
  setHideModal: React.Dispatch<React.SetStateAction<boolean>>
  lastClicked: "prev" | "next"
  setLastClicked: React.Dispatch<React.SetStateAction<"prev" | "next">>
}

const ModalContext = createContext({} as IModalContext)
export const useModalContext = () => {
  return useContext(ModalContext)
}

const ModalProvider = (props: any) => {
  const [hideModal, setHideModal] = useState(true)
  const [lastClicked, setLastClicked] = useState<"prev" | "next">(null)

  return (
    <ModalContext.Provider
      value={{
        hideModal,
        setHideModal,
        lastClicked,
        setLastClicked,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
