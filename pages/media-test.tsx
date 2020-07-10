import { useScreenContext } from "../components/ScreenProvider"

export default () => {
  const context = useScreenContext()

  if (!context.value) {
    return <div>...</div>
  }

  const { width, height, orientation, innerWidth, innerHeight } = context.value

  return (
    <div className="absolute top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center">
      <div>orientation: {orientation}</div>
      <div>screen width: {width}</div>
      <div>screen height: {height}</div>
      <div>inner width: {innerWidth}</div>
      <div>inner height: {innerHeight}</div>
      <div
        className="absolute top-0 right-0 border border-solid border-red-500"
        style={{
          height: innerHeight,
          width: innerWidth,
        }}
      />
    </div>
  )
}
