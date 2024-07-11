import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import hero from "../../assets/images/hero-img.jpg"

export default function Hero() {
  return (
    <div className="hero-img">
      <div className="hero-text-container">
        {/* <h4 className="text-colored">train with</h4> */}
        <h1>MOMNTM</h1>
        {/* <hr className="left" /> */}
        {/* <p>Personal training. Nutritional coaching. Fitness education.</p> */}
        <Link to="/programs">
          <button>See Programs</button>
        </Link>
      </div>
    </div>
  )
}
