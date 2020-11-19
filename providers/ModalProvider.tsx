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
}

const ModalContext = createContext({} as IModalContext)
export const useModalContext = () => {
  return useContext(ModalContext)
}

const ModalProvider = (props: any) => {
  const [hideModal, setHideModal] = useState(true)
  return (
    <ModalContext.Provider
      value={{
        hideModal,
        setHideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
};

export default ModalProvider;
