export default () => {
  return (
    <>
      <div className="portrait:hidden absolute top-0 right-0 w-full h-full bg-white z-50">
        orientation: landscape
      </div>
      <div className="landscape:hidden absolute top-0 right-0 w-full h-full bg-white z-50">
        orientation: portrait
      </div>
    </>
  )
}
