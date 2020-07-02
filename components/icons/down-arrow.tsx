import { CSSProperties } from "react"

interface DownArrowProps {
  className?: string
  style?: CSSProperties
}

export default ({ className, style }: DownArrowProps) => {
  return (
    <svg
      {...{ className, style }}
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 640 640"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M0 320C0 143.293 143.293 0 320 0s320 143.293 320 320-143.293 320-320 320S0 496.707 0 320zm181.337-85.737v95.635L320 430.6l138.699-100.702v-95.635L320 334.93 181.337 234.263z" />
    </svg>
  )
}
