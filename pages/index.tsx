import SocialAndEmail from "../components/SocialAndEmail"
import FDickison from "../components/icons/forrest-dickison"
import { useState } from "react"
import { useImgOnLoad } from "../hooks/useImgOnLoad"

export default function Index() {
  const [imgLoaded, setImgLoaded] = useState(false)
  const imgRef = useImgOnLoad(() => setImgLoaded(true))

  return (
    <div
      className="top-0 left-0 absolute h-full w-full bg-black flex flex-col items-center justify-center"
      style={{
        minHeight: "410px",
        background:
          "center / cover no-repeat url(https://images.squarespace-cdn.com/content/v1/56709e60e0327ca7aa292695/1487230311708-R2SOH38J23IDGP7V38SR/ke17ZwdGBToddI8pDm48kE1G8aDDySyXafgMqMi-3Wt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fIBAe0aRMxRrpn6J5i2IfAjEZwkdJGvTULFlkLSJhK3Nw/ForestCruise.jpg?format=1500w)",
      }}
    >
      <img
        className="h-0 w-0 hidden"
        ref={imgRef}
        src="https://images.squarespace-cdn.com/content/v1/56709e60e0327ca7aa292695/1487230311708-R2SOH38J23IDGP7V38SR/ke17ZwdGBToddI8pDm48kE1G8aDDySyXafgMqMi-3Wt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fIBAe0aRMxRrpn6J5i2IfAjEZwkdJGvTULFlkLSJhK3Nw/ForestCruise.jpg?format=1500w"
      />
      <div
        className={`absolute top-0 right-0 w-full h-full ${
          imgLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundColor: "#5bb1b2",
          transition: "opacity 200ms ease-in-out",
        }}
      />
      <FDickison
        className="z-50 px-4 max-w-full"
        style={{ maxHeight: "5rem" }}
      />
      <p className="z-50 text-white tracking-wide sm:tracking-wider text-base sm:text-xl my-8 sm:my-10">
        coming soon
      </p>
      <a
        className="z-50 text-white border-2 border-solid border-white py-2 sm:py-3 px-4 sm:px-5 text-sm cursor-pointer hover:bg-white hover:text-black"
        style={{
          letterSpacing: ".2rem",
          transition:
            "color 170ms ease-in-out, background-color 170ms ease-in-out",
        }}
        href="https://www.montanagallery.net/forest-dickisonart/"
      >
        MONTANA GALLERY
      </a>
      <div className="absolute mx-auto bottom-0 pb-10 sm:pb-16">
        <SocialAndEmail isDark={false} />
      </div>
    </div>
  )
}
