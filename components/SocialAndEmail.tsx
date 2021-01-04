import Instagram from "./icons/instagram"
import Facebook from "./icons/facebook"
import Twitter from "./icons/twitter"

interface SocialAndEmailProps {
  isDark: boolean
}

const SocialAndEmail = ({ isDark }: SocialAndEmailProps) => (
  <div className="flex justify-center">
    <div
      className={`flex justify-center cursor-pointer ${
        isDark
          ? "hover-text-transparent-dark text-gray-900"
          : "hover-text-transparent-light text-white"
      }`}
    >
      <div
        className={`w-12 ${
          isDark ? "hover:text-gray-900" : "hover:text-white"
        }`}
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out",
        }}
      >
        <a
          href="https://www.instagram.com/forrestdickison"
          target="_blank"
          rel="noopener"
        >
          <Instagram className="h-8 w-8 fill-current mx-auto" />
        </a>
      </div>
      <div
        className={`w-12 ${
          isDark ? "hover:text-gray-900" : "hover:text-white"
        }`}
        style={{
          transition: "color 170ms ease-in-out, opacity 170ms ease-in-out",
        }}
      >
        <a
          href="https://www.facebook.com/forrestdickison/"
          target="_blank"
          rel="noopener"
        >
          <Facebook className="h-8 w-8 fill-current mx-auto" />
        </a>
      </div>
      <div
        className={`w-12 ${
          isDark ? "hover:text-gray-900" : "hover:text-white"
        }`}
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

export default SocialAndEmail
