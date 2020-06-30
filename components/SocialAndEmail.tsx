import InstagramLogo from "../static/icons/001-instagram.svg"
import FacebookLogo from "../static/icons/002-facebook-circular-logo.svg"
import TwitterLogo from "../static/icons/003-twitter-circular-logo.svg"
import Twitter from "./icons/twitter"

interface SocialAndEmailProps {
  isDark: boolean
}

export default (props: SocialAndEmailProps) => {
  const brightness = props.isDark ? "dark" : "light"
  const baseColor = props.isDark ? "gray-900" : "white"

  return (
    <div className="flex justify-center">
      <div
        className={`flex justify-center cursor-pointer hover-text-transparent-${brightness} text-${baseColor}`}
      >
        <div
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out",
          }}
        >
          <a
            href="https://www.instagram.com/forrestdickison"
            target="_blank"
            rel="noopener"
          >
            <InstagramLogo className="h-8 w-8 fill-current mx-auto" />
          </a>
        </div>
        <div
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out",
          }}
        >
          <a
            href="https://www.facebook.com/forrestdickison/"
            target="_blank"
            rel="noopener"
          >
            <FacebookLogo className="h-8 w-8 fill-current mx-auto" />
          </a>
        </div>
        <div
          className={`w-12 hover:text-${baseColor}`}
          style={{
            transition: "color 170ms ease-in-out, opacity 170ms ease-in-out",
          }}
        >
          <a
            href="https://twitter.com/forrestdickison"
            target="_blank"
            rel="noopener"
          >
            <Twitter className="h-8 w-8 fill-current mx-auto" />
          </a>
        </div>
      </div>
    </div>
  )
}
