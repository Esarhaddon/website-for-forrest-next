interface ErrorMessage {
  text?: string
  code?: number
}

export default ({ text, code }: ErrorMessage) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="text-red-600">
        <div className="w-64 pl-8 pb-1 tracking-wide border-b-2 border-solid border-gray-800 text-2xl">
          Error<span className="px-2 text-black">:</span>
          {code ? code : null}
        </div>
        <div className="pt-1 pl-4 text-lg">
          {text
            ? text
            : "Something went wrong while loading this content. Please try again later."}
        </div>
      </div>
    </div>
  )
}
