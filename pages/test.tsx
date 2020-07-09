import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react"

export default () => {
  const [orientation, setOrientation] = useState<"portrait" | "landscape">()

  return (
    <div className="absolute top-0 right-0 bg-white w-full h-full">
      <div className="mx-auto">orientation: {orientation}</div>
      <div className="portrait:hidden absolute top-0 right-0 bg-white w-full h-full">
        actual: landscape
        <LandscapeDetector {...{ setOrientation }} />
      </div>
      <div className="landscape:hidden absolute top-0 right-0 bg-white w-full h-full">
        actual: portrait
        <PortraitDetector {...{ setOrientation }} />
      </div>
    </div>
  )
}

interface DetectorProps {
  setOrientation: Dispatch<SetStateAction<"portrait" | "landscape">>
}

const LandscapeDetector = ({ setOrientation }: DetectorProps) => {
  useEffect(() => {
    setOrientation("landscape")
  }, [])
  return <div className="absolute top-0 right-0 w-screen h-screen"></div>
}

const PortraitDetector = ({ setOrientation }: DetectorProps) => {
  useEffect(() => {
    setOrientation("portrait")
  }, [])
  return <div className="absolute top-0 right-0 w-screen h-screen"></div>
}
