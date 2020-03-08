import InstagramLogo from "../static/icons/001-instagram.svg"
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg"
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg"
import EmailLogo from "../static/icons/004-email.svg"
import Link from "next/link"

interface SocialAndEmailProps {
  isDark: boolean
  includesEmailOnMobile: boolean
}

export default (props: SocialAndEmailProps) => {
  const brightness = props.isDark ? "dark" : "light"
  const baseColor = props.isDark ? "gray-900" : "white"

  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-center cursor-pointer hover-text-transparent-${brightness} text-${baseColor}`}
        // style={{ width: "9rem" }}
      >
        <a
          href="https://www.instagram.com/forrestdickison"
          target="_blank"
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
          }}
        >
          <InstagramLogo className="h-8 w-8 fill-current mx-auto" />
        </a>
        <div
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
          }}
        >
          <FacebookLogo className="h-8 w-8 fill-current mx-auto" />
        </div>
        <div
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
          }}
        >
          <TwitterLogo className="h-8 w-8 fill-current mx-auto" />
        </div>
        <div
          className={`w-12 hover:text-${baseColor} sm:hidden ${
            !props.includesEmailOnMobile ? "hidden" : ""
          }`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out"
          }}
        >
          <Link href="/contact">
            <a>
              <EmailLogo className="h-8 w-8 fill-current mx-auto" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
