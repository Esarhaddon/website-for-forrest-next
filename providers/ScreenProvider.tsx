import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react"

interface IScreenContext {
  value?: {
    width: number
    height: number
    innerWidth: number
    innerHeight: number
    orientation: Orientation
  }
}

interface ScreenProviderProps {
  children: ReactNode
}

type Orientation = "portrait" | "landscape"

const ScreenContext = createContext({} as IScreenContext)
export const useScreenContext = (): IScreenContext => {
  const context = useContext(ScreenContext)
  return context
}

const ScreenProvider = (props: ScreenProviderProps) => {
  const [context, setContext] = useState<IScreenContext>({})

  useEffect(() => {
    window.document.getElementsByTagName("html")[0].style.height = "100%"
    const portraitList = window.matchMedia("(orientation: portrait)")
    const landscapeList = window.matchMedia("(orientation: landscape)")
    const orientation = portraitList.matches ? "portrait" : "landscape"

    const getDimensionsFor = (
      orientation: Orientation
    ): {
      width: number
      height: number
      innerWidth: number
      innerHeight: number
    } => {
      const scrWidth = screen.width
      const scrHeight = screen.height
      const bigDimension = scrWidth > scrHeight ? scrWidth : scrHeight
      const smallDimenstion = scrWidth < scrHeight ? scrWidth : scrHeight

      const htmlEl = window.document.getElementsByTagName("html")[0]
      const innerWidth = htmlEl.offsetWidth
      const innerHeight = htmlEl.offsetHeight

      return {
        width: orientation === "portrait" ? smallDimenstion : bigDimension,
        height: orientation === "portrait" ? bigDimension : smallDimenstion,
        innerWidth,
        innerHeight,
      }
    }

    let portraitListener: any = undefined
    let landscapeListener: any = undefined
    const setUpListenerFor = (orientation: Orientation) => {
      const listener = (e: MediaQueryListEvent) => {
        if (e.matches) {
          console.log("event match!")
          setContext({
            value: {
              ...getDimensionsFor(orientation),
              orientation: orientation,
            },
          })
        }
      }
      if (orientation === "portrait") {
        portraitList.addListener(listener)
        portraitListener = listener
      } else {
        landscapeList.addListener(listener)
        landscapeListener = listener
      }
    }

    setContext({
      value: {
        ...getDimensionsFor(orientation),
        orientation,
      },
    })
    setUpListenerFor("portrait")
    setUpListenerFor("landscape")

    return () => {
      portraitList.removeListener(portraitListener)
      landscapeList.removeListener(landscapeListener)
    }
  }, [])

  return (
    <ScreenContext.Provider value={context}>
      {props.children}
    </ScreenContext.Provider>
  )
}

export default ScreenProvider
