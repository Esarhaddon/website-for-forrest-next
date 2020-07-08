import { CSSProperties } from "react"

interface SvgProps {
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export default ({ className, style }: SvgProps) => (
  <svg
    {...{ className, style }}
    viewBox="0 0 329 329"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
      <rect
        id="Rectangle"
        transform="translate(164.571068, 164.928932) rotate(45.000000) translate(-164.571068, -164.928932) "
        x="-50.9289322"
        y="144.928932"
        width="431"
        height="40"
        rx="6"
      ></rect>
      <path
        d="M-45.0370132,144.962987 L373.962987,144.962987 C377.276695,144.962987 379.962987,147.649278 379.962987,150.962987 L379.962987,178.962987 C379.962987,182.276695 377.276695,184.962987 373.962987,184.962987 L-45.0370132,184.962987 C-48.3507217,184.962987 -51.0370132,182.276695 -51.0370132,178.962987 L-51.0370132,150.962987 C-51.0370132,147.649278 -48.3507217,144.962987 -45.0370132,144.962987 Z"
        id="Rectangle"
        transform="translate(164.462987, 164.962987) rotate(135.000000) translate(-164.462987, -164.962987) "
      ></path>
    </g>
  </svg>
)
