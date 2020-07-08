import { CSSProperties } from "react"

interface SvgProps {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export default ({ className, style }: SvgProps) => (
  <svg
    {...{ className, style }}
    width="28"
    height="16"
    viewBox="0 0 28 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H28V2H0V0Z" fill="black" />
    <path d="M0 7H28V9H0V7Z" fill="black" />
    <path d="M0 14H28V16H0V14Z" fill="black" />
  </svg>
)
