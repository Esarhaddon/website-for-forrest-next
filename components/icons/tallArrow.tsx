import { CSSProperties } from "react"

interface SvgProps {
  className?: string
  style?: CSSProperties
}

export default ({ className, style }: SvgProps) => (
  <svg
    {...{ className, style }}
    width="60"
    height="180"
    viewBox="0 0 60 180"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="52" y="85" width="9" height="104" transform="rotate(30 52 85)" />
    <rect
      width="9"
      height="104"
      transform="matrix(0.866025 -0.5 -0.5 -0.866025 52 94.5666)"
    />
  </svg>
)
